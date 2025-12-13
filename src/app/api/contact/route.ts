import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramNotification(data: any) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram bot credentials not configured');
    return;
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📮 *Postal Code:* ${data.postalCode1}-${data.postalCode2}
📍 *Address:* ${data.address}
📞 *Phone:* ${data.phone}
📅 *Appointment Dates:* ${data.appointmentDates.join(', ')}
📦 *Items:* ${data.items}
🗓️ *Work Date:* ${data.workDate}
📋 *Packages:* ${Object.entries(data.packages)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(', ')}
📧 *Email:* ${data.email || 'N/A'}
📝 *Other:* ${data.other || 'N/A'}

⏰ *Submitted:* ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    // Don't throw - we don't want to fail the entire request if Telegram fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract form data
    const {
      name,
      postalCode1,
      postalCode2,
      address,
      phone,
      appointmentDates,
      items,
      workDate,
      packages,
      email,
      other,
    } = body;

    // Format data for Google Sheets
    // Each element represents a column in the spreadsheet
    const rowData = [
      new Date().toISOString(), // Timestamp
      name,
      `${postalCode1}-${postalCode2}`,
      address,
      phone,
      appointmentDates.join(', '),
      items,
      workDate,
      // Convert packages object to string representation
      Object.entries(packages)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(', '),
      email,
      other,
    ];

    // Send Telegram notification (non-blocking)
    sendTelegramNotification(body).catch(err =>
      console.error('Telegram notification failed:', err)
    );

    // Append data to Google Sheet
    await appendToSheet(rowData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

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

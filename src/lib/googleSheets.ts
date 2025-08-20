import { google } from 'googleapis';
import { JWT } from 'google-auth-library';


const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_SHEET_ID = process.env.GOOGLE_SHEETS_SHEET_ID;

/**
 * Authenticates with Google Sheets API
 */
async function getAuthClient() {
  if (!GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_CLIENT_EMAIL) {
    throw new Error('Google Sheets API credentials are missing');
  }

  const client = new JWT({
    email: GOOGLE_SHEETS_CLIENT_EMAIL,
    key: GOOGLE_SHEETS_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await client.authorize();
  return client;
}

/**
 * Gets the current sheet name in format DD/MM/YY
 */
function getCurrentSheetName(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);
  
  return `${month}/${year}`;
}

/**
 * Checks if a sheet exists and creates it if it doesn't
 */
async function ensureSheetExists(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sheets: any,
  spreadsheetId: string,
  sheetName: string
): Promise<void> {
  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets.properties.title',
    });

    let sheetExists = false;
    if (response.data.sheets) {
      sheetExists = response.data.sheets.some(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (sheet: any) => sheet.properties && sheet.properties.title === sheetName
      );
    }

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:K1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['Timestamp', 'Name', 'Postal Code', 'Address', 'Phone', 'Appointment Dates', 'Items', 'Work Date', 'Packages', 'Email', 'Other']],
        },
      });
    }
  } catch (error) {
    console.error('Error ensuring sheet exists:', error);
    throw error;
  }
}

/**
 * Appends data to a Google Sheet, creating a new sheet based on current month/year if needed
 */
export async function appendToSheet(data: (string | number | boolean)[]) {
  try {
    if (!GOOGLE_SHEETS_SHEET_ID) {
      throw new Error('Google Sheets ID is missing');
    }

    const authClient = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    
    const sheetName = getCurrentSheetName();
    
    await ensureSheetExists(sheets, GOOGLE_SHEETS_SHEET_ID, sheetName);

    const request = {
      spreadsheetId: GOOGLE_SHEETS_SHEET_ID,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [data],
      },
    };

    const response = await sheets.spreadsheets.values.append(request);
    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    throw error;
  }
}

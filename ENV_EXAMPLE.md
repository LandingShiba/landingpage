# Environment Variables for Google Sheets Integration

Create a `.env.local` file in the root of your project with the following variables:

```
# Google Sheets API credentials
# Replace these with your actual values from Google Cloud Console
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SHEET_ID=your-google-sheet-id-here
```

## How to get these credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Create a service account and download the JSON key file
5. Create a new Google Sheet and share it with the service account email (with editor permissions)
6. Copy the Sheet ID from the URL of your Google Sheet
   - The URL format is: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`

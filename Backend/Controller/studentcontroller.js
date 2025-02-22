import { google } from "googleapis";
import  dotenv  from 'dotenv';

dotenv.config();

export const handleSubmit = async (req, res, next) => {
  try {
    const {
      regNumber,
      name,
      year,
      title,
      mobile,
      section,
      internshipObtained,
      startDate,
      endDate,
      period,
      companyName,
      placementSource,
      stipend,
      internshipType,
      location,
      fileUrl,
    } = req.body;

    // Initialize Google Auth with correct path
    const auth = new google.auth.GoogleAuth({
      keyFile: "/home/saisandeep845/Desktop/IP-Assignment/IP-Assignment/Backend/Credentials/wise-bongo-451704-r2-0dc4eccc1b1f.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = "Sheet1!A1";

    const newRow = [
      regNumber,
      name,
      year,
      title,
      mobile,
      section,
      internshipObtained,
      startDate,
      endDate,
      period,
      companyName,
      placementSource,
      stipend,
      internshipType,
      location,
      fileUrl,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [newRow],
      },
    });

    res
      .status(200)
      .json({ message: "Data successfully appended to Google Sheet" });
  } catch (error) {
    console.error("Error updating Google Sheet:", error);
  }
};

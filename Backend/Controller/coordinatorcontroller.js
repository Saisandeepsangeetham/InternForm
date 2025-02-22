import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const getData = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "/home/saisandeep845/Desktop/IP-Assignment/IP-Assignment/Backend/Credentials/wise-bongo-451704-r2-0dc4eccc1b1f.json", // e.g., "Backend/Credentials/wise-bongo-451704-r2-0dc4eccc1b1f.json"
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const range = "Sheet1!A2:O"; // Data from row 2 to O (adjust as needed)

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values;
};

export const handleBatch1 = async (req, res, next) => {
  try {
    const rows = await getData();

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "No data found in the sheet." });
    }

    const headers = [
      "regNumber",
      "name",
      "year",
      "title",
      "mobile",
      "section",
      "internshipObtained",
      "startDate",
      "endDate",
      "period",
      "companyName",
      "placementSource",
      "stipend",
      "internshipType",
      "location",
      "fileUrl",
    ];

    const data = rows.map((row) =>
      Object.fromEntries(
        headers.map((header, index) => [header, row[index] || ""])
      )
    );

    const batch1Students = data.filter(
        (student) => student.year && student.year.includes("1st Year")
    );

    res.status(200).json({ batch1Students });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const handleBatch2 = async(req,res,next) => {
    try {

        const rows = getData();
        if (!rows || rows.length === 0) {
          return res.status(404).json({ message: "No data found in the sheet." });
        }
    
        const headers = [
          "regNumber",
          "name",
          "year",
          "title",
          "mobile",
          "section",
          "internshipObtained",
          "startDate",
          "endDate",
          "period",
          "companyName",
          "placementSource",
          "stipend",
          "internshipType",
          "location",
          "fileUrl",
        ];
    
        const data = rows.map((row) =>
          Object.fromEntries(headers.map((header, index) => [header, row[index]]))
        );
    
        const batch1Students = data.filter(
          (student) => student.year && student.year.includes("2nd Year")
        );
    
        res.status(200).json({ batch1Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const handleBatch3 = async(req,res,next) => {
    try {

        const rows = getData();
        if (!rows || rows.length === 0) {
          return res.status(404).json({ message: "No data found in the sheet." });
        }
    
        const headers = [
          "regNumber",
          "name",
          "year",
          "title",
          "mobile",
          "section",
          "internshipObtained",
          "startDate",
          "endDate",
          "period",
          "companyName",
          "placementSource",
          "stipend",
          "internshipType",
          "location",
          "fileUrl",
        ];
    
        const data = rows.map((row) =>
          Object.fromEntries(headers.map((header, index) => [header, row[index]]))
        );
    
        const batch1Students = data.filter(
          (student) => student.year && student.year.includes("3rd Year")
        );
    
        res.status(200).json({ batch1Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export const handleBatch4 = async(req,res,next) => {
    try {

        const rows = getData();
        if (!rows || rows.length === 0) {
          return res.status(404).json({ message: "No data found in the sheet." });
        }
    
        const headers = [
          "regNumber",
          "name",
          "year",
          "title",
          "mobile",
          "section",
          "internshipObtained",
          "startDate",
          "endDate",
          "period",
          "companyName",
          "placementSource",
          "stipend",
          "internshipType",
          "location",
          "fileUrl",
        ];
    
        const data = rows.map((row) =>
          Object.fromEntries(headers.map((header, index) => [header, row[index]]))
        );
    
        const batch1Students = data.filter(
          (student) => student.year && student.year.includes("4th Year")
        );
    
        res.status(200).json({ batch1Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }

}   
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const getData = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "/home/saisandeep845/Desktop/IP-Assignment/IP-Assignment/Backend/Credentials/wise-bongo-451704-r2-0dc4eccc1b1f.json",
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

  const rows =  response.data.values;
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
  return data;
};

export const getAllstudents = async(req,res,next) =>{
  try {
    const data_std = await getData();

    res.status(200).json({ data_std });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ message: "Internal Server Error" });    
  }
}

export const handleBatch1 = async (req, res, next) => {
  try {
    const data = await getData();

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
        const data = await getData();
        const batch2Students = data.filter(
          (student) => student.year && student.year.includes("2nd Year")
        );
    
        res.status(200).json({ batch2Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const handleBatch3 = async(req,res,next) => {
    try {
        const data = await getData();
        const batch3Students = data.filter(
          (student) => student.year && student.year.includes("3rd Year")
        );
    
        res.status(200).json({ batch3Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export const handleBatch4 = async(req,res,next) => {
    try {
        const data = await getData();
        const batch4Students = data.filter(
          (student) => student.year && student.year.includes("4th Year")
        );
    
        res.status(200).json({ batch4Students });
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }

}   

export const stdThroughCDC = async(req,res,next)=>{
  try {
    const data = await getData();
    const stdThroughcdc = data.filter(
      (student) => student.placementSource && student.placementSource.includes("Through CDC")
    );    
    res.status(200).json({stdThroughcdc});

  } catch (error) {
    console.log("Error fetching Google Sheets data:",error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export const std_Not_ThroughCDC = async(req,res,next)=>{
  try {
    const data = await getData();
    const std_Not_Throughcdc = data.filter(
      (student) => student.placementSource && student.placementSource.includes("Off Campus")
    );    
    res.status(200).json({std_Not_Throughcdc});

  } catch (error) {
    console.log("Error fetching Google Sheets data:",error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export const std_Industry_intern = async(req,res,next)=>{
  try {
    const data = await getData();
    const std_indurstry = data.filter(
      (student) => student.internshipType && student.internshipType.includes("Industry")
    );    
    res.status(200).json({std_indurstry});

  } catch (error) {
    console.log("Error fetching Google Sheets data:",error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export const std_Abroad = async(req,res,next)=>{
  try {
    const data = await getData();

    const std_abroad = data.filter(
      (student) => student.location && student.location.includes("Abroad")
    );    
    res.status(200).json({std_abroad});

  } catch (error) {
    console.log("Error fetching Google Sheets data:",error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export const std_India = async(req,res,next)=>{
  try {
    const data = await getData();

    const std_india = data.filter(
      (student) => student.location && student.location.includes("India")
    );    
    res.status(200).json({std_india});

  } catch (error) {
    console.log("Error fetching Google Sheets data:",error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export const stdStipendMoreThanLakh = async (req, res, next) => {
  try {
    const data = await getData();

    const studentsWithHighStipend = data.filter((student) => {
      const stipend = Number(student.stipend) || 0;
      return stipend > 100000;
    });

    res.status(200).json({ studentsWithHighStipend });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const stdCompanyWise = async (req, res, next) => {
  try {
    const { company } = req.body;
    if (!company) {
      return res.status(400).json({ message: "Company name is required in the request body." });
    }
    const data = await getData();

    const filteredStudents = data.filter(student => 
      student.companyName &&
      student.companyName.toLowerCase() === company.toLowerCase()
    );

    res.status(200).json({ company, students: filteredStudents });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const stdByInternshipPeriod = async (req, res, next) => {
  try {
    const { period } = req.body;
    if (!period) {
      return res.status(400).json({ message: "Internship period is required in the request body." });
    }
    
    const data = await getData();
    
    const filteredStudents = data.filter(student => {
      const studentPeriod = Number(student.period) || 0;
      return studentPeriod === Number(period);
    });

    res.status(200).json({ period, students: filteredStudents });
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

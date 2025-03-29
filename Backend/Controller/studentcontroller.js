import multer from "multer";
import path from "path";
import fs from "fs";
import Student from "../Model/Student.js";
import { createFolder, uploadFile } from '../Configuration/googleDriveService.js';

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF and DOC files are allowed."));
    }
  },
}).fields([
  { name: "offerLetter", maxCount: 1 },
  { name: "recommendation", maxCount: 1 },
  { name: "completion", maxCount: 1 },
]);

export const handleSubmit = async (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: "File upload error: " + err.message });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      if (!req.files?.offerLetter || !req.files?.recommendation || !req.files?.completion) {
        return res.status(400).json({ message: "All files are required" });
      }

      const { name, "reg-number": regNumber } = req.body;
      const folderName = `${regNumber}_${name}`;

      const folderId = await createFolder(folderName);

      const offerLetterFile = await uploadFile(
        req.files.offerLetter[0].path,
        `${name}_offer_letter${path.extname(req.files.offerLetter[0].originalname)}`,
        req.files.offerLetter[0].mimetype,
        folderId
      );

      const recommendationFile = await uploadFile(
        req.files.recommendation[0].path,
        `${name}_letter_recommendation${path.extname(req.files.recommendation[0].originalname)}`,
        req.files.recommendation[0].mimetype,
        folderId
      );

      const completionFile = await uploadFile(
        req.files.completion[0].path,
        `${name}_certificate_completion${path.extname(req.files.completion[0].originalname)}`,
        req.files.completion[0].mimetype,
        folderId
      );

      const driveLinkurl = `https://drive.google.com/drive/folders/${folderId}`;

      const studentData = {
        regNumber: req.body["reg-number"],
        name: req.body.name,
        year: req.body.year,
        title: req.body.title,
        mobile: req.body.mobile,
        section: req.body.section,
        internshipObtained: req.body["internship-obtained"],
        startDate: new Date(req.body["start-date"]),
        endDate: new Date(req.body["end-date"]),
        period: parseInt(req.body.period),
        companyName: req.body["company-name"],
        placementSource: req.body["placement-source"],
        stipend: Number(req.body.stipend) || 0,
        internshipType: req.body["internship-type"],
        location: req.body.location,
        driveLinkUrl: driveLinkurl
      };

      const student = new Student(studentData);
      await student.save();

      Object.values(req.files).forEach(fileArray => {
        fileArray.forEach(file => {
          fs.unlink(file.path, err => {
            if (err) console.error('Error deleting local file:', err);
          });
        });
      });

      res.status(201).json({
        message: "Student data saved successfully",
        student,
      });
    } catch (error) {
      console.error("Error saving student data:", error);
      if (req.files) {
        Object.values(req.files).forEach(fileArray => {
          fileArray.forEach(file => {
            fs.unlink(file.path, err => {
              if (err) console.error('Error deleting file:', err);
            });
          });
        });
      }
      res.status(500).json({
        message: "Error saving student data",
        error: error.message,
      });
    }
  });
};
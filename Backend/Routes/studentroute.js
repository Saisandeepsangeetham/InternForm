import express from "express";
import { handleSubmit } from "../Controller/studentcontroller.js";
import { createFolder } from "../Configuration/googleDriveService.js"; // Note the .js extension

const Std_router = express.Router();

Std_router.post('/submit', handleSubmit);

// Endpoint to create a test folder in Google Drive
// This is just an example; you can modify it as needed
Std_router.get('/test-folder', async (req, res) => {
  try {
    const internshipFolderId = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID; // Replace with your actual folder ID
    const testFolderName = 'Test Folder1';

    const folderId = await createFolder(testFolderName, internshipFolderId);
    res.json({ message: `Folder '${testFolderName}' created successfully`, folderId });
  } catch (error) {
    console.error('Error creating test folder:', error);
    res.status(500).send(error.message);
  }
});

export default Std_router;
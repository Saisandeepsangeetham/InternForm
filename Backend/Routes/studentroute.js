import express from "express";
import { handleSubmit } from "../Controller/studentcontroller.js";  // Note the .js extension

const Std_router = express.Router();

Std_router.post('/submit', handleSubmit);

export default Std_router;
import express from "express";
import { handleBatch1,handleBatch2,handleBatch3,handleBatch4 } from "../Controller/coordinatorcontroller.js";

const Coordinator_Router = express.Router();

Coordinator_Router.get('/getbatch1',handleBatch1);
Coordinator_Router.get('/getbatch2',handleBatch2);

export default Coordinator_Router;
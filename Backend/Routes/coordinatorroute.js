import express from "express"
import { getCoordinatorDetails } from "../Controller/coordinatorcontroller";

const router = express.Router();
const coordinatorController = require('../controllers/coordinatorController');

// Endpoint to get coordinator details
router.get('/coordinator', coordinatorController.getCoordinatorDetails);

module.exports = router;

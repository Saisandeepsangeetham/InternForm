import express from "express";
import { getAllstudents, handleBatch1,handleBatch2,handleBatch3,handleBatch4, std_Abroad, std_India, std_Industry_intern, std_Not_ThroughCDC, stdByInternshipPeriod, stdCompanyWise, stdStipendMoreThanLakh, stdThroughCDC } from "../Controller/coordinatorcontroller.js";

const Coordinator_Router = express.Router();

Coordinator_Router.get('/allstd',getAllstudents);
Coordinator_Router.get('/getbatch1',handleBatch1);
Coordinator_Router.get('/getbatch2',handleBatch2);
Coordinator_Router.get('/getbatch3',handleBatch3);
Coordinator_Router.get('/getbatch4',handleBatch4);
Coordinator_Router.get('/stdthroughcdc',stdThroughCDC);
Coordinator_Router.get('/stdnotthroughcdc',std_Not_ThroughCDC);
Coordinator_Router.get('/industrystd',std_Industry_intern);
Coordinator_Router.get('/abroad',std_Abroad);
Coordinator_Router.get('/india',std_India);
Coordinator_Router.get('/stipend',stdStipendMoreThanLakh);

Coordinator_Router.post('/company',stdCompanyWise);
Coordinator_Router.post('/period',stdByInternshipPeriod);

export default Coordinator_Router;
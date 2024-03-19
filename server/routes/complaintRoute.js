import  express  from "express";
import { createSupport } from "../controller/reqComplaintController.js";


const complaintRoute =express.Router();


//complaint routes
complaintRoute.post("/create-complaint", createSupport );

export default complaintRoute;
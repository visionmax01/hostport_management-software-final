import  express  from "express";
import { createSupport,getAllComplaintData , deleteComplaint, searchComplaint} from "../controller/reqComplaintController.js";


const complaintRoute =express.Router();


//complaint routes
complaintRoute.post("/create-complaint", createSupport );
complaintRoute.get("/get-all-complaint", getAllComplaintData );
complaintRoute.delete("/deleteComplaint/:id", deleteComplaint );
complaintRoute.get("/searchComplaint/:complaintNumber", searchComplaint);

export default complaintRoute;
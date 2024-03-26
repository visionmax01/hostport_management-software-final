import mongoose from "mongoose";
const ComplaintSchema =new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    accountNo: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    complaintNumber: {
        type: String,
        unique: true
    },
    remarks:{
        type: String,
    },
    complaintStatus:{
        type: String,
    }
})




export default mongoose.model("Complaint", ComplaintSchema);

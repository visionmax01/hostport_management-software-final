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
        required: true,
        unique: true
    }
})




export default mongoose.model("Complaint", ComplaintSchema);

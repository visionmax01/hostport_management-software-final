import mongoose from "mongoose";

const paymentreqSchema = new mongoose.Schema({
    accountNo: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    startedDate: {
        type: String,
        required: true
    },
    endedDate: {
        type: String,
        required: true
    },
    amountPaid: {
        type: String,
        required: true
    },
    remarks: {
        type: String
    },
    paymentSlip:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
 
});

export default mongoose.model("Paymentreq", paymentreqSchema);

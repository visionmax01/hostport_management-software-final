import mongoose from "mongoose";

const joinreqSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        email: true,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: false
    },
    dateofBirth: {
        type: Date,
        required: false
    },
   
    packageDetail: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    
    createdDate: {
        type: Date,
        required: false
    },
   
});

export default mongoose.model("NewjoiningRequest", joinreqSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    packageDetail:{
        type: String,
        required: true
    },
    startedDate: {
        type: Date,
        required: true
    },
    endedDate: {
        type: Date,
        required: true
    },
    accountStatus: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: false

    },
    address: {
        type: String,
        required: true
    },
    profilePhoto:{
        type: String,
        required: false
    },
    documentProof:{
        type: String,
        required: false
    }
});

export default mongoose.model("User", userSchema);

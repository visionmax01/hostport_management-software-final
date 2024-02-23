import mongoose from "mongoose";
const AdminSchema =new mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        max:8
    }
})

const AdminModel = mongoose.model("Admin", AdminSchema)
export {AdminModel as Admin}
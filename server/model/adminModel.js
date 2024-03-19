import mongoose from "mongoose";
const AdminSchema =new mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
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
    }
})




export default mongoose.model("Admin", AdminSchema);

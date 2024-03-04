import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  accountNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 8,
  },
  upackage: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  IdentitiDocument: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export  {UserModel as User};

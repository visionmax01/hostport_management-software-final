import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  fullName: {
    type: string
  },
  email: {
    type: string
  },
  phoneNo: {
    type: string
  },
  gender: {
    type: string
  },
  accountNo: {
    type: string
  },
  password: {
    type: string
  },
  upackage: {
    type: string
  },
  startDate: {
    type: string
  },
  endDate: {
    type: string
  },
  status: {
    type: string
  },
  createdDate: {
    type: string
  },
  address: {
    type: string
  },
  profilePic: {
    type: string
  },
  IdentitiDocument: {
    type: string
  },
});

const UserModel = mongoose.model("User", UserSchema);

export  {UserModel as User};

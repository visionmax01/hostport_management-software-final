import express from "express";
import bcrypt from "bcrypt";
import {User} from "../models/User.js";

const router = express.Router();

router.post('/add-user', async (req, res) => {
  const { fullName, email, phoneNo, gender, accountNo, password, upackage, startDate, endDate, status, createdDate, address, profilePic, IdentitiDocument } = req.body;
  
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new UserModel({ 
      fullName, 
      email, 
      phoneNo, 
      gender, 
      accountNo, 
      password: hashedPassword, 
      upackage, 
      startDate, 
      endDate, 
      status, 
      createdDate, 
      address, 
      profilePic, 
      IdentitiDocument 
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export { router as UserRouter };

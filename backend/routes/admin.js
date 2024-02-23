
import express from "express";
import bcryt from "bcrypt";
import { Admin } from "../models/Admin.js";
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const router = express.Router();


/* register/ add Admin finction here */
router.post('/register', async (req, res) => {
  const { role,username, name, email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    const Uname = await Admin.findOne({ username });
    if (admin) {
      return res.json({ message: "Admin already exists" });
    }
    if(Uname){
      return res.json({ message: "Username already exists" });
    }
    
    const hashedPassword = await bcryt.hash(password, 10);
    const newAdmin = new Admin({role, name, username, email, password: hashedPassword });
    await newAdmin.save();
    return res.json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


/* login finction here */
router.post('/login', async(req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if(!admin) {
    return res.json({message:"enter valid username and password"})
  }
  const validpassword = await bcryt.compare(password,admin.password);
  if(!validpassword){
    return res.json({message:"password is incorrect"})
  }
  const token = jwt.sign({username: admin.username},process.env.KEY,{expiresIn:'1h'})
  res.cookie('token', token,{httpOnly:true, maxAge:36000})
  return res.json({status:true, message:"Login Successfully"})


})



/* forget psassword route and sending a password reset link finction here */
router.post('/forget-password', async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.json({ message: "user not found" })
    }
    const token = jwt.sign({id: admin._id }, process.env.KEY, { expiresIn: '5m' })
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bhishansah@gmail.com',
        pass: 'wpzg kusr osjl dxxp'
      }
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    var mailOptions = {
      from: 'bhishansah@gmail.com',
      to: email,
      subject: 'Reset Password',
      text: 'Click this link to reset your password: http://localhost:5173/reset-password/' + encodedToken

    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error while sending email" })
      } else {
        return res.json({ status: true, message: "Email Sent" })
      }
    });
  }
  catch (err) {
    console.log(err)
  }
})


/* reset password finction here */

router.post('/reset-password/:token', async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashedPassword = await bcryt.hash(password, 10)
    await Admin.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
    return res.json({ status: true, message: "Password reset successfully" })
  } catch (err) {
    return res.json("Invalid Token")
  }
})

/* protected routes finction here */
const verifyAdmin = async(req, res, next) => {
  try{
   const token = req.cookies.token;
     if (!token) {
       return res.json({ status: false, message: "Invalid Token" })
     }
     const decoded = jwt.verify(token, process.env.KEY);
     next();
   }
  catch(err){
    return res.json(err)
  }
 }
router.get('/verify',verifyAdmin, (req, res) => {
  return res.json({ status: true, message:"authhorized"})
});




/* logout finction here */
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({status:true, message:"Logout Successfully"})
})
export { router as UserRouter };

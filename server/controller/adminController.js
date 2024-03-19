import bcrypt from "bcrypt";
import Admin from "../model/adminModel.js";
import  Jwt  from "jsonwebtoken";
import nodemailer from "nodemailer";


  export const authenticateAdmin = async (req, res, next) => {
    const token = req.cookies.token; // Assuming the token is stored in a cookie
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    try {
      const decoded = Jwt.verify(token, process.env.KEY);
      const admin = await Admin.findById(decoded.id); // Find admin by ID from token
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      req.admin = admin; // Set admin details in the request object
      next();
    } catch (error) {
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
  };



export const registerAdmin = async (req, res) => {
  const { role, username, name, email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    const Uname = await Admin.findOne({ username });
    if (admin) {
      return res.json({ message: "Admin already exists" });
    }
    if (Uname) {
      return res.json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      role,
      name,
      username,
      email,
      password: hashedPassword
    });
    await newAdmin.save();
    return res.json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.json({ message: "Enter valid email and password" });
  }
  const validPassword = await bcrypt.compare(password, admin.password);
  if (!validPassword) {
    return res.json({ msg: "Enter Password is Incorrect!" });
  }
  const token = Jwt.sign({ username: admin.username }, process.env.KEY, { expiresIn: '1h' });
  res.cookie('token', token,{httpOnly:true, maxAge:36000}) 
  return res.json({ status: true, message: "Login Successfully" });
};




export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.json({ message: "user not found" })
    }


    const token = Jwt.sign({ id: admin._id }, process.env.KEY, { expiresIn: '5m' })
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bhishansah@gmail.com',
        pass: 'wpzg kusr osjl dxxp'
      }
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    const resetLink = `http://localhost:5173/reset-password/` + encodedToken;
    const emailContent = `
      <html>
      <head>
        <style>
          /* Add any CSS styles here */
        </style>
      </head>
      <body>
        <div>
          <div><h1>Av Network Pvt.Ltd</h1></div>
          <h2>Reset Password</h2>
          <p>Dear User,</p>
          <p>We received a request to reset your password. Click the button below to reset your Password:</p>
          <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 15px 25px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Reset Password</a>
          <p>If you didn't request a password reset, you can ignore this email.</p>
        </div>
      </body>
      </html>
    `;
    var mailOptions = {
      from: 'bhishansah@gmail.com',
      to: email,
      subject: 'Reset Password',
      html: emailContent

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
}

export const resetPassword = async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;
  try {
    const decoded = await Jwt.verify(token, KEY);
    const id = decoded.id;
    const hashedPassword = await bcrypt.hash(password, 10)
    await Admin.findByIdAndUpdate({_id: id }, { password: hashedPassword });
    return res.json({ status: true, message: "Password reset successfully" })
  } catch (err) {
    return res.json("Invalid Token")
  }
}

export const logoutAdmin = async (req, res) => {
  try {
    // Clear session token
    res.clearCookie("token");
    return res.json({ status: true, msg: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json({ message: "Error logging out" });
  }
};




export const getOneAdmin = async (req, res) => {
  try {
      const id = req.params.id;
      const adminExist = await Admin.findById(id);
      if (!adminExist) {
          return res.status(404).json({ msg: 'No user with this ID' });
      }
      res.status(200).json(adminExist);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

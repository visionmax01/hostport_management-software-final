// authController.jsimport
import Admin from "../model/adminModel.js";
import express  from 'express';
import jwt  from 'jsonwebtoken';
const authRoute = express.Router();


// Sample secret key (you should use your own secret key)
const secretKey = 'your_secret_key';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, secretKey);
    req.admin = decoded; // Store decoded token data in req.admin
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Route to fetch admin profile
authRoute.get('/profile', verifyToken, (req, res) => {
  // Fetch admin data from req.admin
  const adminData = req.admin;
  res.json(adminData);
});

export default authRoute;

import express from "express";
import { registerAdmin, adminLogin, forgetPassword, resetPassword, logoutAdmin, getOneAdmin,getAdminProfile, authenticateAdmin } from "../controller/adminController.js";

const routes = express.Router();

routes.get("/fatch-oneAdmin/:id", getOneAdmin);
routes.post("/register", registerAdmin);
routes.post("/login-admin", adminLogin);
routes.post("/forget-password", forgetPassword);
routes.post("/reset-password/:token", resetPassword);
routes.post("/logout", logoutAdmin);

// Route to get logged-in admin details
routes.get('/profile', authenticateAdmin, getAdminProfile);

export default routes;

// userRoutes.js

import express from "express";
import multer from "multer";
import path from "path";
import bodyParser from "body-parser";
import { createUser, deleteUser, getAllUserData, getOne, update, getUserPhoto,searchByAccountNo, searchByMobileNumber } from "../controller/userController.js";
import { NewJoiningReq, getAllJoiningUser, getOneData } from "../controller/joinRequestController.js";
import { createPaymentreq, mergeUserDataWithPaymentreq } from "../controller/paymentreqController.js";

const route = express.Router();

// Middleware setup
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));
route.use(express.static('public'));

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "public", "userImages"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Multer instance setup
const upload = multer({ storage: storage });

// User routes
route.post("/createUser", upload.single('profilePhoto'), createUser);
route.get("/get-user-profile/:id", getUserPhoto);
route.get("/getAllUserData", getAllUserData);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/deleteUser/:id", deleteUser);

// New joining request controller routes
route.post("/SendjoningReq", NewJoiningReq);
route.get("/getAllJoinRequest", getAllJoiningUser);
route.get("/getOneUserdata/:id", getOneData);

// Payment request
route.post("/makePayment", createPaymentreq);
route.post("/getuserWithPayment", mergeUserDataWithPaymentreq);

// Search routes
route.get("/searchByAccountNo/:accountNo", searchByAccountNo);
route.get("/searchByMobileNumber/:mobileNumber", searchByMobileNumber);

export default route;

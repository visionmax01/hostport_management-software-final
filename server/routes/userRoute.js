import express from "express";
import multer from "multer";
import Path from "path";
import { createUser, deleteUser, getAllUserData, getOne, update, getUserPhoto } from "../controller/userController.js";
import { NewJoiningReq, getAllJoiningUser, getOneData } from "../controller/joinRequestController.js";
import bodyParser from "body-parser";

const route = express.Router();

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, Path.join(process.cwd(), "public", "userImages"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// User routes
route.post("/createUser", upload.single('profilePhoto'), createUser);
route.get("/get-user-profile/:id",  getUserPhoto);
route.get("/getAllUserData", getAllUserData);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.get("/deleteUser/:id", deleteUser);

// New joining request controller routes
route.post("/SendjoningReq", NewJoiningReq);
route.get("/getAllJoinRequest", getAllJoiningUser);
route.get("/getOneUserdata/:id", getOneData);

export default route;

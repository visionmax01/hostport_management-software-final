import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';
import routes from './routes/adminRoute.js';
import complaintRoute from './routes/complaintRoute.js';
import cookieParser from "cookie-parser";

dotenv.config();




const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGOURL;

mongoose.connect(MONGO_URL).then(() => {
    console.log("Mongoose DB Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.log(error));



app.use("/api", route);
app.use("/api", complaintRoute);
app.use("/auth", routes);

export default app;

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { AdminRouter } from './routes/admin.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth', AdminRouter); 

mongoose.connect('mongodb://127.0.0.1:27017/AVnetworkDB');

app.listen(process.env.PORT, () => {
    console.log('Server is running');
}); 

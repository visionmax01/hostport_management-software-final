import User from "../model/userModel.js";
import bcryptjs from 'bcryptjs';
import path from "path";
import fs from "fs";

// Function to hash password
const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10);
        return passwordHash;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Controller to create a new user
// Controller to create a new user
export const createUser = async (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: "Profile photo is required" });
        }

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Generate account number
        const lastUser = await User.findOne().sort({ account: -1 });
        const lastAccountNumber = lastUser ? lastUser.account : "AV0000";
        const lastAccountNumberNumeric = parseInt(lastAccountNumber.slice(2)) + 1;
        const newAccountNumber = "AV" + lastAccountNumberNumeric.toString().padStart(4, '0');
        // Hash password
        const hashedPassword = await securePassword(req.body.password);

        // Create new user
        const newUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            gender: req.body.gender,
            account: newAccountNumber, // Adjust according to your logic
            password: hashedPassword,
            packageDetail: req.body.packageDetail,
            startedDate: req.body.startedDate,
            endedDate: req.body.endedDate,
            accountStatus: req.body.accountStatus,
            address: req.body.address,
            profilePhoto: req.file.filename, // Use uploaded file name for profilePhoto
            documentProof: req.body.documentProof
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




export const getUserPhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user || !user.profilePhoto) {
            return res.status(404).json({ error: "User photo not found" });
        }

        // Construct the path to the user's photo file
        const photoDirectory = path.join(process.cwd(), "public", "userImages");
        const photoPath = path.join(photoDirectory, user.profilePhoto);

        // Read the photo file and send it in the response
        fs.readFile(photoPath, (err, data) => {
            if (err) {
                return res.status(500).json({ error: "Error reading user photo" });
            }
            res.writeHead(200, {
                "Content-Type": "image/jpeg",
                "Content-Length": data.length,
            });
            res.end(data);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
export const getAllUserData = async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: 'No user with this ID' });
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            fullname,
            email,
            phoneNo,
            gender,
            password,
            packageDetail,
            startedDate,
            endedDate,
            accountStatus,
            address,
            profilePhoto,
            documentProof
        } = req.body;

        // Find the user by ID
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: 'No user found with this ID' });
        }

        // Update user fields
        user.fullname = fullname;
        user.email = email;
        user.phoneNo = phoneNo;
        user.gender = gender;
        user.password = password;
        user.packageDetail = packageDetail;
        user.startedDate = startedDate;
        user.endedDate = endedDate;
        user.accountStatus = accountStatus;
        user.address = address;
        user.profilePhoto = profilePhoto;
        user.documentProof = documentProof;

        // Save updated user
        user = await user.save();

        res.status(200).json({ msg: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// --- delete user funcnility --- //

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: 'No user found with this ID' });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

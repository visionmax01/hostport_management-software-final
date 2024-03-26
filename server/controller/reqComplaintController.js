import Complaint from "../model/reqsupportModel.js";
import { v4 as uuidv4 } from 'uuid';

export const createSupport = async (req, res) => {
    const {
        fullname,
        accountNo,
        reason,
        message,
        complaintNumber,
        remarks,
        complaintStatus,
        timestamp
    } = req.body;

    try {
        // Generate a unique complaint number (8 digits)
        const complaintNumber = generateComplaintNumber();

        // Create a new complaint
        const complaintData = new Complaint({
            fullname:req.body.fullname,
            accountNo:req.body.accountNo,
            reason:req.body.reason,
            message:req.body.message,
            complaintNumber:complaintNumber,
            remarks:"we are working on it",
            complaintStatus:"open! Under Processing..",
            timestamp
        });

        await complaintData.save();
        return res.json({ msg: "Complaint registered successfully", complaintNumber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Function to generate a complaint number (8 digits)
function generateComplaintNumber() {
    const digits = 8;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < digits; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}




export const getAllComplaintData = async (req, res) => {
    try {
        const complaintData = await Complaint.find();
        res.status(200).json(complaintData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const deleteComplaint = async (req, res) => {
    try {
        const id = req.params.id;
        const supportreq = await Complaint.findById(id);
        if (!supportreq) {
            return res.status(404).json({ msg: 'Complaint not found with this ID' });
        }
        await Complaint.findByIdAndDelete(id);
        res.status(200).json({ msg: "Complaint deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}




// searching

export const searchComplaint = async (req, res) => {
  const { complaintNumber } = req.params;

  try {
    const complaint = await Complaint.findOne({ complaintNumber });
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    return res.json(complaint);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

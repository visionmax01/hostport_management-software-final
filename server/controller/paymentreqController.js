import Paymentreq from '../model/ManualPayment.js';
import multer from 'multer';
import path from 'path';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'public', 'paymentSlips')); // Destination folder for storing payment slips
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName); // Set filename to include timestamp to ensure uniqueness
  },
});

// File filter for accepting only jpeg, png, and jpg files
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and JPG files are allowed.'), false);
  }
};

// Initialize multer with configuration
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
  }
}).single('paymentSlip'); // Specify the field name for the file upload

// Controller function to handle paymentreq creation
export const createPaymentreq = (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      // Multer error occurred (e.g., file size exceeded limit)
      return res.status(400).json({ success: false, message: 'File upload error', error: err.message });
    } else if (err) {
      // Other unexpected errors
      return res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
    }

    // File upload succeeded, continue with creating Paymentreq
    const { accountNo, fullname, startedDate, endedDate, amountPaid, remarks } = req.body;
    const paymentSlip = req.file ? req.file.path : null; // Check if file was uploaded

    try {
      const newPaymentreq = new Paymentreq({
        accountNo,
        fullname,
        startedDate,
        endedDate,
        amountPaid,
        remarks,
        paymentSlip
      });

      const savedPaymentreq = await newPaymentreq.save();
      res.status(201).json({
        success: true,
        message: 'Paymentreq record created successfully',
        paymentreq: savedPaymentreq
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to create Paymentreq record', error: error.message });
    }
  });
};






export const mergeUserDataWithPaymentreq = async () => {
  try {
    // Perform aggregation to merge data from User and Paymentreq collections
    const mergedData = await User.aggregate([
      {
        $lookup: {
          from: 'paymentreqs', // Name of the Paymentreq collection
          localField: 'account', // Field to match in the User collection
          foreignField: 'accountNo', // Field to match in the Paymentreq collection
          as: 'paymentData' // Name of the field to store merged data
        }
      }
    ]);

    return mergedData;
  } catch (error) {
    throw new Error(`Failed to merge data: ${error.message}`);
  }
};


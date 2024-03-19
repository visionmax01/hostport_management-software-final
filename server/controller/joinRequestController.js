import NewjoiningRequest from '../model/joinRequestModel.js'

export const NewJoiningReq = async (req, res) => {
    const {
        fullname,
        email,
        phoneNo,
        dateofBirth,
        packageDetail,
        address,
        createdDate
       
    } = req.body;

    try {
        const joinreq = await NewjoiningRequest.findOne({ email });
        if (joinreq) {
            return res.json({ msg: "your request is already Submited." });
        }

        // Preprocess date fields
        const processedDOBDate = formatDate(dateofBirth);
        const processedCreatedDate = formatDate(createdDate);

        const newreqData = new NewjoiningRequest({
            fullname,
            email,
            phoneNo,
            dateofBirth: processedDOBDate,
            packageDetail,
            address,
            createdDate: processedCreatedDate
        });

        await newreqData.save();
        return res.json({ msg: "Joining Req Sended successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// function to format date in "day/month/year" format
function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Month is zero-based
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`;
}


//fatch all data record
export const getAllJoiningUser = async (req, res) => {
    try {
        const userJoinData = await NewjoiningRequest.find();
        if (!userJoinData || userJoinData.length === 0) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userJoinData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneData = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await NewjoiningRequest.findById(id);
        if (!userData) {
            return res.status(404).json({ msg: 'No user with this ID' });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
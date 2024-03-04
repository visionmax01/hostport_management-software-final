import React, { useState } from "react";
import AdminNavBar from "../Components/AdminNavBar";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Axios from "axios";
import "./all-form.css";

const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [password, setPassword] = useState("");
  const [upackage, setPackage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [identitiDocument, setIdentitiDocument] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setMessage("All fields are required");
      return;
    }
    Axios.post("http://localhost:3000/auth/add-user", {
      fullName,
      email,
      phoneNo,
      gender,
      accountNo,
      password,
      upackage,
      startDate,
      endDate,
      status,
      createdDate,
      address,
      profilePic,
      identitiDocument,
    })
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Registration failed. Please try again.");
      });
  };
  return (
    <>
      <AdminNavBar />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Box height={70} />
          <div className="main-container-form">
            <div className="inside-top-container">
              <h1>Create new User Account</h1>
            </div>
            <div className="inside-bottom-container">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label htmlFor="Fullname">
                      Full Name<span className="required-field-star">*</span>
                    </label>
                    
                    <input 
                    id="Fullname"
                    type="text"
                     className="form-control-input"
                     onChange={(e) => setFullName(e.target.value)}
                     />
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="email">
                      Email <span className="required-field-star">*</span>
                    </label>
                    <input
                      className="form-control-input"
                      type="email"
                      autoComplete="off"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="label-text-ares">
                    <label htmlFor="phoneNo">
                      Phone<span className="required-field-star">*</span>
                    </label>
                    <div className="phone-text-ares">
                      <input
                        className="phone-code-field"
                        type="text"
                        placeholder="+977"
                        disabled
                      />
                      <input
                        type="text"
                        className="form-control-phone"
                        placeholder="Enter phone no "
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label htmlFor="gender">
                      Gender<span className="required-field-star">*</span>
                    </label>
                    <select
                      className="form-control-option"
                      name="gender"
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="account">
                      Account No <span className="required-field-star">*</span>
                    </label>
                    <input
                    id="account"
                      type="text"
                      className="form-control-input"
                      onChange={(e) => setAccountNo(e.target.value)}
                    />
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="password">
                      Password<span className="required-field-star">*</span>
                    </label>
                    <div className="phone-text-ares">
                      <input
                        type="password"
                        className="form-control-input"
                        placeholder="*************"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label htmlFor="package">
                      Select Package
                      <span className="required-field-star">*</span>
                    </label>
                    <select
                      id="package"
                      type="text"
                      className="form-control-option"
                      onChange={(e) => setPackage(e.target.value)}
                    >
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="date1">
                      Started From<span className="required-field-star">*</span>
                    </label>
                    <input
                    id="date1"
                      type="date"
                      className="form-control-date"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="label-text-ares">
                    <label htmlFor="date2">
                      Ended To<span className="required-field-star">*</span>
                    </label>
                    <div className="phone-text-ares">
                      <input
                      id="date2"
                        type="date"
                        className="form-control-date"
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label htmlFor="ststus">
                      Account Status
                      <span className="required-field-star">*</span>
                    </label>
                    <select
                      className="form-control-option"
                      name="status"
                      type="text"
                      id="status"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="date3">
                      Created Date<span className="required-field-star">*</span>
                    </label>
                    <input
                      id="date3"
                      type="date"
                      className="form-control-date"
                      onChange={(e) => setCreatedDate(e.target.value)}
                    />
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="address">
                      Address<span className="required-field-star">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-control-date"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group1">
                  <div className="label-text-ares">
                    <label htmlFor="photo1">Profile Photo</label>
                    <div className="phone-text-ares">
                      <input
                      id="photo1"
                        type="file"
                        onChange={(e) => setProfilePic(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="label-text-ares">
                    <label htmlFor="photo2">citizenship copy</label>
                    <div className="phone-text-ares">
                      <input
                        id="photo2"
                        type="file"
                        placeholder="chose File"
                        onChange={(e) => setIdentitiDocument(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="label-text-ares">
                    <div className="phone-text-ares">
                      <div className="class-upload1"></div>
                    </div>
                  </div>
                </div>
                <br />

               
                  <button type="submit" className="btn-form-summit">
                    Create User
                  </button>
                <div>
                  {message && <p className="message-register">{message}</p>}
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};
export default AddUser;

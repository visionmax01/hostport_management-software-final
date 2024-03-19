import React, { useState, useEffect } from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import AdminNavBar from "../Components/AdminNavBar";
import ProfilePic from "../img/myphoto.jpg";
import { useParams } from "react-router-dom";
import "./profile.css";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";
import VerifiedIcon from '@mui/icons-material/Verified';

function AdminProfile() {
  const [admin, setAdmin] = useState({});
  const [activeTab, setActiveTab] = useState("profile");

  // Fetch admin profile data when component mounts
  useEffect(() => {
    axios.get(`http://localhost:8000/auth/profile`, { withCredentials: true }) // Ensure to send cookies with the request
      .then((response) => {
        setAdmin(response.data); // Set admin data to state
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Render admin profile once data is fetched
  return (
    <>
      <AdminNavBar />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <Box height={70} />
          {admin && Object.keys(admin).length > 0 && ( // Only render admin detail if admin data exists
            <>
              <b>Admin Detail</b>
              <div className="card">
                <div className="card-body">
                  <div className="container">
                    <div className="row row-cols-2 ">
                      <div className="col-3">
                        <div className="profilePicture">
                          <img className="profile-img" src={ProfilePic} alt="" />
                          <button className="btn-change-pic">Change Profile</button>
                        </div>
                      </div>
                      <div className="col-7  userDetailSection">
                        <div className="namePlate">
                          <h2>{admin.name}</h2>
                          <p>
                            <span className="Designation">
                              <b>Designation &nbsp;:</b>&nbsp;admin 
                            </span>
                            <b><span className="verified-icon"><VerifiedIcon/> </span></b>
                          </p>
                        </div>
                        
                        <ul className="nav" role="tablist">
                          <li className="nav-item">
                            <a
                              className={`nav-link ${
                                activeTab === "profile" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("profile")}
                            >
                              Profile
                            </a>
                          </li>
                          
                          
                          <li className="nav-item">
                            <a
                              className={`nav-link ${
                                activeTab === "chpassword" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("chpassword")}
                            >
                              Change Password
                            </a>
                          </li>
                        </ul>
                        <br />
                        <div className="tab-content">
                          <div
                            id="profile"
                            className={`tab-pane fade ${
                              activeTab === "profile" ? "show active" : ""
                            }`}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group-profile">
                                  <tr key={admin._id} className="user-detail">
                                    <td>
                                      <div className="displayData1">Name</div>
                                      <div className="displayData2">:</div>
                                      <div className="displayData3">{admin.name}</div>
                                    </td>
                                    <td>
                                      <div className="displayData1">Email</div>
                                      <div className="displayData2">:</div>
                                      <div className="displayemail">{admin.email}</div>
                                    </td>
                                  </tr>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="chpassword"
                            className={`tab-pane fade ${
                              activeTab === "chpassword" ? "show active" : ""
                            }`}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group-profile">
                                  <div className="row">
                                    <div className="col-6">
                                      <label className="chlabel">
                                        Current Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Current Password"
                                      />
                                    </div>

                                    <div className="col-6">
                                      <label className="chlabel">
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label className="chlabel">
                                        Conform New Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn-edit-profile"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AdminProfile;

import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import AdminNavBar from "../Components/AdminNavBar";
import ProfilePic from "../img/myphoto.jpg";
import "./profile.css";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <AdminNavBar />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <Box height={70} />
          <div className="card">
            <div className="card-body">
              <div className="container">
                <div className="row row-cols-2 ">
                  <div className="col-3">
                    <img className="profile-img" src={ProfilePic} alt="" />
                    <button className="btn-change-pic">Change Profile</button>
                  </div>
                  <div className="col-7">
                    <h4>Bhishan Prasad Sah</h4>
                    <p>Cosumer</p>
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
                            activeTab === "about" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("about")}
                        >
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "payment" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("payment")}
                        >
                          Payment detail
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
                              <tr className="user-detail">
                                <td className="text-label">Name</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">Bhishan Sah</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Email</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">
                                  bhishansah@gmail.com
                                </td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Phone</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">9819931223</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Gender</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">Male</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Date of Birth</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">09/06/199</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Address</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">
                                  lahan-7 sirah, Nepal
                                </td>
                              </tr>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="about"
                        className={`tab-pane fade ${
                          activeTab === "about" ? "show active" : ""
                        }`}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group-profile">
                              <tr className="user-detail">
                                <td className="text-label">Service Type</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">
                                  Wifi_Hotspot Usage
                                </td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Customer Since</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">06/09/2022</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Package</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">1.5Mbps / 1 Month</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Active Date</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">01/01/2024</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Expiry Date</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">01/02/2024</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Status</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">Active</td>
                              </tr>
                              <tr className="user-detail">
                                <td className="text-label">Remaning Days</td>{" "}
                                <td className="test-style">:</td>{" "}
                                <td className="user-data">29 Day's</td>
                              </tr>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="payment"
                        className={`tab-pane fade ${
                          activeTab === "payment" ? "show active" : ""
                        }`}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group-profile">
                              Payment Page
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

                  <div className="col-md-2">
                    <div className="form-group-profile">
                      <tr className="user-detail">
                        <button className="btn-edit-profile">
                          Edit Profile
                        </button>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default UserProfile;

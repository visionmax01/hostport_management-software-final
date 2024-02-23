import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import AdminNavBar from "../Components/AdminNavBar";
import "./all-form.css";

function AddUser() {
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
              <form action="">
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label>
                      Full Name<span className="required-field-star">*</span>
                    </label>
                    <input type="text" className="form-control-input" />
                  </div>
                  <div className="label-text-ares">
                    <label>
                      Email <span className="required-field-star">*</span>
                    </label>
                    <input type="text" className="form-control-input" />
                  </div>

                  <div className="label-text-ares">
                    <label>
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
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label>
                      Gender<span className="required-field-star">*</span>
                    </label>
                    <select className="form-control-option" name="" id="">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label>
                      Account No <span className="required-field-star">*</span>
                    </label>
                    <input type="text" className="form-control-input" />
                  </div>

                  <div className="label-text-ares">
                    <label>
                      Password<span className="required-field-star">*</span>
                    </label>
                    <div className="phone-text-ares">
                      <input type="text" className="form-control-input" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label>
                      Select Package
                      <span className="required-field-star">*</span>
                    </label>
                    <select className="form-control-option" name="" id="">
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                      <option value="Male">1Mbps-1Month/Rs.300</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label>
                      Started From<span className="required-field-star">*</span>
                    </label>
                    <input type="date" className="form-control-date" />
                  </div>

                  <div className="label-text-ares">
                    <label>
                      Ended To<span className="required-field-star">*</span>
                    </label>
                    <div className="phone-text-ares">
                      <input type="date" className="form-control-date" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group1">
                  <div className="label-text-ares">
                    <label>
                      Account Status
                      <span className="required-field-star">*</span>
                    </label>
                    <select className="form-control-option" name="" id="">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="label-text-ares">
                    <label>
                      Created Date<span className="required-field-star">*</span>
                    </label>
                    <input type="date" className="form-control-date" />
                  </div>
                  <div className="label-text-ares">
                    <label>
                      Address<span className="required-field-star">*</span>
                    </label>
                    <input type="text" className="form-control-date" />
                  </div>
                </div>
                <br />

                <div className="form-group1">
                  <div className="label-text-ares">
                    <label>Profile Photo</label>
                    <div className="phone-text-ares">
                      <input type="file" />
                    </div>
                  </div>
                  <div className="label-text-ares">
                    <label>citizenship copy</label>
                    <div className="phone-text-ares">
                      <input type="file" placeholder="chose File" />
                    </div>
                  </div>
                  <div className="label-text-ares">
                    <div className="phone-text-ares">
                      <div className="class-upload1"></div>
                    </div>
                  </div>
                </div>
                <br />

                <div className="button-container">
                  <button type="submit" className="btn-form-summit">
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
export default AddUser;

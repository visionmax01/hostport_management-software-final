import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminNavBar from "../Components/AdminNavBar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
function UserComplaint() {
  return (
    <>
      <AdminNavBar />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Box height={50} />
          <div className="User-detail-view-main">
            <div className="design-container-top"></div>
            <div className="search-container-box">
              <h1>Customer Complaint </h1>
              <div className="take-action-bar">
                <div className="search-containt">
                  <span className="search-field">
                    <input type="text" placeholder="Search....." />
                  </span>
                  <button className="search-btn-style">Search</button>
                </div>
                <div className="action-btn">
                  <b>Print Data</b> &nbsp;&nbsp;&nbsp;
                  <button className="btn-action-pdf">Pdf</button>
                  <button className="btn-action-svg">Svg</button>
                </div>
              </div>
            </div>
            <div className="table-data-container">
              <div className="table-container">
                <div class="table-responsive">
                  <table className="table-data-display">
                    <thead>
                      <tr>
                        <th>S.N</th>
                        <th>Account No</th>
                        <th>Name</th>
                        <th>Complaint No</th>
                        <th>Date Of Complaint</th>
                        <th>Reason</th>
                        <th>message</th>
                        <th>Take Action*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad sah</td>
                        <td>02409898cp</td>
                        <td>2024-05-15</td>
                        <td>internet not working</td>
                        <td>very Solow</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
export default UserComplaint;

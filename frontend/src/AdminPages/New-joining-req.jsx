import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import AdminNavBar from "../Components/AdminNavBar";
import "./css/manage-user.css";
import "./css/btn.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { useNavigate } from "react-router-dom";

function NewRequest() {
  const Navigate = useNavigate();
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
              <h1>New Customer Joining request</h1>
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Of joining</th>
                        <th>Package Detail</th>
                        <th>Payment Recipt</th>
                        <th>Take Action*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>Bhishan prasad sah</td>
                        <td>bhishansah@gmail.com</td>
                        <td>2024-05-15</td>
                        <td>1Mbps - 1Month</td>
                        <td>
                          <img src="" />
                          payment.png
                        </td>
                        <td>
                          <button className="animation-key btn-join-formActivate"
                          onClick={() => {
                            Navigate("/user-activation");
                          }}
                          >
                            
                            <ManageHistoryIcon />
                            
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
export default NewRequest;

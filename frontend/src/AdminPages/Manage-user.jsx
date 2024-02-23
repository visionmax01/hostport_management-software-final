import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import AdminNavBar from "../Components/AdminNavBar";
import "../AdminPages/css/manage-user.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";


function ManageUser() {
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
              <h1>Manage Customer Data </h1>
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
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Remaining Days</th>
                        <th>Take Action*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85 <span>Day's</span></td>
                        <td>
                          <button className="animation-key btn-join-formActivate"
                          onClick={() => {
                            Navigate("/user-profile-view");
                          }}
                          >
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate"
                          onClick={() => {
                            Navigate("/update-user-detail");
                          }}>
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate"
                          onClick={() => {
                            Navigate("/user-profile-view");
                          }}
                          >
                          
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>

                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
                          </button>
                          <button className="animation-key btn-join-formDelete">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                      <tr id="table-bg-id" className="tabletr-value">
                        <td>1</td>
                        <td>ACC12345</td>
                        <td>Bhishan Prasad Sah</td>
                        <td>2024-05-15</td>
                        <td>Active</td>
                        <td>85</td>
                        <td>
                          <button className="animation-key btn-join-formActivate">
                            <RemoveRedEyeIcon />
                          </button>
                          <button className="animation-key btn-join-formUpdate">
                            <EditNoteIcon />
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
export default ManageUser;

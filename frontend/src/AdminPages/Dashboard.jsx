import React, { useEffect, useState } from "react";
import Sidenav from "../Components/Sidenav";
import AdminNavBar from "../Components/AdminNavBar";
import Box from "@mui/material/Box";
import "./css/dashboard.css";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import SearchIcon from "@mui/icons-material/Search";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Format the date as needed (example: "YYYY-MM-DD HH:MM:SS")
  const formattedDate = currentTime.toISOString().slice(0, 10);
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <div>
      <AdminNavBar/>
      <div className="back-bg-black">
        <Box sx={{ display: "flex" }}>
          <Sidenav/>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 1, backgroundColor: "#fff" }}
          >
            <div className="Dashboard-main">
              <div className="container-containt">
                <div className="left-side-container">
                  <div className="Dashboard-card">
                    <span className="Icon_color">
                      <VerifiedUserIcon />
                    </span>
                    &nbsp;&nbsp;
                    <span className="Number-Present">500</span>
                    <p className="sub-title">TOTAL USER'S</p>
                  </div>
                  <div className="Dashboard-card">
                    <span className="Icon_color">
                      <WifiPasswordIcon />
                    </span>
                    &nbsp;&nbsp;
                    <span className="Number-Present1">400</span>
                    <p className="sub-title">ACTIVE USER'S</p>
                  </div>
                  <div className="Dashboard-card">
                    <span className="Icon_color">
                      <WifiOffIcon />
                    </span>
                    &nbsp;&nbsp;
                    <span className="Number-Present2">100</span>
                    <p className="sub-title">INACTIVE USER'S</p>
                  </div>
                  <div className="Dashboard-card">
                    <span className="Icon_color">
                      <NewReleasesIcon />
                    </span>
                    &nbsp;&nbsp;
                    <span className="Number-Present3">50</span>
                    <p className="sub-title">JOINING REQUEST</p>
                  </div>
                </div>

                <div className="container-bottom-main">
                  <div className="Search-Box-dash">
                    <span className="titel-text">DASHBOARD</span>
                    <form>
                    <span className="search-containt">
                      <span className="search-field">
                        <input type="text" placeholder="Search....." name="search" />
                      </span>
                      <button className="search-btn">
                        <SearchIcon />
                      </button>
                    </span>
                    </form>
                    
                  </div>
                  {/* serch result */}
                  <div className="search-resuld-box122"></div>
                </div>
              </div>

              <div className="card_datetime">
                <div className="text-style-date">
                  <div className="date-Label">
                    <div className="Icon_color">
                      <span>
                        <DateRangeIcon />
                      </span>
                    </div>
                    <div className="Icon_color">
                      <span className="date-time1">Date</span>
                    </div>
                  </div>

                  <br />
                  <span className="date">{formattedDate}</span>
                  <hr />
                </div>
                <div className="text-style-time">
                  <div className="date-Label">
                    <div className="Icon_color">
                      <span>
                        <AvTimerIcon />
                      </span>
                    </div>
                    <div className="Icon_color">
                      <span className="date-time1">Time</span>
                    </div>
                  </div>
                  <br />
                  <span className="time">{formattedTime}</span>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Dashboard;

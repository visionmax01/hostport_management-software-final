import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useAppstore } from "../appStore";
import mainLogo from "../img/Av_network-logo.png";
import "../Components/css/NavBar.css";
import user from "../img/admin-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Person3Icon from "@mui/icons-material/Person3";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const  AdminNavBar =()=> {
  const updateOpen = useAppstore((state) => state.updateOpen);
  const dopen = useAppstore((state) => state.dopen);
  const nevigate= useNavigate()
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
  const handleProfileClick = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  const handleScreenClick = () => {
    setProfileMenuOpen(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };
   axios.defaults.withCredentials = true;
    const handleLogout =()=>{
      axios.get('http://localhost:3000/auth/logout')
      .then(res=>{
        if(res.data.status){
          nevigate('/')
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          {/* Left side */}
          <Box>
            <IconButton
              edge="start"
              color="blue"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => updateOpen(!dopen)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton>
              <img className="main-logo" src={mainLogo} alt="" />
            </IconButton>
          </Box>

          {/* Right side */}
          <div
            className="left_div1"
            sx={{ ml: 2 }}
            onClick={handleProfileClick}
          >
            <div className="pupup-menu-selector">
              <div className="profile-img-user">
                <img src={user} alt="" />
              </div>
            </div>

            {/* Profile menu */}
            {profileMenuOpen && (
              <div className="profile-menu" onClick={handleMenuClick}>
                <div className="Toggle-profile-minu">
                  <div className="profile-section">
                    <img src={user} alt="" />
                    <h1>Bhishan Sah</h1>
                  </div>
                  <hr />
                  <div className="profile-links">
                    <span className="profile-icons">
                      <Person3Icon />
                    </span>
                    <Link className="links-section1" to="/admin-profile">
                      Profile
                    </Link>
                  </div>
                  <div className="profile-links">
                    <span className="profile-icons">
                      <LockIcon />
                    </span>
                    <Link className="links-section1" to="/change-password">
                      Change Password
                    </Link>
                  </div>
                  <hr />
                  <div className="profile-links">
                    <LogoutIcon />
                     <Link className="links-section1" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Add a transparent overlay to catch clicks and close the profile menu */}
      {profileMenuOpen && (
        <div className="overlay" onClick={handleScreenClick} />
      )}
    </Box>
  );
}
export default AdminNavBar
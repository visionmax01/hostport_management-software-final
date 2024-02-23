import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./login.css";
import logo1 from "../img/login.png";
import img2 from "../img/logo2.png";
import LockIcon from "@mui/icons-material/Lock";
import { Toaster, toast } from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import img1 from "../img/Av_network-logo.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Please enter a password");
      return;
    } else if (password !== Cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await Axios.post(
        `http://localhost:3000/auth/reset-password/${token}`,
        {
          password,
        }
      );

      if (response.data.status) {
        setShowSuccessPopup(true);
      } else {
        toast.error("Link Expired | Reset again...");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    navigate("/login");
  };
  return (
    <div className="main-container-one">
      <NavBar />
      <div className="design-container">
        <div className="design-one"> </div>
        <div className="design-two"></div>
      </div>
      <div className="login-container">
        <div className="left-side-section">
          <div className="Design-one"></div>
          <div className="Design-two"></div>
          <div className="Design-three">
            <img src={img2} alt="" />
            <h2>
                    Reset Password!{" "}
                    <p>
                      !! Create a new password <br /> For You. !!
                    </p>
                  </h2>
          </div>
        </div>
        <div className="right-side-container">
          <div className="movement-area">
            <div className="dot1-move"></div>
            <div className="dot2-move"></div>
          </div>

          <div className="login-detail-container">
            <div className="login-containt-container">
              <div className="login-icon">
                <center>
                  <img src={logo1} alt=""></img>
                </center>
              </div>
            </div>
            <div className="login-field">
                    <h1>AV Network</h1>
                    <form onSubmit={handleSubmit}>
                      <label className="Form-label" htmlFor="password">
                        New Password:
                      </label>
                      <div className="input-icon-section">
                        <span className="input-icon-user">
                          <LockIcon />
                        </span>
                        <input
                          className="Form-input"
                          type="password"
                          placeholder="********"
                          onChange={(e) => setPassword(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <label className="Form-label" htmlFor="password">
                        Confirm Password:
                      </label>
                      <div className="input-icon-section">
                        <span className="input-icon-user">
                          <LockIcon />
                        </span>
                        <input
                          className="Form-input"
                          type="password"
                          placeholder="********"
                          onChange={(e) => setCPassword(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-btnLFRF btn-primary"
                      >
                        {isLoading ? <LoadingSpinner /> : "Reset"}
                      </button>
                    </form>
                  </div>
          </div>
        </div>
        
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: "50px",
            height: "70px",
            padding: "0px 25px 0px 25px",
            background: "white",
            color: "#4d0101",
            fontSize: "20px",
            fontWeight: "900",
          },
        }}
      />
        {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <img width={250} src={img1} alt="" />
              <button className="popup-close" onClick={handlePopupClose}>
                X
              </button>
            </div>
            <p>Reset Link Sent successfully!</p>
            <button className="popup-btn" onClick={handlePopupClose}>
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

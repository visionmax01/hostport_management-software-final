import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./login.css";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import logo1 from "../img/login.png";
import img2 from "../img/logo2.png";
import img1 from "../img/Av_network-logo.png";
import { Toaster, toast } from "react-hot-toast";
import './login.css'
import './forget.css'

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email");
      return;
    }

    setIsLoading(true); // Set loading to true when submitting the form

    try {
      const response = await Axios.post(
        "http://localhost:3000/auth/forget-password",
        {
          email,
        }
      );

      if (response.data.status) {
        setShowSuccessPopup(true);
      } else {
        toast.error("User Not Found. Please enter a valid email.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    } finally {
      setIsLoading(false); // Reset loading state after form submission
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
              Forget Password
              <p>
                !! Login With Correct !! <br />! Email !
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
                      <label className="Form-label" htmlFor="email">
                        Email:
                      </label>
                      <div className="input-icon-section">
                        <span className="input-icon-user">
                          <MarkEmailReadIcon />
                        </span>
                        <input
                          className="Form-input email-field"
                          type="email"
                          autoComplete="off"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          autoFocus
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-btnLFRF btn-primary"
                        disabled={isLoading}
                      >
                        <div className="btn-container">
                          {isLoading && (
                            <div className="loading-spinner">
                              <div className="spinner"></div>
                            </div>
                          )}
                          <span className="send-text">Send</span>
                        </div>
                      </button>

                      <span className="Forget-link">
                        <Link className="link-for-forgertxt" to="/login">
                          Login ?
                        </Link>
                      </span>
                    </form>
                  </div>
          </div>
        </div>
      </div>
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
      <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: "50px",
            height: "auto",
            padding: "5px 25px 5px 25px",
            background: "white",
            color: "red",
            fontSize: "20px",
            fontWeight: "900",
          },
        }}
      />
      
      </div>
      
    </div>
  );
};

export default ForgetPassword;

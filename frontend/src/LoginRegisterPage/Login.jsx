import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { Toaster, toast } from "react-hot-toast";
import LockIcon from "@mui/icons-material/Lock";

import logo1 from "../img/login.png";
import img2 from "../img/logo2.png";
const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Naviagte = useNavigate();
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email");
      return;
    } else if (!password) {
      toast.error("Please enter a password");
      return;
    }
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        toast.error("Enter a valid email and password");
        if (response.data.status) {
          Naviagte("/admin-dashboard");
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("Server Not Responding");
      });
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
              Welcome Back !
              <div className="underline"></div>
              <p>
                !! Login With your !! <br />! Detail !
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
                <div className="login-field">
                  <h1>Login</h1>
                  <form onSubmit={handleSubmit}>
                    <label className="Form-label" htmlFor="email">
                      Email:
                    </label>
                    <div className="input-icon-section">
                      <span className="input-icon-user">
                        <PersonIcon />
                      </span>
                      <input
                        className="Form-input"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </div>

                    <label className="Form-label" htmlFor="password">
                      Password:
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
                      />
                    </div>
                    <button type="submit" className="btn-btnLFRF btn-primary">
                      Login
                    </button>
                    <span className="Forget-link">
                      <Link
                        className="link-for-forgertxt"
                        to="/forget-password"
                      >
                        Forget Password ?
                      </Link>
                    </span>
                  </form>
                </div>
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
  );
};

export default Login1;

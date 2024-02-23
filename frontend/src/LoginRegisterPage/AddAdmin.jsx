import React, { useState } from "react";
import Axios from "axios";
import  '../LoginRegisterPage/register.css'

import Sidenav from "../Components/Sidenav";
import AdminNavBar from "../Components/AdminNavBar";
import Box from "@mui/material/Box";
import "../Components/css/dashboard.css";

const Register = () => {
  const [role, SetRole] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role || !username || !name || !email || !password) {
      setMessage("All fields are required");
      return;
    }
    Axios.post("http://localhost:3000/auth/register", {
      role,
      username,
      name,
      email,
      password,
    })
    .then(response => {
      console.log(response);
      setMessage(response.data.message);
    })
    .catch(err => {
      console.error(err);
      setMessage("Registration failed. Please try again.");
    });
  };

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
        <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="role">Admin Type:</label>
        <select
          id="role"
          type="text"
          placeholder="Role"
          onChange={(e) => SetRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="master">Master</option>
        </select>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <br/>
       <div>
            {message && <p className="message-register">{message}</p>}
       </div>
      </form>
    </div>
        </Box>
      </Box>
    </div>
  </div>



    
  );
};

export default Register;

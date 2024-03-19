import React, { useState } from "react";
import axios from "axios";
import  '../LoginRegisterPage/register.css'
import Sidenav from "../Components/Sidenav";
import AdminNavBar from "../Components/AdminNavBar";
import Box from "@mui/material/Box";
import "../Components/css/dashboard.css";
import { toast } from "react-hot-toast";


const Register = () => {
  const [role, SetRole] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role || !username || !name || !email || !password) {
      toast.error("All fields are required", { className: "toastmsg" });
      return;
    }
    axios.post("http://localhost:8000/auth/register", {
      role,
      username,
      name,
      email,
      password,
    })
    .then(response => {
      console.log(response);
      toast.success(response.data.message, { className: "toastmsg" });
    })
    .catch(err => {
      console.error(err);
      toast.error("Registration failed. Please try again.");
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
      </form>
    </div>
        </Box>
      </Box>
    </div>
  </div>



    
  );
};

export default Register;

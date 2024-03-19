import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import BottomFooter from "../Components/BottomFooter";
import "./Support.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SupportPage() {
  

  const checkComplaint = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add logic for checking complaint here
  };
  return (
    <div className="background-imgsc">
      <div className="main-container-support">
        <NavBar />
        <div className="Main-Section-support">
          <div className="left-side">
            <div className="check-container">
              <h1>
                "Check Your Complaint
                <br />
                Issue Rise Before"
              </h1>
              <p>Track Your Issue !</p>
              <form onSubmit={checkComplaint}>
                <label className="">Complaint No :</label>
                <br />
                <input className="check-input" type="text" />
                <br />
                <button type="submit" className="btn-check-cmpt btn-submit ">Check</button>
              </form>
            </div>
          </div>
          <div className="right-side">
            <div className="heading-container">
              <h3>Rise a Support Ticket</h3>
            </div>
            <div className="Form-Box">
              <form className="main-form-section" onSubmit={submitUserForm}>
                <h2>! Submit Your Issue !</h2>
                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">Customer Name :</label>
                  <br />
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={inputHandler}
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="accountNo" className="form-label">Customer Id :</label>
                  <br />
                  <input
                    type="text"
                    id="accountNo"
                    name="accountNo"
                    className="form-control"
                    onChange={inputHandler}
                    placeholder="Enter Customer id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reason" className="form-label">Reason :</label>
                  <br />
                  <select
                    className="form-control-selection"
                    onChange={(e) => setComplaint({ ...complaint, reason: e.target.value })}
                    id="reason"
                    name="reason"
                  >
                    <option value="">Select Reason</option>
                    <option value="Internet Not Working">Internet Not Working</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Connecting Issue">Connecting Issue</option>
                    <option value="Speed is Slow">Speed is Slow</option>
                    <option value="Unable to Connect">Unable to Connect</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message :</label>
                  <br />
                  <textarea
                    type="text"
                    className="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    onChange={inputHandler}
                    placeholder="Explain Your Issue in Detail...."
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-submit btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
}

export default SupportPage;


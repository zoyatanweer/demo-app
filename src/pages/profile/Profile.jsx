import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon, LockIcon } from "../../Assets/allsvg";
import "./Profile.css";
import "../register/Register.css";

const Profile = () => {
  return (
    <>
      <div className="profile-body">
        <nav>
          <div className="nav-left">
            <NavLink to="/register">
              <ArrowBackIcon />
              Back
            </NavLink>
          </div>
          <div className="nav-right">
            <p className="steps-number">STEP 02/03</p>
            <p className="steps-title">Personal Info.</p>
          </div>
        </nav>
        <div className="right-div">
          <div className="intro">
            <h1 className="join-heading">Complete Your Profile!</h1>
            <p className="join-para">
              For the purpose of industry regulation, your details are required.{" "}
            </p>
            <div className="division"></div>
          </div>
          <div className="input">
            <label>Phone number</label>
            <input
              type="text"
              className="input-field-active"
              placeholder=" 090912345567"
            ></input>
          </div>
          <div className="input">
            <label>Your address</label>
            <input
              type="text"
              className="input-field"
              placeholder="Please enter adddress"
            ></input>
          </div>
          <div className="input">
            <label>Country of residence</label>
            <input
              type="text"
              className="input-field"
              placeholder="Invictus Innocent"
            ></input>
          </div>

          {/* buttons */}
          <div className="buttons">
            <NavLink to="/verification">
              <button className="btn btn-primary">Save & Continue </button>
            </NavLink>
          </div>

          <p className="footer-para">
            <LockIcon />
            Your info is safely secured
          </p>
        </div>
      </div>
    </>
  );
};

export { Profile };

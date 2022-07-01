import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon, LockIcon } from "../../Assets/allsvg";
import "./Verification.css";
import "../register/Register.css";

const Verification = () => {
  return (
    <div className="verification-body">
      <nav>
        <div className="nav-left">
          <NavLink to="/profile">
            <ArrowBackIcon />
            Back
          </NavLink>
        </div>
        <div className="nav-right">
          <p className="steps-number">STEP 03/03</p>
          <p className="steps-title">Bank Verification </p>
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
          <label>Bank verification number (BVN)</label>
          <input
            type="text"
            className="input-field-active"
            placeholder=" 090912345567"
          ></input>
        </div>
        <div className="buttons">
          <NavLink to="">
            <button className="btn btn-primary">Save & Continue </button>
          </NavLink>
        </div>

        <p className="footer-para">
          <LockIcon />
          Your info is safely secured
        </p>
      </div>
    </div>
  );
};
export { Verification };

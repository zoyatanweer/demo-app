import React from "react";
import { NavLink } from "react-router-dom";
import { Side } from "../../components/Side/Side";
import { search } from "../../Assets";
import "./Register.css";
import { ArrowBackIcon } from "../../Assets/allsvg";

const Register = () => {
  return (
    <>
      <div className="register-body">
        <nav>
          <div className="nav-left">
            <NavLink to="/">
              <ArrowBackIcon />
              Back
            </NavLink>
          </div>
          <div className="nav-right">
            <p className="steps-number">STEP 01/03</p>
            <p className="steps-title">Personal Info.</p>
          </div>
        </nav>
        <div className="right-div">
          <div className="intro">
            <h1 className="join-heading">Register Individual Account!</h1>
            <p className="join-para">
              For the purpose of industry regulation, your details are required.{" "}
            </p>
            <div className="division"></div>
          </div>
          <div className="input">
            <label>
              Your fullname <span>*</span>
            </label>
            <input
              type="text"
              className="input-field-active"
              placeholder="Invictus Innocent"
            ></input>
          </div>
          <div className="input">
            <label>
              Email address <span>*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter email address"
            ></input>
          </div>
          <div className="input">
            <label>
              Create password <span>*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter email address"
            ></input>
          </div>
          <div className="checkbox-field">
            <input type="checkbox" className="checkbox" checked></input>
            <label>I agree to terms & conditions</label>
          </div>
          <div className="buttons">
            <NavLink to="/profile">
              <button className="btn btn-primary">Register Account</button>
            </NavLink>

            <button className="btn btn-secondary">
              <img src={search} className="img-google"></img>
              Register with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Register };

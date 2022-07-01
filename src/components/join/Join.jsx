import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowBackIcon,
  ArrowRightIcon,
  BusinessIcon,
  UserIcon,
} from "../../Assets/allsvg";
import "./Join.css";

const Join = () => {
  return (
    <div className="join-body">
      <nav>
        <div className="nav-right">
          <p className="join-nav-right">
            Already have an account? <span className="nav-span"> Sign In</span>
          </p>
        </div>
      </nav>
      <div className="right-div">
        <div className="intro">
          <h1 className="join-heading">Join Us!</h1>
          <p className="join-para">
            To begin this journey, tell us what type of account you'd be
            opening.
          </p>
        </div>
        <NavLink to="/register">
          <div className="block-first">
            <UserIcon />
            <div>
              <h2 className="join-heading">Individual</h2>
              <p className="join-para">
                Personal account to manage all your activities.
              </p>
            </div>
          </div>
        </NavLink>

        <div className="block-second">
          <div>
            <BusinessIcon />
          </div>
          <div>
            <h2 className="join-heading">Business</h2>
            <p className="join-para">
              Own or belong to a company, this is for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Join };

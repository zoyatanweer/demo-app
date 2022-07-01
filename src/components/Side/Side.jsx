import React from "react";
import { homepage } from "../../Assets/index";
import { LandingIcon, QuoteIcon, VerifiedIcon } from "../../Assets/allsvg";
import "./Side.css";
const Side = () => {
  return (
    <>
      <div className="left-div">
        <img src={homepage} className="img-homepage"></img>
        <div className="quote quote-para">
          <div className="quote-para quote-start">
            <QuoteIcon />
          </div>
          <div className="quote-para">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundledthe text with their software.
          </div>
          <div className="quote-person mg-1 mg-no-left">
            Vincent Obi
            <VerifiedIcon />
          </div>
          <h1 className="quote-end">L</h1>
        </div>
      </div>
    </>
  );
};

export { Side };

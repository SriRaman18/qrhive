import React from "react";
import "./customization.css";

import { CustomizeIcon, Check } from "../../../assets";

import Pages from "../../index";

function Customization() {
  return (
    <div className="customization">
      <div className="customization-texts">
        <h2 className="customization-heading">QR Code Customization</h2>
        <p className="customization-para-text">
          Create custom QR Codes for every occasion, personalized with your logo
          and brand colours. Use them on various platforms to effortlessly
          connect with your audience.
        </p>
        <div className="customization-icon-texts">
          <div className="customization-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="customization-icon-text-img"
            />
            <p>Enhanced Branding</p>
          </div>
          <div className="customization-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="customization-icon-text-img"
            />
            <p>Visual Appeal</p>
          </div>
          <div className="customization-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="customization-icon-text-img"
            />
            <p>Interactive Content</p>
          </div>
        </div>
      </div>
      <CustomizeIcon className="customization-pic" />
    </div>
  );
}

export default Customization;

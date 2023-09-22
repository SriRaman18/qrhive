import React from "react";
import "./customization.css";

import { CustomizeIcon, Check } from "../../../assets";

import Pages from "../../index";
import { Link } from "react-router-dom";

function Customization() {
  return (
    <div className="customization">
      <div className="customization-texts">
        <h2 className="customization-heading" data-aos="fade-down">
          QR Code Customization
        </h2>

        <p className="customization-para-text" data-aos="fade-down">
          Create custom QR Codes for every occasion, personalized with your logo
          and brand colours. Use them on various platforms to effortlessly
          connect with your audience.
        </p>
        <div className="customization-icon-texts " data-aos="fade-down">
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
      <div data-aos="fade-left">
        <CustomizeIcon className="customization-pic" />
      </div>
    </div>
  );
}

export default Customization;

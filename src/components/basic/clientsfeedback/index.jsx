import React from "react";
import "./clientsfeedback.css";
import { FeedBackOne } from "../../../assets";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Clientsfeedback({ heading, text, name, domain, pic }) {
  return (
    <div className="clients-feedback">
      <div className="clients-feedback-texts" data-aos="fade-down">
        <p className="clients-feedback-heading">{heading}</p>
        <p className="clients-feedback-para">{text}</p>
      </div>
      <div className="quote" data-aos="fade-down">
        <BiSolidQuoteAltLeft className="quote-icon" />
      </div>
      <div className="client-info">
        <img
          className="client-info-pic"
          src={pic}
          alt=""
          data-aos="fade-right"
        />
        <div data-aos="fade-down">
          <p className="client-info-name">{name}</p>
          <p className="client-info-domain">{domain}</p>
        </div>
      </div>
    </div>
  );
}

export default Clientsfeedback;

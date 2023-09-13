import React from "react";
import "./clientsfeedback.css";
import { FeedBackOne } from "../../../assets";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Clientsfeedback({ heading, text, name, domain, pic }) {
  return (
    <div className="clients-feedback">
      <div className="clients-feedback-texts">
        <p className="clients-feedback-heading">{heading}</p>
        <p className="clients-feedback-para">{text}</p>
      </div>
      <div className="quote">
        <BiSolidQuoteAltLeft className="quote-icon"/>
      </div>
      <div className="client-info">
        <img className="client-info-pic" src={pic} alt="" />
        <div>
          <p className="client-info-name">{name}</p>
          <p className="client-info-domain">{domain}</p>
        </div>
      </div>
    </div>
  );
}

export default Clientsfeedback;

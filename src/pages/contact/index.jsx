import React from "react";
import "./contact.css";
import { Phone } from "../../assets";
import Buttonwithouticon from "../../components/basic/buttonwithouticon";
import { FaAngleLeft } from "react-icons/fa6";
import Home from "../home";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact">
      <div className="contact-container">
        <button onClick={() => navigate("/")} className="contact-back-btn">
          <FaAngleLeft />
          <p>Back</p>
        </button>
        <img src={Phone} className="contact-pic" alt="" />
      </div>
      <div className="contact-form">
        <div className="contact-form-texts">
          <h1 className="contact-form-heading">Talk to an expert</h1>
          <p className="contact-form-para">
            We’d like to learn more about you and how we can work together. Can
            you tell us a bit more about yourself?
          </p>
        </div>
        <div className="contact-form-inputs">
          <div className="input-container">
            <label htmlFor="first-name">First Name*</label>
            <input type="text" id="first-name" />
          </div>
          <div className="input-container">
            <label htmlFor="last-name">Last Name*</label>
            <input type="text" id="last-name" />
          </div>
          <div className="input-container">
            <label htmlFor="email"> Email*</label>
            <input type="email" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="organisation-name">Organisation Name*</label>
            <input type="text" id="organisation-name" />
          </div>
          <div className="input-container input-container-full">
            <input
              type="text"
              id="input-container"
              placeholder="How can we help you?*"
            />
          </div>
        </div>
        <div className="check-box-inputs">
          <div className="check-box-container">
            <label class="form-control">
              <input
                type="checkbox"
                className="check-box "
                checked
                name="checkbox"
              />
              I consent to QRhive processing my personal data entered above so
              the company can contact me.*
            </label>
          </div>
          <div className="check-box-container">
            <label class="form-control">
              <input type="checkbox" name="checkbox" />I would like to receive
              details about products, services and events from QRhive.
            </label>
          </div>
        </div>
        <div className="check-box-notice">
          <p>
            For more information on how your personal data will be processed and
            what choices you have, please refer to the{" "}
            <a href=""> QRhive Privacy Notice.</a>
          </p>
        </div>
        <div className="check-box-btn-container">
          <Buttonwithouticon className="check-box-btn" btnText={"Send"} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
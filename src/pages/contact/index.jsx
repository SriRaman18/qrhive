import React, { useState } from "react";
import "./contact.css";
import { Phone } from "../../assets";
import Buttonwithouticon from "../../components/basic/buttonwithouticon";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();
  // const [isClicked, setIsClicked] = useState(false);
  // const handleInputClick = () => {
  //   setIsClicked(true);
  // };
  const [clickedInput, setClickedInput] = useState(null);

  const handleInputClick = (inputId) => {
    setClickedInput(inputId);
  };

  return (
    <div className="contact">
      <div className="contact-pic-container">
        <button onClick={() => navigate("/")} className="contact-back-btn">
          <FiArrowLeft />
          <p>Back</p>
        </button>
        <img src={Phone} className="contact-pic" alt="" />
      </div>
      <div className="contact-form">
        <div className="contact-form-texts">
          <h1 className="contact-form-heading">Talk To An Expert</h1>
          <p className="contact-form-para">
            We’d like to learn more about you and how we can work together. Can
            you tell us a bit more about yourself?
          </p>
        </div>
        <div className="contact-form-inputs">
          <div
            className={`input-container ${
              clickedInput === "first-name" ? "clicked" : ""
            }`}
            onClick={() => handleInputClick("first-name")}>
            <label
              htmlFor="first-name"
              className={`input-label ${
                clickedInput === "first-name" ? "clicked" : ""
              }`}>
              First Name*
            </label>
            <input type="text" id="first-name" />
          </div>
          <div
            className={`input-container ${
              clickedInput === "last-name" ? "clicked" : ""
            }`}
            onClick={() => handleInputClick("last-name")}>
            <label
              htmlFor="last-name"
              className={`input-label ${
                clickedInput === "last-name" ? "clicked" : ""
              }`}>
              Last Name*
            </label>
            <input type="text" id="last-name" />
          </div>

          <div
            className={`input-container ${
              clickedInput === "email" ? "clicked" : ""
            }`}
            onClick={() => handleInputClick("email")}>
            <label
              htmlFor="email"
              className={`input-label ${
                clickedInput === "email" ? "clicked" : ""
              }`}>
              Email*
            </label>
            <input type="email" id="email" />
          </div>
          <div
            className={`input-container ${
              clickedInput === "organisation-name" ? "clicked" : ""
            }`}
            onClick={() => handleInputClick("organisation-name")}>
            <label
              htmlFor="organisation-name"
              className={`input-label ${
                clickedInput === "organisation-name" ? "clicked" : ""
              }`}>
              Organisation Name*
            </label>
            <input type="text" id="organisation-name" />
          </div>

          <div
            className={`input-container input-container-full ${
              clickedInput === "input-container" ? "clicked" : ""
            }`}
            onClick={() => handleInputClick("input-container")}>
            <input
              type="text"
              id="input-container"
              placeholder="How can we help you?*"
            />
          </div>
        </div>
        <div className="check-box-inputs">
          <div className="check-box-container">
            <label class="check-box-label">
              <input
                type="checkbox"
                className="check-box"
                checked
                name="checkbox"
              />
              I consent to QRhive processing my personal data entered above so
              the company can contact me.*
            </label>
          </div>
          <div className="check-box-container">
            <label class="check-box-label">
              <input
                type="checkbox"
                name="checkbox"
                className="check-box check-box-label-input"
              />
              I would like to receive details about products, services and
              events from QRhive.
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
          <Buttonwithouticon
            className="check-box-btn sub-btn"
            btnText={"Send"}
            btnSize={true}
            // onClick= {submit}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

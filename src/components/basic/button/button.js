import React from "react";
import "./button.css";
// import { ArrowRight } from "../../../assets";
import { FiArrowRightCircle } from "react-icons/fi";

const Button = ({ btnText, size }) => {
  return (
    <div className={!size ? "button" : "button home-btn"}>
      <p className="btn-text"> {btnText}</p>
      <FiArrowRightCircle className="right-circle" />
    </div>
  );
};

export default Button;

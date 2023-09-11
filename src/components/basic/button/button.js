import React from "react";
import "./button.css";
import { ArrowRight } from "../../../assets";

const Button = ({ btnText, icon }) => {
  return (
    <div className="button">
      <p className="btn-text"> {btnText}</p>
      <img src={icon} alt="" />
    </div>
  );
};

export default Button;

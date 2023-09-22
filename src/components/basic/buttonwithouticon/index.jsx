import React from "react";
import "./buttonwithouticon.css";
import { NavLink } from "react-router-dom";

function Buttonwithouticon({ btnText,btnSize}) {
  return (
    <div  className={!btnSize ? "button-with-out-icon" : "button-with-out-icon sub-btn"} >
      <p className="btn-text"> {btnText}</p>
    </div>

  );
}

export default Buttonwithouticon;

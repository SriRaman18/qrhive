import React from "react";
import "./buttonwithouticon.css";
import { NavLink } from "react-router-dom";

function Buttonwithouticon({ btnText,btnSize}) {
  return (
    <div  className={!btnSize ? "button-with-out-icon" : "button-with-out-icon sub-btn"} >
      <p className="btn-text"> {btnText}</p>
    </div>
    //     {btnText =="use case" ? (<NavLink className="button-with-out-icon" to="/shopping">
    //     btnText
    //   </NavLink>) : (<div className="button-with-out-icon">
    //   <p className="btn-text"> btnText</p>
    // </div>)}

    // <NavLink className="button-with-out-icon" to="/shopping">
    //   {btnText}
    // </NavLink>
  );
}

export default Buttonwithouticon;

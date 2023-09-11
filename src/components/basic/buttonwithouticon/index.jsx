import React from 'react';
import "./buttonwithouticon.css";

function Buttonwithouticon({btnText}) {
  return (
    <div className="button-with-out-icon">
    <p className="btn-text"> {btnText}</p>
  </div>
  );
}

export default Buttonwithouticon;

import React from "react";

import "./story.css";

function Storydiv({pic, heading, text}) {
  return (
    <div className="story">
      <div className="first">
        <img src={pic} alt="pic" />
      </div>
      <div className="second">
        <p className="heading">{heading}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Storydiv;

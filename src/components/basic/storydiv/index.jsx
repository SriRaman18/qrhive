import React from "react";

import "./story.css";

function Storydiv({pic, heading, text}) {
  return (
    <div className="story">
      <div className="story-pic">
        <img src={pic} alt="pic" />
      </div>
      <div className="story-texts">
        <p className="story-heading">{heading}</p>
        <p className="story-text">{text}</p>
      </div>
    </div>
  );
}

export default Storydiv;

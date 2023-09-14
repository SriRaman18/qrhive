import React from "react";
import "./usecase.css";
import Usecasedata from "../../../usecasedata";
// { title, content, image,text }
// { title, content, image,text }
const Usecase = ({ title, content, image, text }) => {
  // console.log(image)
  return (
    <div className="usecase" >
      <div className="usecase-texts">
        <p className="usecase-heading">{title}</p>
        <p className="usecase-para">{content}</p>
      </div>
      <div className="usecase-pic">
        <p className="usecase-pic-text">{text}</p>
        {image}
      </div>
    </div>
  );
};

export default Usecase;

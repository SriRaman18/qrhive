import React from "react";
import "./usecase.css";
import Usecasedata from "../../../usecasedata";
import { useNavigate } from "react-router-dom";
// { title, content, image,text }
// { title, content, image,text }
const Usecase = ({ title, content, image, text,path }) => {
  // console.log(image)
  const routeNavigate = useNavigate()
  return (
    <div className="usecase" onClick={() => routeNavigate (path) }>
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

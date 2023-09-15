import React from "react";
import "./usecase.css";
import Usecasedata from "../../../usecasedata";
import { useNavigate } from "react-router-dom";
// { title, content, image,text }
// { title, content, image,text }
// import { Outlet, Link } from "react-router-dom"
const Usecase = ({ title, content, image, text, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="usecase" onClick={handleClick}>
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

import React, { useEffect } from "react";
import "./usecase.css";
import Usecasedata from "../../../usecasedata";
import { useNavigate } from "react-router-dom";
// { title, content, image,text }
// { title, content, image,text }
import { Outlet, Link } from "react-router-dom";
const Usecase = ({
  title,
  content,
  image,
  text,
  path,
  backGroundColor,
  position,
  color,
}) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   if (path) {
  //     navigate(`/usecases/${path}`);
  //   }
  // };

  // useEffect(() => {

  //   window.scrollTo(0, 0);
  // }, [navigate]);
  // onClick={handleClick}
  return (
    // <Link to={`usecases/${path}`}>
      <div className="usecase" data-aos="fade-down">
        <div className="usecase-texts">
          <p className="usecase-heading">{title}</p>
          <p className="usecase-para">{content}</p>
        </div>
        <div className="usecase-pic">
          <p
            className={
              position === "left"
                ? "usecase-pic-text"
                : "usecase-pic-text-right"
            }
            style={{
              color: color,
              backgroundColor: backGroundColor,
            }}>
            {text}
          </p>

          {image}
        </div>
      </div>
    // </Link>
  );
};

export default Usecase;

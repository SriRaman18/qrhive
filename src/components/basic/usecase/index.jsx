import React, { useEffect } from "react";
import "./usecase.css";

const Usecase = ({
  title,
  content,
  image,
  text,
  backGroundColor,
  position,
  color,
}) => {
  return (
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
  );
};

export default Usecase;

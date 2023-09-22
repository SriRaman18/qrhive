import React, { useState } from "react";
import "./faqquestion.css";
import { FaqOne, FaqTwo } from "../../../assets";
function Faqquestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleToggle = () => {
   // Immediately set isOpen to true

    // Use setTimeout to set isOpen back to false after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowInfo(!showInfo);
    }, 200);
  };
  return (
    <div className="single-faq" data-aos="fade-down">
      <div className="faq-question">
        <p className="question-title">{title}</p>
        <div className="question-btn" onClick={handleToggle}>
          {showInfo ? (
            <img src={FaqTwo} className="faq-icon" alt="" />
          ) : (
            <img src={FaqOne} className="faq-icon" alt="" />
          )}
        </div>
      </div>
      <div className="faq-answer">
        {showInfo && <p className="question-ans-text">{info}</p>}
      </div>
    </div>
  );
}

export default Faqquestion;

import React, { useState } from "react";
import "./faqquestion.css";
import { FaqOne, FaqTwo } from "../../../assets";
function Faqquestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="single-faq">
      <div className="faq-question">
        <p className="question-title">{title}</p>
        <div className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <img src={FaqTwo} className="faq-icon" alt="" /> : <img src={FaqOne} className="faq-icon"alt="" />}
        </div>
      </div>
      {showInfo && <p className="question-ans-text">{info}</p>}
    </div>
  );
}

export default Faqquestion;

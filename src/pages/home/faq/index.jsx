import React from "react";
import "./faq.css";
import Faqdata from "../../../faqdata";
import Faqquestion from "../../../components/basic/faqquestion";
function Faq() {
  return (
    <div className="faq">
      <div className="faq-title">FAQ</div>
      <div className="faq-content">
        {Faqdata.map((question) => {
          return (
            <Faqquestion
              key={question.id}
              title={question.title}
              info={question.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

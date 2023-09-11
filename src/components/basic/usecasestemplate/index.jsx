import React from "react";
import "./usecasestemplate.css";

function Usecasestemplate({
  headText,
  headTitle,
  bodyTitleOne,
  bodyTitleTwo,
  bodyTitleThree,
  bodyTextOne,
  bodyTextTwo,
  bodyTextThree,
  pic,
  icon
}) {
  return (
    <div className="usecases-template">
      <div className="usecases-template-head">
        <p className="usecases-template-head-heading">{headTitle}</p>
        <p className="usecases-template-text">{headText}</p>
      </div>
      <div className="usecases-template-body">
        <div className="usecases-template-body-texts">
          <div className="usecases-template-icon-text">
            <img
              src={icon}
              alt="check-circle"
              className="usecases-template-icon-text-img"
            />
            <div className="para">
              <p className="usecases-template-para-title">{bodyTitleOne}</p>
              <p className="usecases-template-para-text">{bodyTextOne}</p>
            </div>
          </div>
          <div className="usecases-template-icon-text">
            <img
              src={icon}
              alt="check-circle"
              className="usecases-template-icon-text-img"
            />
            <div className="para">
              <p className="usecases-template-para-title">{bodyTitleTwo}</p>
              <p className="usecases-template-para-text">{bodyTextTwo}</p>
            </div>
          </div>
          <div></div>
          <div className="usecases-template-icon-text">
            <img
              src={icon}
              alt="check-circle"
              className="usecases-template-icon-text-img"
            />
            <div className="para">
              <p className="usecases-template-para-title">{bodyTitleThree}</p>
              <p className="usecases-template-para-text">{bodyTextThree}</p>
            </div>
          </div>
        </div>
        <div className="usecases-template-pic">{pic}</div>
      </div>
    </div>
  );
}

export default Usecasestemplate;

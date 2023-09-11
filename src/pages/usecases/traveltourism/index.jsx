import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";

function Traveltourism() {
  return (
    <div className="">
      <Usecasestemplate
        key={usecasepagesdata[4].id}
        headTitle={usecasepagesdata[4].headerTitle}
        headText={usecasepagesdata[4].headerText}
        bodyTitleOne={usecasepagesdata[4].bodyTitleOne}
        bodyTextOne={usecasepagesdata[4].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[4].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[4].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[4].bodyTitleThree}
        bodyTextThree={usecasepagesdata[4].bodyTextThree}
        pic={usecasepagesdata[4].pic}
        icon={usecasepagesdata[4].icon}
      />
    </div>
  );
}

export default Traveltourism;

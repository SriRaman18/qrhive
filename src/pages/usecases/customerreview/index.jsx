import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";

function Customerreview() {
  return (
    <div className="">
      <Usecasestemplate
        key={usecasepagesdata[3].id}
        headTitle={usecasepagesdata[3].headerTitle}
        headText={usecasepagesdata[3].headerText}
        bodyTitleOne={usecasepagesdata[3].bodyTitleOne}
        bodyTextOne={usecasepagesdata[3].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[3].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[3].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[3].bodyTitleThree}
        bodyTextThree={usecasepagesdata[3].bodyTextThree}
        pic={usecasepagesdata[3].pic}
        icon={usecasepagesdata[3].icon}
      />
    </div>
  );
}

export default Customerreview;
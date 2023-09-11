import React from "react";

import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";

function Restaurantsmenu() {
  return (
    <div className="">
      <Usecasestemplate
        key={usecasepagesdata[1].id}
        headTitle={usecasepagesdata[1].headerTitle}
        headText={usecasepagesdata[1].headerText}
        bodyTitleOne={usecasepagesdata[1].bodyTitleOne}
        bodyTextOne={usecasepagesdata[1].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[1].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[1].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[1].bodyTitleThree}
        bodyTextThree={usecasepagesdata[1].bodyTextThree}
        pic={usecasepagesdata[1].pic}
        icon={usecasepagesdata[1].icon}
      />
    </div>
  );
}

export default Restaurantsmenu;

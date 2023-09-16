import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Digitalbranding() {
  return (
    <div className="">
      <Navbar highlightButton={"usecase"}/>

      <Usecasestemplate
        key={usecasepagesdata[6].id}
        headTitle={usecasepagesdata[6].headerTitle}
        headText={usecasepagesdata[6].headerText}
        bodyTitleOne={usecasepagesdata[6].bodyTitleOne}
        bodyTextOne={usecasepagesdata[6].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[6].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[6].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[6].bodyTitleThree}
        bodyTextThree={usecasepagesdata[6].bodyTextThree}
        pic={usecasepagesdata[6].pic}
        icon={usecasepagesdata[6].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Digitalbranding;

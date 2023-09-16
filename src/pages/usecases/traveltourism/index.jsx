import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Traveltourism() {
  return (
    <div className="">
      <Navbar highlightButton={"usecase"}/>
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
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Traveltourism;

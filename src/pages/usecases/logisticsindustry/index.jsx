import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Logisticsindustry() {
  return (
    <div className="">
      <Navbar highlightButton={"usecase"}/>

      <Usecasestemplate
        key={usecasepagesdata[8].id}
        headTitle={usecasepagesdata[8].headerTitle}
        headText={usecasepagesdata[8].headerText}
        bodyTitleOne={usecasepagesdata[8].bodyTitleOne}
        bodyTextOne={usecasepagesdata[8].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[8].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[8].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[8].bodyTitleThree}
        bodyTextThree={usecasepagesdata[8].bodyTextThree}
        pic={usecasepagesdata[8].pic}
        icon={usecasepagesdata[8].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Logisticsindustry;

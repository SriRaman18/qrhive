import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Fmcgindustry() {
  return (
    <div className="">
      <Navbar highlightButton={"usecase"}/>

      <Usecasestemplate
        key={usecasepagesdata[9].id}
        headTitle={usecasepagesdata[9].headerTitle}
        headText={usecasepagesdata[9].headerText}
        bodyTitleOne={usecasepagesdata[9].bodyTitleOne}
        bodyTextOne={usecasepagesdata[9].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[9].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[9].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[9].bodyTitleThree}
        bodyTextThree={usecasepagesdata[9].bodyTextThree}
        pic={usecasepagesdata[9].pic}
        icon={usecasepagesdata[9].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Fmcgindustry;

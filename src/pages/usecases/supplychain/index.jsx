import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";

function Supplychain() {
  return (
    <div className="">
      <Navbar />

      <Usecasestemplate
        key={usecasepagesdata[10].id}
        headTitle={usecasepagesdata[10].headerTitle}
        headText={usecasepagesdata[10].headerText}
        bodyTitleOne={usecasepagesdata[10].bodyTitleOne}
        bodyTextOne={usecasepagesdata[10].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[10].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[10].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[10].bodyTitleThree}
        bodyTextThree={usecasepagesdata[10].bodyTextThree}
        pic={usecasepagesdata[10].pic}
        icon={usecasepagesdata[10].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Supplychain;

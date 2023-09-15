import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Healthcare() {
  return (
    <div className="">
      <Navbar />

      <Usecasestemplate
        key={usecasepagesdata[11].id}
        headTitle={usecasepagesdata[11].headerTitle}
        headText={usecasepagesdata[11].headerText}
        bodyTitleOne={usecasepagesdata[11].bodyTitleOne}
        bodyTextOne={usecasepagesdata[11].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[11].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[11].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[11].bodyTitleThree}
        bodyTextThree={usecasepagesdata[11].bodyTextThree}
        pic={usecasepagesdata[11].pic}
        icon={usecasepagesdata[11].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Healthcare;

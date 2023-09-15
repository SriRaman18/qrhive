import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Corporateevents() {
  return (
    <div className="">
      <Navbar />
      <Usecasestemplate
        key={usecasepagesdata[2].id}
        headTitle={usecasepagesdata[2].headerTitle}
        headText={usecasepagesdata[2].headerText}
        bodyTitleOne={usecasepagesdata[2].bodyTitleOne}
        bodyTextOne={usecasepagesdata[2].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[2].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[2].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[2].bodyTitleThree}
        bodyTextThree={usecasepagesdata[2].bodyTextThree}
        pic={usecasepagesdata[2].pic}
        icon={usecasepagesdata[2].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Corporateevents;

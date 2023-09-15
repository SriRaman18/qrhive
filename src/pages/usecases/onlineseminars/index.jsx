import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Onlineseminars() {
  return (
    <div className="">
      <Navbar />

      <Usecasestemplate
        key={usecasepagesdata[5].id}
        headTitle={usecasepagesdata[5].headerTitle}
        headText={usecasepagesdata[5].headerText}
        bodyTitleOne={usecasepagesdata[5].bodyTitleOne}
        bodyTextOne={usecasepagesdata[5].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[5].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[5].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[5].bodyTitleThree}
        bodyTextThree={usecasepagesdata[5].bodyTextThree}
        pic={usecasepagesdata[5].pic}
        icon={usecasepagesdata[5].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Onlineseminars;

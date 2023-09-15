import React from 'react';
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Corporateeventstwo() {
  return (
    <div className="">
            <Navbar/>

      <Usecasestemplate
        key={usecasepagesdata[7].id}
        headTitle={usecasepagesdata[7].headerTitle}
        headText={usecasepagesdata[7].headerText}
        bodyTitleOne={usecasepagesdata[7].bodyTitleOne}
        bodyTextOne={usecasepagesdata[7].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[7].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[7].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[7].bodyTitleThree}
        bodyTextThree={usecasepagesdata[7].bodyTextThree}
        pic={usecasepagesdata[7].pic}
        icon={usecasepagesdata[7].icon}
      />
        <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Corporateeventstwo;

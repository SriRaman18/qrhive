import React from "react";

import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
function Restaurantsmenu() {
  return (
    <div className="">
      <Navbar />

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
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Restaurantsmenu;

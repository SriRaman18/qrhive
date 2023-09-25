import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Usecasesnavbar from "../../../components/basic/usecasesnavbar";

function Usecasesdetails() {
  const { path } = useParams();

 
  const filteredData = usecasepagesdata.find(
    (usecase) => usecase.path === path
  );

  return (
    <div className="">
      <Navbar highlightButton={"usecase"} />

      <Usecasestemplate
        key={filteredData.id}
        headTitle={filteredData.headerTitle}
        headText={filteredData.headerText}
        bodyTitleOne={filteredData.bodyTitleOne}
        bodyTextOne={filteredData.bodyTextOne}
        bodyTitleTwo={filteredData.bodyTitleTwo}
        bodyTextTwo={filteredData.bodyTextTwo}
        bodyTitleThree={filteredData.bodyTitleThree}
        bodyTextThree={filteredData.bodyTextThree}
        pic={filteredData.pic}
        icon={filteredData.icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Usecasesdetails;

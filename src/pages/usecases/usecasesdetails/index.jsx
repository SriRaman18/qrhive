import React from "react";
import Usecasestemplate from "../../../components/basic/usecasestemplate";
import usecasepagesdata from "../../../usecasepagesdata";
import Usecases from "../../home/usecases";
import Getstarted from "../../../components/basic/getstarted";
import Footer from "../../../components/basic/footer";
import Navbar from "../../../components/basic/navbar";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Usecasesdetails() {
  const { path } = useParams();
  // console.log(path);
  // const location = useLocation();
  // const from = new URLSearchParams(location.search).get("from");
  // const scrollPosition = from === "home" ? 0 : someOtherValue;
 
 
  const filteredData = usecasepagesdata.find(
    (usecase) => usecase.path === path
  );
  // console.log(filteredData);
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

import React from "react";
import {
  JbHospital,
  JmHospital,
  SooryaHospital,
  SooryaHospitalIcon,
  PowerIndustries,
  MvrMedicalCenter,
} from "../../../assets";
import "./companynames.css";

function Companynames() {
  return (
    <div className="company-names" data-aos="fade-down">
      <div className="company-names-div" >
        <div className="slider">
          <img src={JbHospital} alt="JbHospital" />
        </div>
        <div className="soorya-hospital slider">
          <img src={SooryaHospitalIcon} alt="SooryaHospitalIcon" />
          <img src={SooryaHospital} alt="SooryaHospital" />
        </div>
        <div className="slider">
          <img src={PowerIndustries} alt="PowerIndustries" />
        </div>
        <div className="slider">
          <img src={JmHospital} alt="JmHospital" />
        </div>
        <div className="slider">
          <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
        </div>

        {/* clone */}

        <div className="slider">
          <img src={JbHospital} alt="JbHospital" />
        </div>
        <div className="soorya-hospital slider">
          <img src={SooryaHospitalIcon} alt="SooryaHospitalIcon" />
          <img src={SooryaHospital} alt="SooryaHospital" />
        </div>
        <div className="slider">
          <img src={PowerIndustries} alt="PowerIndustries" />
        </div>
        <div className="slider">
          <img src={JmHospital} alt="JmHospital" />
        </div>
        <div className="slider">
          <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
        </div>
      </div>
    </div>
  );
}

export default Companynames;

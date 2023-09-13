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
    <div className="company-names">
      <div>
        <img src={JbHospital} alt="JbHospital" />
      </div>
      <div className="soorya-hospital">
        <img src={SooryaHospitalIcon} alt="SooryaHospitalIcon" />
        <img src={SooryaHospital} alt="SooryaHospital" />
      </div>
      <div>
        <img src={PowerIndustries} alt="PowerIndustries" />
      </div>
      <div>
        <img src={JmHospital} alt="JmHospital" />
      </div>
      <div>
        <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
      </div>
    </div>
  );
}

export default Companynames;

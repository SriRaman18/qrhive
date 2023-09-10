import React from "react";
import "./ourmission.css";
import { Scan } from "../../../assets";
function Ourmission() {
  return (
    <div className="our-mission">
      <div className="our-mission-texts">
        <p className="our-mission-heading">Our Mission</p>
        <p className="our-mission-text">
          At the core of our mission is the drive to simplify QR code generation
          while upholding exceptional quality and functionality. We recognize
          the growing significance of QR codes in today's digital realm and aim
          to provide effortless access for individuals and businesses to harness
          their power.
          <br />
          <br />
          In an era where QR codes bridge the gap between physical and virtual
          domains, our commitment resonates. We're dedicated to uncomplicating
          the QR code creation process, ensuring that users can leverage these
          codes effectively. Our goal is to empower everyone to navigate the
          digital landscape confidently, using QR codes as tools for seamless
          connectivity and unlimited possibilities.
        </p>
      </div>
      <div className="our-mission-pic">
        <Scan />
      </div>
    </div>
  );
}

export default Ourmission;

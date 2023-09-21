import React from "react";
import "./ourmission.css";
import { Scan } from "../../../assets";
function Ourmission() {
  return (
    <div className="our-mission">
      <div className="our-mission-texts">
        <h2 className="our-mission-heading" data-aos="fade-left">Our Mission</h2>
        <p className="our-mission-para"  data-aos="fade-down">
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
      <div data-aos="fade-right">
        <Scan className="our-mission-svg" />
      </div>
    </div>
  );
}

export default Ourmission;

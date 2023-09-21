import React from "react";
import "./whatwedo.css";
import { GroupDiscuss } from "../../../assets";
function Whatwedo() {
  return (
    <div className="what-we-do">
      <div className="what-we-do-pic" data-aos="fade-down" >
        <GroupDiscuss className="what-we-do-svg"/>
      </div>
      <div className="what-we-do-texts">
        <h2 className="what-we-do-heading" data-aos="fade-left">What we do</h2>
        <p className="what-we-do-para"  data-aos="fade-down">
          Enter the realm of QRhive, where your primary QR code generation
          requirements discover their rightful abode. In this sphere, an
          enduring dedication to simplicity, efficiency, and reliability propels
          our objective: to provide you with an adaptable platform to create
          customized QR codes. Whether you're a small business owner, a
          marketing virtuoso, an event orchestrator, or an individual questing
          for innovation, our intuitively crafted QRhive empowers you to
          establish fresh connections with your audience, irrespective of your
          position or aspirations.
        </p>
      </div>
    </div>
  );
}

export default Whatwedo;

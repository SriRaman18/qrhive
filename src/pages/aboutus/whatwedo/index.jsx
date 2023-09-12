import React from "react";
import "./whatwedo.css";
import { GroupDiscuss } from "../../../assets";
function Whatwedo() {
  return (
    <div className="what-we-do">
      <div className="what-we-do-pic">
        <GroupDiscuss className="what-we-do-svg"/>
      </div>
      <div className="what-we-do-texts">
        <p className="what-we-do-heading">What we do</p>
        <p className="what-we-do-para">
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

import React from "react";
import "./trackqrcodes.css";
import Button from "../../../components/basic/button/button";
import { ArrowRight, ChartTwo } from "../../../assets";
function Trackqrcodes() {
  return (
    <div className="track-qrcodes">
      <div className="track-qrcodes-texts">
        <p className="track-qrcodes-heading">
          Effortlessly generate, track{" "}
          <span className="highlight"> QR Codes</span> with ultimate ease.
        </p>
        <p className="track-qrcodes-text">
          Generate personalized QR codes, share them, and access statistics
          instantly on QRhive.
        </p>
        <Button btnText={"Connect with us"} icon={ArrowRight} />
      </div>
      <div className="track-qrcodes-pic">
        <ChartTwo />
      </div>
    </div>
  );
}

export default Trackqrcodes;

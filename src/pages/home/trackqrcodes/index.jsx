import React from "react";
import "./trackqrcodes.css";
import Button from "../../../components/basic/button/button";
import { ArrowRight, ChartTwo } from "../../../assets";
import Navbarhome from "../../../components/basic/navbarhome";
function Trackqrcodes() {
  return (
    <div className="home">
      <Navbarhome />
      <div className="track-qrcodes">
        <div className="track-qrcodes-texts">
          <p className="track-qrcodes-heading">
            Effortlessly generate, track{" "}
            <span className="highlight-head"> QR Codes</span> with ultimate ease.
          </p>
          <p className="track-qrcodes-text">
            Generate personalized QR codes, share them, and access statistics
            instantly on QRhive.
          </p>
          <Button btnText={"Connect with us"}  />
        </div>
        <div >
          <ChartTwo className="track-qrcodes-pic"/>
        </div>
      </div>
    </div>
  );
}

export default Trackqrcodes;

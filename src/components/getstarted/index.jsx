import React from "react";


import Button from "../../components/basic/button/button.js"

import mobile from "../../assets/svgImages/mobile.svg"

import arrow from "../../assets/pngImages/arrow-right.png"

import "./getstarted.css";

function Getstarted() {
  return (
    <div className="get-started">
      <div className="get-started-texts">
        
      <h3>Elevate Your Brand with QRhive. For any inquiries</h3>
      <p>Join our community of QR code enthusiasts and experience the convenience, engagement, and innovation that await.</p>
      <Button btnText={"Get Started"} icon={arrow}/>

      </div>
      <div className="get-started-figure">
        <img src={mobile} alt="mobile"/>
      </div>
    </div>
  );
}

export default Getstarted;

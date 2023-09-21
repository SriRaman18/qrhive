import React from "react";

import Button from "../button/button.js";
import { GetStarted, ArrowRight } from "../../../assets/index.js";
import "./getstarted.css";

function Getstarted() {
  return (
    <div className="get-started">
      <div className="get-started-texts">
        <h3 className="get-started-heading" data-aos="fade-down">
          Elevate Your Brand with QRhive. For any inquiries
        </h3>
        <p className="get-started-para" data-aos="fade-down">
          Join our community of QR code enthusiasts and experience the
          convenience, engagement, and innovation that await.
        </p>
        <Button btnText={"Get Started"} size={false} />
      </div>
      <div className="get-started-figure"  data-aos="fade-left">
        <img className="get-started-svg" src={GetStarted} alt="mobile" />
        {/* <QrCode className="get-started-svg" /> */}
      </div>
    </div>
  );
}

export default Getstarted;

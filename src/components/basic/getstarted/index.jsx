import React from 'react'

import Button from '../button/button.js'
import { GetStarted, ArrowRight } from '../../../assets/index.js'
import './getstarted.css'

function Getstarted() {
  return (
    <div className="get-started">
      <div className="get-started-texts">
        <h3 className="get-started-heading">
          Elevate Your Brand with QRhive. For any inquiries
        </h3>
        <p className="get-started-para">
          Join our community of QR code enthusiasts and experience the
          convenience, engagement, and innovation that await.
        </p>
        <Button btnText={'Get Started'} icon={ArrowRight} />
      </div>
      <div className="get-started-figure">
        <img className="get-started-svg"src={GetStarted} alt="mobile"/>
        {/* <QrCode className="get-started-svg" /> */}
      </div>
    </div>
  )
}

export default Getstarted

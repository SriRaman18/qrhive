import React from 'react'

import Button from '../button/button.js'
import { QrCode, ArrowRight } from '../../../assets/index.js'
import './getstarted.css'

function Getstarted() {
  return (
    <div className="get-started">
      <div className="get-started-texts">
        <p className="get-started-heading">
          Elevate Your Brand with QRhive. For any inquiries
        </p>
        <p className="get-started-text-wrapper">
          Join our community of QR code enthusiasts and experience the
          convenience, engagement, and innovation that await.
        </p>
        <Button btnText={'Get Started'} icon={ArrowRight} />
      </div>
      <div className="get-started-figure">
        <img src={QrCode} alt="mobile"/>
        {/* <QrCode /> */}
      </div>
    </div>
  )
}

export default Getstarted

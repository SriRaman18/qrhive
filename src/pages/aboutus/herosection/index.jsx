import React from 'react'
import './herosection.css'
import { PhotoOne, PhotoTwo } from '../../../assets'
function Herosection() {
  return (
    <div className="about-us">
      <div className="about-us-texts">
        <h1 className="about-us-heading">About Us</h1>
        <p className="about-us-para">
          QRhive! Beyond QR codes, we're your co-pilots in shaping future
          technology, exploring innovation and possibilities together.
        </p>
      </div>
      <div className="about-us-pic">
        <img src={PhotoTwo} className="pic1" alt="pic" />
        <img src={PhotoOne} className="pic2" alt="pic" />
      </div>
    </div>
  )
}

export default Herosection

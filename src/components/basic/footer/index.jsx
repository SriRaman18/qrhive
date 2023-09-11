import React from "react";
import { LogoTwo } from "../../../assets";
import './footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-texts">
        <img src={LogoTwo} alt="" />
        <p className="footer-text">
          Generate custom QR codes with QRhive. Add your URLs to create faster
          links for customers to access your website and social media. Improve
          customer engagement by using QR codes on your materials. Just input a
          URL and get your QR code instantly!
        </p>
      </div>
      <div>
        <div>
          <p> QRhive</p>
          <ul className="footer-list">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Why Us</a>
            </li>
            <li>
              <a href="">QR Customization</a>
            </li>
            <li>
              <a href="">Use cases</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <p> Help</p>
          <ul className="footer-list">
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <p> Legal</p>
          <ul className="footer-list">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <p> Company</p>
          <ul className="footer-list">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

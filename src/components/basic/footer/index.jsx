import React from "react";
import { LogoTwo, Facebook, Instagram, Twitter } from "../../../assets";
import "./footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-texts" data-aos="fade-down">
          <LogoTwo />
          <p className="footer-text">
            Generate custom QR codes with QRhive. Add your URLs to create faster
            links for customers to access your website and social media. Improve
            customer engagement by using QR codes on your materials. Just input
            a URL and get your QR code instantly!
          </p>
        </div>
        <div className="footer-Contents">
          <div className="footer-content" data-aos="fade-down">
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
          <div className="footer-content" data-aos="fade-down">
            <p> Help</p>
            <ul className="footer-list">
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-content" data-aos="fade-down">
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
          <div className="footer-content" data-aos="fade-down">
            <p> Company</p>
            <ul className="footer-list footer-list-sm">
              <li>
                <img src={Facebook} alt="facebook-pic" />
                <a href="">Facebook</a>
              </li>
              <li>
                <img src={Twitter} alt="twitter-pic" />
                <a href="">Twitter</a>
              </li>
              <li>
                <img src={Instagram} alt="insta-pic" />
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy-rights">
        <p id="copyright-text">
          Copyright © {currentYear} QRhive Website | All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;

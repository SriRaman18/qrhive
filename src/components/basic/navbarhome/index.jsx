import React, { useState } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import "./navbarhome.css";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Navbarhome() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  return (
    <div className="nav-bar" id="#">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menu-btn" onClick={() => setShowSideNavbar(true)}>
        {/* <i className="fa-solid fa-bars"></i> */}

        <GiHamburgerMenu className="menu" />
      </div>
      <div className={showSideNavbar ? "sub-menu show" : "sub-menu"}>
        <div className="close-btn" onClick={() => setShowSideNavbar(false)}>
          <MdClose className="close" />
        </div>
        <ul className="ul">
          <div className="li">
            <a href="#why-qrhive">
              <Buttonwithouticon btnText={"Why Us"} />
            </a>
          </div>

          <div className="li">
            <a href="#use-cases" className="a-li ">
              Use cases
            </a>
          </div>

          <div className="li">
            <NavLink className="a-li " to="/contact-support">
              {" "}
              Contact&Support
            </NavLink>
          </div>
          <div className="li">
            <NavLink className="a-li" to="/about-us">
              About Us
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbarhome;

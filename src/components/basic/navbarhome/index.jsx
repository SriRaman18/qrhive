import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import "./navbarhome.css";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Navbarhome() {
  const sideNavbar = document.getElementsByClassName("nav-bar");

  const [showSideNavbar, setShowSideNavbar] = useState(false);

  

  const navbarRef = useRef(null);

  const navbarHome = document.getElementById("navbar-home");
  document.body.addEventListener("click", (event) => {
    if (navbarHome && !navbarHome.contains(event.target)) {
      setShowSideNavbar(false);
    }
  });

  return (
    <div className="nav-bar" id="navbar-home" ref={navbarRef}>
      <div className="logo">
        <NavLink className="a-li " to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="menu-btn" onClick={() => setShowSideNavbar(true)}>
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

          <div className="li" onClick={() => setShowSideNavbar(false)}>
            <a className="a-li " href="#use-cases">
              Use Cases
            </a>
          </div>

          <div className="li">
            <NavLink className="a-li " to="/contact-support">
              Contact & Support
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

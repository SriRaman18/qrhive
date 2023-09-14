import React, { useState } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
// import Whyqrhive from "../../../pages/home/whyqrhive";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [showSideNavbar, setShowSideNavbar] = useState(false);

  return (
    <div className="nav" id="#">
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
            <Buttonwithouticon btnText={"Why Us"} />
          </div>

          <div className="li">
            <a href=" " className="a-li ">
              Use cases
            </a>
          </div>

          <div className="li">
            <a href=" " className="a-li ">
              <NavLink to="/contact-support"> Contact&Support</NavLink>
            </a>
          </div>
          <div className="li">
            <a href=" " className="a-li ">
              <NavLink to="/about-us">About Us</NavLink>
            </a>
          </div>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;

{
  /* <div className="navbar">
<div className="logo">
  <img src={Logo} alt="logo" />
</div>

<ul className="nav-list">
  <li>
    <Buttonwithouticon btnText={"Why Us"} />
  </li>
  <li>
    <a href="#">Use cases</a>
  </li>
  <li>
    <a href="#">Contact&Support</a>
  </li>
  <li>
    <a href="#">About Us</a>
  </li>
</ul>
</div> */
}

import React, { useState } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
// import Whyqrhive from "../../../pages/home/whyqrhive";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar({ highlightButton }) {
  const navigate = useNavigate();

  const [showSideNavbar, setShowSideNavbar] = useState(false);

  return (
    <div className="nav" id="#">
      <div className="logo">
        <NavLink className="a-li" to="/">
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
            <NavLink className="a-li" to="/">
              Why Us
            </NavLink>
          </div>
          <div className="li">
            {highlightButton == "usecase" ? (
              <Buttonwithouticon btnText={"Use Case"} />
            ) : (
              <NavLink className="a-li" to="/shopping">
                Use Cases
              </NavLink>
            )}
          </div>
          <div className="li">
            <NavLink className="a-li" to="/contact-support">
              Contact&Support
            </NavLink>
          </div>
          <div className="li">
            {highlightButton == "aboutUs" ? (
              <Buttonwithouticon btnText={"About Us"} />
            ) : (
              <NavLink className="a-li" to="/about-us">
                About Us
              </NavLink>
            )}
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

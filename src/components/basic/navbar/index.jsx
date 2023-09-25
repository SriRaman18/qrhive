import React, { useState } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar({ highlightButton }) {
  const navigate = useNavigate();

  const [showSideNavbar, setShowSideNavbar] = useState(false);
  // const navbar = document.getElementById("navbar");
  // document.body.addEventListener("click", (event) => {
  //   if (navbar && !navbar.contains(event.target)) {
  //     setShowSideNavbar(false);
  //   }
  // });
  return (
    <div className="nav" id="navbar">
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
              <NavLink className="a-li" to="/usecases/shopping">
                Use Cases
              </NavLink>
            )}
          </div>
          <div className="li">
            <NavLink className="a-li" to="/contact-support">
              Contact & Support
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


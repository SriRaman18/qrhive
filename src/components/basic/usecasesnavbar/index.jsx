import React, { useState } from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import "./usecasesnavbar.css";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react";

function Usecasesnavbar() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  

  const navbarUsecases = document.getElementById("navbar-usecases");
  document.body.addEventListener("click", (event) => {
    if (navbarUsecases && !navbarUsecases.contains(event.target)) {
      setShowSideNavbar(false);
    }
  });

  return (
    <div className="nav-bar-usecases" id="navbar-usecases" >
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
            <a href="#why-qrhive">Why Us</a>
          </div>

          <div className="li" onClick={() => setShowSideNavbar(false)}>
            <a className="a-li " href="#use-cases">
              <Buttonwithouticon btnText={"Use Cases"} />
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

export default Usecasesnavbar;

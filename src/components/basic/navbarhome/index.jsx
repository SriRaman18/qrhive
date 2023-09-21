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

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (showSideNavbar && !event.target.closest(".nav-bar")) {
  //       // If navigation bar is open and the click is outside of it, close it
  //       setShowSideNavbar(false);
  //     }
  //   };
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showSideNavbar]);

  // document.addEventListener("click", handleClickOutside);

  const navbarRef = useRef(null);

  // Function to handle click outside the navbar
  // const handleClickOutside = (event) => {
  //   if (navbarRef.current && !navbarRef.current.contains(event.target)) {
  //     showSideNavbar(false);
  //   }
  // };
  const navbarHome = document.getElementById("navbar-home");
  document.body.addEventListener("click", (event) => {
    if (navbarHome && !navbarHome.contains(event.target)) {
      // If navigation bar is open and the click is outside of it, close it
      setShowSideNavbar(false);
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.className) {
      // console.log("Clicked Element's Class Name:", event.target.className);
    }
  });

  // Add event listener when the component mounts
  // useEffect(() => {
  //   if (showSideNavbar) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showSideNavbar]);

  // console.log(navbarRef.current);
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
          <NavLink className="a-li " to="/usecases/shopping">

              Use Cases
              </NavLink>

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

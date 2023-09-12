import React from "react";
import { Logo } from "../../../assets";
import Buttonwithouticon from "../buttonwithouticon";
import "./navbarhome.css";
function Navbarhome() {
  return (
    <div className="navbar-home">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="nav-list-home">
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
    </div>
  );
}

export default Navbarhome;

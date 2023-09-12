import React from "react";
import Navbar from "../../components/basic/navbar";
import Herosection from "./herosection";
import Ourmission from "./ourmission";
import Values from "./values";
import Whatwedo from "./whatwedo";
import Getstarted from "../../components/basic/getstarted";
import Footer from "../../components/basic/footer";
function Aboutus() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Whatwedo />
      <Ourmission />
      <Values />
      <Getstarted />
      <Footer/>
    </div>
  );
}

export default Aboutus;

import React from "react";
import Navbarhome from "../../components/basic/navbarhome";
import Trackqrcodes from "./trackqrcodes";
import Whyqrhive from "./whyqrhive";
import Customization from "./customization";
import Audienceinteraction from "./audienceinteraction";
import Getstarted from "../../components/basic/getstarted";
import Footer from "../../components/basic/footer";
import Faq from "./faq";
import Usecases from "./usecases";
import Companynames from "./companynames";
import Ourclientsspeak from "./ourclientsspeak";

import "./home.css";

function Home() {
  return (
    <div className="home-page">
      {/* <Navbarhome /> */}
      <Trackqrcodes />
      <Whyqrhive />
      <Customization />
      <Audienceinteraction />
      <Usecases />
      <Faq />
      <Companynames />
      <Ourclientsspeak />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Home;

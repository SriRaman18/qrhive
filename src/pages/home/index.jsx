import React from "react";
import Navbarhome from "../../components/basic/navbarhome";
import Trackqrcodes from "./trackqrcodes";
import Whyqrhive from "./whyqrhive";
import Customization from "./customization";
import Audienceinteraction from "./audienceinteraction";
import Getstarted from "../../components/basic/getstarted";
import Footer from "../../components/basic/footer";
import Faq from "./faq";
function Home() {
  return (
    <div>
      {/* <Navbarhome /> */}
      <Trackqrcodes />
      <Whyqrhive />
      <Customization />
      <Audienceinteraction />
      <Faq />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Home;

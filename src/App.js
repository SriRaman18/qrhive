import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Usecasedata from "./usecasedata";
import routesdata from "./routesdata";

import Aos from "aos";

import "aos/dist/aos.css";

import { StoryOne } from "./assets";
// import Navbar from "./components/basic/navbar";
import Getstarted from "./components/basic/getstarted";
import Storydiv from "./components/basic/storydiv";
import Values from "./pages/aboutus/values";
import Whatwedo from "./pages/aboutus/whatwedo";
import Ourmission from "./pages/aboutus/ourmission";
import Herosection from "./pages/aboutus/herosection";
import Whyqrhive from "./pages/home/whyqrhive";
import Customization from "./pages/home/customization";
import Usecases from "./pages/home/usecases";
import Audienceinteraction from "./pages/home/audienceinteraction";
import Trackqrcodes from "./pages/home/trackqrcodes";

// import Shopping from './pages/usecases/shopping'
import Usecasestemplate from "./components/basic/usecasestemplate";
// import Corporateevents from "./pages/usecases/corporateevents";
import Navbar from "./components/basic/navbar";
import Aboutus from "./pages/aboutus";
import Footer from "./components/basic/footer";
import Home from "./pages/home";
import Faqquestion from "./components/basic/faqquestion";
import Faq from "./pages/home/faq";
import Companynames from "./pages/home/companynames";
import Ourclientsspeak from "./pages/home/ourclientsspeak";
import Clientsfeedback from "./components/basic/clientsfeedback";
import Contact from "./pages/contact";
import Navbarhome from "./components/basic/navbarhome";

// -----------------------------------------
import Usecase from "./components/basic/usecase";
import Shopping from "./pages/usecases/shopping";
// import Shopping from "./pages/usecases/shopping";
import Traveltourism from "./pages/usecases/traveltourism";
import Corporateevents from "./pages/usecases/corporateevents";
import Customerreview from "./pages/usecases/customerreview";
import Digitalbranding from "./pages/usecases/digitalbranding";
import Fmcgindustry from "./pages/usecases/fmcgindustry";
import Healthcare from "./pages/usecases/healthcare";
import Logisticsindustry from "./pages/usecases/logisticsindustry";
import Onlineseminars from "./pages/usecases/onlineseminars";
import Restaurantsmenu from "./pages/usecases/restaurantsmenu";
import Supplychain from "./pages/usecases/supplychain";
import Warrantyregistration from "./pages/usecases/warrantyregistration";
import Usecasesdetails from "./pages/usecases/usecasesdetails";

function App() {
  // Use the useEffect hook to listen for route changes
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);



  return (
    <div className="App">
      {/* <Navbar />  */}
      {/* <Getstarted /> */}
      {/* <Values />  */}
      {/* <Whatwedo/> */}
      {/* <Ourmission /> */}
      {/* <Herosection /> */}
      {/* <Whyqrhive /> */}
      {/* <Storydiv /> */}
      {/* <Customization /> */}
      {/* <Audienceinteraction/> */}
      {/* <Trackqrcodes/> */}
      {/* <Shopping/> */}
      {/* <Usecasestemplate/> */}
      {/* <Corporateevents/> */}
      {/* <Navbar/> */}
      {/* <Footer/>   */}
      {/* <Faqquestion /> */}
      {/* <Faq /> */}
      {/* <Companynames /> */}
      {/* <Ourclientsspeak /> */}
      {/* <Clientsfeedback /> */}
      {/* <Contact /> */}
      {/* <Navbarhome/> */}
      {/* <Usecase /> */}
      {/* <Usecases /> */}

      {/* <Aboutus/>  */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-support" element={<Contact />} />
          <Route path="/usecases/:path" element={<Usecasesdetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* {routesdata.map((usecase) => (
    <Route
    // key={usecase.id}
    path={usecase.pagename}
    element={usecase.element}
    />
    ))} */
}
{
  /* <Route
    path="/corporate-events-two"
  element={<Corporateeventstwo />}
  /> */
}
{
  /* <Route path="/corporate-events" element={<Corporateevents />} />
<Route path="/digital-branding" element={<Digitalbranding />} />
<Route path="/fmcg-industry" element={<Fmcgindustry />} />
<Route path="/healthcare" element={<Healthcare />} />
<Route path="/logistics-industry" element={<Logisticsindustry />} />
<Route path="/restaurants-menu" element={<Restaurantsmenu />} />
<Route path="/shopping" element={<Shopping />} />
<Route path="/supply-chain" element={<Supplychain />} />
<Route path="/healthcare" element={<Healthcare />} /> */
}

{
  /* <Route path="shopping" element={<Shopping />} />
<Route path="corporate-events" element={<Corporateevents />} />
<Route path="digital-branding" element={<Digitalbranding />} />
<Route path="fmcg-industry" element={<Fmcgindustry />} />
<Route path="healthcare" element={<Healthcare />} />
<Route path="logistics-industry" element={<Logisticsindustry />} />
<Route path="restaurants-menu" element={<Restaurantsmenu />} />
<Route path="shopping" element={<Shopping />} />
<Route path="supply-chain" element={<Supplychain />} />
<Route path="travel-tourism" element={<Traveltourism />} />

<Route
  path="warranty-register"
  element={<Warrantyregistration />}
/>
<Route path="healthcare" element={<Healthcare />} /> */
}

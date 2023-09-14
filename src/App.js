import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Corporateevents from "./pages/usecases/corporateevents";
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
import Usecase from "./components/basic/usecase";
import Shopping from "./pages/usecases/shopping";
import Traveltourism from "./pages/usecases/traveltourism";
function App() {
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
      {/* <Traveltourism /> */}
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/contact-support" element={<Contact />} />
           
          </Routes>
        </Router>
    </div>
  );
}

export default App;

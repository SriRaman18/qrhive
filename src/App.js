import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./scrollToTop";
import Aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Usecasesdetails from "./pages/usecases/usecasesdetails";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/contact-support" element={<Contact />} />
            <Route path="/usecases/:path" element={<Usecasesdetails />}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

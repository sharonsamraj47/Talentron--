import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import TrainingProgramPage from "./pages/training_program";
import TrainingPartnerPage from "../src/pages/training_partner";
import AboutPage from "../src/pages/about_us";
import ContactUs from "./pages/contact_us";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ScrollToTop />
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training-partner" element={<TrainingPartnerPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/training-program" element={<TrainingProgramPage />}/>
        <Route path="/Privacy-Policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
};

export default App;

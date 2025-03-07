import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import FooterForm from "./FooterForm";
import FooterForm2 from "./FooterForm2";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  
  const goToTrainingPrograms = (tabKey) => {
    if (!tabKey) {
      navigate("/training-program");
    } else {
      navigate("/training-program", { state: { activeTab: tabKey } });
    }
    
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  
  const goToTrainingPartners = () => {
    navigate("/training-partner");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  
  const goToAboutUs = () => {
    navigate("/about-us");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  const goToPrivacyPolicy = () => {
    navigate("/Privacy-Policy");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  
  const goToContactUs = () => {
    navigate("/contact-us");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };

  return (
    <footer>
      <FooterForm2 />

      <div className="footer-bottom bg-dark bg-gradient text-white pt-4 pb-4">
        <div className="container ">
          <div className="row">
             {/* Left Section */}
            <div className="col-md-4 text-center text-md-start">
              <h4 className="fw-bold">
                <img
                  src="/images\Rectangle 2.png"
                  alt="square_color"
                  className="img-fluid me-1"
                />Talentron
              </h4>
              <p className="footer-text">
                Founded by Solomon, whose extensive 20-year career spanned
                various domains, Talentron was born out of a passion for
                building high-performing teams and unlocking their full
                potential.
              </p>
              <p className="footer-tele-email">
              <img
                  src="/images/location.png"
                  alt="location"
                  className="img-fluid ms-1 me-2"
                />
                Lapis Data Analytics, <br/>
                <span className="indent">26/1, W Mada St, Maduravoyal,</span><br/>
                <span className="indent"> Chennai 600095, India</span><br/>
                <img
                  src="/images/ic_baseline-phone.png"
                  alt="phone"
                  className="img-fluid me-1"
                />
                +91-1234567890 / 9087654321<br />
                <img
                  src="/images/fluent_mail-20-filled.png"
                  alt="mail"
                  className="img-fluid me-1"
                />
                talentron2024@gmail.com
              </p>
            </div>

        
            {/* Right Section */}
            <div className="col-md-8">
              <div className="row text-center text-md-start">
                {/* Column 1 */}
                <div className="col-6 col-md-6 mb-6 d-flex flex-column justify-content-center align-items-center">
                  <ul className="list-unstyled">
                    <li>
                      <button onClick={goToHome} className="nav-link text-white footer-text pb-3">
                        Home
                      </button>
                    </li>
                    <li>
                      <button onClick={() => goToTrainingPrograms()} className="nav-link text-white footer-text pb-3">
                        Training Program
                      </button>
                    </li>
                    <li>
                      <button onClick={goToTrainingPartners} className="nav-link text-white footer-text pb-3">
                        Training Partner
                      </button>
                    </li>
                    <li>
                      <button onClick={goToAboutUs} className="nav-link text-white footer-text pb-3">
                        About Us
                      </button>
                    </li>
                    <li>
                      <button onClick={goToContactUs} className="nav-link text-white footer-text pb-3">
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="col-6 col-md-6 mb-6 d-flex flex-column justify-content-center align-items-center">
                  <ul className="list-unstyled">
                    <li>
                      <button onClick={() => goToTrainingPrograms("fullstack")} className="nav-link text-white footer-text pb-3">
                        Full-stack Development
                      </button>
                    </li>
                    <li>
                      <button onClick={() => goToTrainingPrograms("frontend")} className="nav-link text-white footer-text pb-3">
                        Front-end Development
                      </button>
                    </li>
                    <li>
                      <button onClick={() => goToTrainingPrograms("DataEngineering")} className="nav-link text-white footer-text pb-3">
                        Data Engineering
                      </button>
                    </li>
                    <li>
                      <button onClick={() => goToTrainingPrograms("SoftwareTesting")} className="nav-link text-white footer-text pb-3">
                        Software Testing
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-secondary" />
 
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
           

            <p className="m-0">© 2024 Talentron. All rights reserved</p>

            <button onClick={goToPrivacyPolicy} className="text-white text-decoration-underline bg-transparent border-0">
  Privacy Policy
</button>
          </div>
        </div>

        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
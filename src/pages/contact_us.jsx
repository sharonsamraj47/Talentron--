import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FormButton from "../components/form_button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/global.css";
import Form2 from "../components/Form2";
const ContactUs = () => {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const location = useLocation();
  const userType = location.state?.userType || null;
  useEffect(() => {
    if (userType === "job-seeker") {
      setShowForm(true);
      setFormType("jobSeeker");
    }
  }, [userType]);

  const toggleForm = (type) => {
    if (formType === type) {
      setShowForm(!showForm);
    } else {
      setShowForm(true);
      setFormType(type);
    }
  };
useEffect(() => {
    const images = document.querySelectorAll("img");
  
    if (images.length === 0) {
      setLoading(false); // If there are no images, stop loading immediately
      return;
    }
  
    const imagePromises = Array.from(images).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve(); // Already loaded
        } else {
          img.onload = () => resolve(); // Resolve when loaded
          img.onerror = () => resolve(); // Resolve even if there's an error
        }
      });
    });
  
    Promise.all(imagePromises).then(() => setLoading(false)); // Set loading false once all images are loaded
},[]);


  const desktopGoogleMapsLink = "https://maps.app.goo.gl/cUxoWnS7FnDmsiuC6";
  const mobileGoogleMapsLink =
    "geo:13.061756007303863, 80.16377649544637?q=Lapis+Data+Analytics+Pvt.+Ltd.";

  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleMapClick = () => {
    const linkToOpen = isMobile ? mobileGoogleMapsLink : desktopGoogleMapsLink;
    window.open(linkToOpen, "_blank");
  };

 
  return (
    <>
     {loading ? (
        <div className="loading-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
      <main>
        <FormButton />
        {/* title head - start */}
        <div className="contact-us-head-container">
          <div className="dark-background">
            <div className="top-banner">
              <i>
                <img
                  src="/images/phone.png"
                  className="call-us-img"
                />
              </i>
              <span className="banner-text-style">Call us</span>
            </div>
            <h1 className="section-heading">Join us!</h1>
            <h1 className="Below-section-heading blue-text">Our Talentron</h1>
            <p className="section-paragraph">
            Join Talentron and unlock opportunities to innovate, lead, grow, connect, excel, and make an impact.
            </p>
          </div>
        </div>

        {/* title head - End */}

        {/* Email Ids - start */}
        
        

        <div className="container text-center  my-5">
          {}


          <div className="row mt-4 justify-content-center">
            {/* Box 1 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('jobSeeker')}
            >
              <div className="Contact-Email-custom-card-1 d-flex flex-column">
                <div className="icon-circle-1">
                  <i>
                    <img
                      src="/images/mdi_head-lightbulb.png"
                      alt="Head-lightbulb"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle" style={{marginTop:"5px"}}>Job Seekers</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Job@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('trainingRequest')}
            >
              <div className="Contact-Email-custom-card-2">
                <div className="icon-circle-2">
                  <i>
                    <img
                      src="/images/healthicons_i-training-class.png"
                      alt="training-class"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle"  style={{marginTop:"5px"}}>Training Request</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Training@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('trainingPartner')}
            >
              <div className="Contact-Email-custom-card-3">
                <div className="icon-circle-3">
                  <i>
                    <img
                      src="/images/game-icons_anvil-impact.png"
                      alt="anvil-impact"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle"  style={{marginTop:"5px"}}>Training Partner</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Partner@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
            {/* Box 4 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('hiringRequest')}
            >
              <div className="Contact-Email-custom-card-4">
                <div className="icon-circle-4">
                  <i>
                    <img
                      src="/images/vaadin_handshake.png"
                      alt="handshake"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle"  style={{marginTop:"5px"}}>Hiring Request</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">hiring@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Form2 */}
          <Modal show={showForm} onHide={() => setShowForm(false)} dialogClassName="custom-modal-width" contentClassName="custom-modal-content">

<Modal.Body>
<button 
className="custom-close-button" 
onClick={() => setShowForm(false)}
>
×
</button>
<Form2 showForm={showForm} setShowForm={setShowForm} formType={formType} />
</Modal.Body>
</Modal>

        </div>

        {/* Email Ids - End */}
        {/* Our location - start */}

        <div className="container text-center my-5">
          <h2 className="headline">Our Location</h2>
          <p className="subtitle">Connecting Hub</p>
          <div
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            onClick={handleMapClick}
            style={{ cursor: "pointer" }}
          >
            <iframe
              title="Lapis Data Analytics Pvt. Ltd."
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.592527519292!2d80.161201574843!3d13.061588787262114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526330665dc9e5%3A0x1ec90c82a0b8cbf8!2sLapis%20Data%20Analytics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740831768226!5m2!1sen!2sin" 
              width="100%"
              height="321px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>

        {/* Our location - end */}
      </main>
)}
    </>
  );
};

export default ContactUs;

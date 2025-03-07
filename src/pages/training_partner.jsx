import React, { useState,useEffect } from 'react';
import FormButton from "../components/form_button";
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQItem from '../components/FAQitems';
import "../styles/global.css";



const TrainingPartnerPage = () => {
  const [loading, setLoading] = useState(true);
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
          <FormButton/>
    {/* title head - start */}
    <div className="training-partner-head-container">
      <div className="dark-background">
        <div className="top-banner">
          <i><img src="/images/partners.png" /></i>
          <span className="banner-text-style">Partners</span>
        </div>
        <h1 className="section-heading">Hi Training Partner!</h1>
        <h1 className="section-heading blue-text">
          You have enthusiastic in Training?
        </h1>
        <p className="section-paragraph">
          Where you can share your knowledge and technical skills, connect with
          professionals, enrich careers, and earn a substantial income!
        </p>
      </div>
    </div>

    {/* title head - End  */} 

    {/* Partners - start */} 

    <div className="container my-4">
      <div className="partner-scroll-container">
        <div className="partner-image-container">
          <img
            src="/images/partner_1.png"
            className="img-fluid"
            alt="Image 1"
          />
        </div>
        <div className="partner-image-container">
          <img
            src="/images/partner_2.png"
            className="img-fluid"
            alt="Image 2"
          />
        </div>
        <div className="partner-image-container">
          <img
            src="/images/partner_3.png"
            className="img-fluid"
            alt="Image 3"
          />
        </div>
        <div className="partner-image-container">
          <img
            src="/images/partner_4.png"
            className="img-fluid"
            alt="Image 4"
          />
        </div>
        <div className="partner-image-container">
          <img
            src="/images/partner_5.png"
            className="img-fluid"
            alt="Image 5"
          />
        </div>
        <div className="partner-image-container">
          <img
            src="/images/partner_6.png"
            className="img-fluid"
            alt="Image 6"
          />
        </div>
      </div>
    </div>

    {/* Partners - end */} 

    {/* Explore Talentron Training Community - start */}
    <div className="explore-talentron-background bg-gradient pt-3 pb-3">
      <div className="container position-relative py-5">
        <div className="center-heading">
          <h2 className="headline">Explore Talentron Training Community</h2>
          <h5 className="subtitle grey-text">Connect With Professionals</h5>
        </div>

        <div className="row align-items-center">
          {/* Left Section */} 
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="why-client-overlay-container">
              {/* Main Image */}
              <img
                src="/images/explore talentron.png"
                alt="Client choose us"
                className="main-image"
              />

              {/* bottom-right Image Overlay */} 
              <img
                src="/images/900+.png"
                alt="8890 client"
                className="overlay-top-right"
              />

              {/* top-right Text Overlay */}
              <img
                src="/images/joining.png"
                alt="Join"
                className="overlay-bottom-right"
              />
            </div>
          </div>

          {/* Right Section */} 
          <div className="col-lg-6">
            <h4 className="fw-bold subheading">Build Global Training Community</h4>
            <p className="subtext">
              At Talentron, our constant endeavor is to create a network of
              world-className trainers and industry experts who, in turn, create
              high-quality courseware that resonates with professionals
              globally, across domains such as,
            </p>
            <div className="points-container">
              <div className="point-row">
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" />
                  Full-stack Development.
                </div>
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" /> Dev
                  Ops.
                </div>
              </div>
              <div className="point-row">
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" />
                  Front-end Development.
                </div>
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" /> API
                  Development.
                </div>
              </div>
              <div className="point-row">
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" /> Date
                  Engineering.
                </div>
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" />
                  Database Design.
                </div>
              </div>
              <div className="point-row">
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" />
                  Software Testing.
                </div>
                <div className="point-item">
                  <img src="/images/teenyicons_tick-circle-solid.png" /> Cloud
                  Computing.
                </div>
              </div>
            </div>
            <p className="subtext mt-2">
              The material you produce will be used to train professionals
              worldwide, leading to increased visibility, a larger audience for
              your content, and the opportunity to become part of an elite
              international training community!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-dark bg-gradient text-white pt-3 pb-3">
      <div className="explore-talentron-container">
        <div className="card">
          <div className="card-body">
            <img
              src="/images/professional training.png"
              alt="Icon"
              className="mb-3 ms-5 mt-3 card-body-img"
            />
            <h5 className="card-title me-3">Professional Training</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="/images/collaborate peers.png"
              alt="Icon"
              className="mb-3 ms-5 mt-3"
            />
            <h5 className="card-title me-3">Collaborate Peers</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="/images/continous learning.png"
              alt="Icon"
              className="mb-3 ms-5 mt-3"
            />
            <h5 className="card-title me-3">Continuous Learning</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="/images/adaptation.png"
              alt="Icon"
              className="mb-3 ms-5 mt-3"
            />
            <h5 className="card-title me-3">Adaptation</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="/images/experienced mentors.png"
              alt="Icon"
              className="mb-3 ms-5 mt-3 "
            />
            <h5 className="card-title me-3">Experienced Mentors</h5>
          </div>
        </div>
      </div>
    </div>

    {/* Explore Talentron Training Community - end */}

    {/* Our Compensation - start */} 

    <div className="container text-center my-5">
      <h2 className="headline">Our Compensation</h2>
      <p className="subtitle">Substantial Income</p>
      <div className="row mt-4 justify-content-center">
        {/* Box 1 */}  
        <div className="col-md-4 col-lg-4 d-flex justify-content-center">
          <div className="custom-card">
            <div className="icon-circle mb-3">
              <i className="fas fa-circle"></i>
            </div>
            <h5 className="compensation-title">Recognition</h5>
            <p className="compensation-paragraph">
              Recognizing the
              <b>importance of fair and flexible compensation</b> aligning with
              your training business requirement.
            </p>
          </div>
        </div>
        {/* Box 2 */} 
        <div className="col-md-4 col-lg-4 d-flex justify-content-center">
          <div className="custom-card">
            <div className="icon-circle mb-3">
              <i
                ><img
                  src="/images/mdi_user-star.png"
                  alt="mdi_user-Icon"
                  className="mb-1 me-1"
              /></i>
            </div>
            <h5 className="compensation-title">Utilization</h5>
            <p className="compensation-paragraph">
              At Talentron, we truly appreciate the significance of your time
              and dedication. We wholeheartedly embrace transparency as a
              guiding force that
              <b> defines and shapes our commitment to stakeholders.</b>
            </p>
          </div>
        </div>
        {/* Box 3 */} 
        <div className="col-md-4 col-lg-4 d-flex justify-content-center">
          <div className="custom-card">
            <div className="icon-circle mb-3">
              <i
                ><img
                  src="/images/streamline_bag-dollar-solid.png"
                  alt="bag-dollar-Icon"
                  className="mb-1"
              /></i>
            </div>
            <h5 className="compensation-title">Compensation</h5>
            <p className="compensation-paragraph">
              Through our revenue-sharing model, you have the opportunity to
              <b> earn a substantial income every month.</b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container my-4">
      <div className="custom-section">
        <img
          src="/images/money-bag 2.png"
          alt="Left Icon"
          className="ms-4"
        />
        <p className="below-compensation">
          You have the opportunity to earn a substantial income every month.
        </p>
        <img
          src="/images/money 1.png"
          alt="Right Icon"
          className="me-4"
        />
      </div>
    </div>

    {/* Our Compensation - end */} 

    {/* FAQ-section - start */} 

    
      <FAQItem/>
    
    </main>
)}
</>

    );
};

export default TrainingPartnerPage;

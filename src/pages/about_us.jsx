import React, { useState,useEffect } from "react";
import FormButton from "../components/form_button";
import "../styles/global.css";

const AboutPage = () => {
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
        <div className="about-us-head-container">
          <div className="dark-background">
            <div className="top-banner">
              <i>
                <img src="/images/partners.png" />
              </i>
              <span className="banner-text-style">Who we are</span>
            </div>
            <h1 className="section-heading">About us!</h1>
            <h1 className="Below-section-heading blue-text">Our Talentron</h1>
            <p className="section-paragraph">
            Talentron is a dynamic platform where you can share your knowledge and technical skills, connect with industry professionals, enrich your career, and unlock new opportunities 
            </p>
          </div>
        </div>

        {/* title head - End */}

        {/*Welcome to talentron - start */}

        <div className="container welcometotalentron-container position-relative py-5">
          <div className="center-heading">
            <h2 className="headline">Welcome to Talentron</h2>
            <h5 className="subtitle grey-text">Connect With Professionals</h5>
          </div>

          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-lg-6 mb-4 mb-lg-0 left-img-container">
              <div className="welcome-to-talentron-overlay-container">
                {/* Main Image */}
                <img
                  src="/images/welcometotalentron.png"
                  alt="Client choose us"
                  className="main-image"
                />

                {/* bottom-right Image */}
                <img
                  src="/images/solomon_journey.png"
                  alt="8890 client"
                  className="overlay-bottom-right"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6">
              {/* About Talentron Section */}
              <div className="d-flex align-items-start">
                {/* Text Content */}
                <div className="me-3 founder-text-content">
                  <h4 className="fw-bold subheading">About Talentron</h4>
                  <p className="subtext">
                    Welcome to Talentron, where we're committed to empowering
                    the next generation of technology leaders.
                    <span>
                      <strong>
                        Founded by Solomon, whose extensive 20-year career
                        spanned various domains
                      </strong>
                      , Talentron was born out of a passion for building
                      high-performing teams and unlocking their full potential.
                    </span>
                  </p>
                </div>

                {/* Image Section */}
                <div className="founder-image-section">
                  <img
                    src="/images/founder_img.png"
                    alt="Founder Image"
                    className="img-fluid rounded founder-image"
                  />
                </div>
              </div>
              <div className="mobile-content subtext">
                <p>
                  <strong>
                    Founded by Solomon, whose<span> extensive 20-year</span>{" "}
                    career spanned various domains
                  </strong>
                  , Talentron was born out of a passion for building
                  high-performing teams and unlocking their full potential.
                </p>
              </div>

              {/* LinkedIn Detail Box */}
              <div
                className="bg-light p-3 rounded linkedIn-box shadow-sm mb-3 mt-3 d-flex align-items-center"
              >
                {/* LinkedIn Image */}
                <div className="LinkedIn-img">
                  <img
                    src="/images/linkedin_img.png"
                    alt="LinkedIn Icon"
                  />
                </div>
                {/* LinkedIn Content */}
                <div>
                  <p className="mb-0 LinkedIn-text">
                    Solomon's journey highlighted the time and effort required
                    to find the right talent for specific roles. His experience
                    underscored the importance of minimizing turnover and
                    maximizing workforce efficiency. At Talentron, we understand
                    the challenges of hiring fresh talent.
                  </p>
                </div>
              </div>

              {/* Paragraph Section */}
              <p className="subtext">
                That's why we offer a comprehensive solution, from recruitment
                and technical screening to interviewing, designed to make the
                hiring process efficient and effective.
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center  my-5">
          <div className="row mt-4 justify-content-center">
            {/* Box 1 */}
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex justify-content-center">
              <div className="Empowering_Innovators-custom-card-1">
                <div className="icon-circle-1 mb-3">
                  <i>
                    <img
                      src="/images/mdi_head-lightbulb.png"
                      alt="Head-lightbulb"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Empowering_Innovators-paragraph">
                  We equip participants with{" "}
                  <b>
                    essential skills, knowledge, and a mindset for leadership,
                  </b>{" "}
                  ensuring they excel in their careers and contribute positively
                  to their industries.
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex justify-content-center">
              <div className="Empowering_Innovators-custom-card-2">
                <div className="icon-circle-2 mb-3">
                  <i>
                    <img
                      src="/images/healthicons_i-training-class.png"
                      alt="training-class"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Empowering_Innovators-paragraph">
                  Our holistic approach combines{" "}
                  <b>enhanced training and coaching on emerging technologies</b>{" "}
                  with a focus on personal growth and self-confidence.
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex justify-content-center">
              <div className="Empowering_Innovators-custom-card-3">
                <div className="icon-circle-3 mb-3">
                  <i>
                    <img
                      src="/images/game-icons_anvil-impact.png"
                      alt="anvil-impact"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Empowering_Innovators-paragraph">
                  By nurturing potential and facilitating growth,{" "}
                  <b>
                    Talentron creates a positive impact on individuals' lives
                  </b>{" "}
                  and the organizations they join.
                </p>
              </div>
            </div>
            {/* Box 4 */}
            <div className="col-md-3 col-lg-3 col-sm-12 d-flex justify-content-center">
              <div className="Empowering_Innovators-custom-card-4">
                <div className="icon-circle-4 mb-3">
                  <i>
                    <img
                      src="/images/vaadin_handshake.png"
                      alt="handshake"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Empowering_Innovators-paragraph">
                  <b>Join us on our mission</b> to foster the next generation of
                  technology leaders. Together, we'll elevate your business and
                  empower future innovators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Welcome to talentron - End */}

        {/*Our mission and vision - start*/}

        <div className="our-mission-vision-container">
          <div className="our-mission-vision-dark-background row">
            <div className="col-md-6 col-lg-6 mission-vision-box d-flex justify-content-center">
              <div className="mission-vision-custom-card">
                <div className="mission-vision-icon-circle mb-3">
                  <i>
                    <img
                      src="/images/tabler_target-arrow.png"
                      alt="Customer_Satisfaction"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="mission-vision-title">Our Mission</h5>
                <ul className="list-unstyled">
                  <li className="mission-vision-points mb-2">
                    <img src="/images/white-tick.png" />{" "}
                    <span>
                      Elevate our workforce by offering comprehensive training
                      in the latest technologies and associated ecosystems.
                    </span>
                  </li>
                  <li className="mission-vision-points mb-2">
                    <img src="/images/white-tick.png" />{" "}
                    <span>
                      Empower our team to emerge as dynamic solution providers
                      for global organizations, ensuring they are well-equipped
                      to navigate the challenges of the rapidly evolving
                      business landscape with innovation and expertise.
                    </span>
                  </li>
                  <li className="mission-vision-points mb-2">
                    <img src="/images/white-tick.png" />{" "}
                    <span>
                      Foster the development of essential soft skills and
                      decision-making abilities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mission-vision-box d-flex justify-content-center">
              <div className="mission-vision-custom-card">
                <div className="mission-vision-icon-circle mb-3">
                  <i>
                    <img
                      src="/images/mdi_eye-check.png"
                      alt="Customer_Satisfaction"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="mission-vision-title">Our Vision</h5>
                <ul className="list-unstyled">
                  <li className="mission-vision-points mb-2">
                    <img src="/images/white-tick.png" />{" "}
                    <span>
                      We pledge to create a positive and diverse learning
                      environment for our students that fosters continuous
                      growth, encouraging and motivating them to reach their
                      full potential.
                    </span>
                  </li>
                  <li className="mission-vision-points mb-2">
                    <img src="/images/white-tick.png" />{" "}
                    <span>
                      We are dedicated to delivering unparalleled value to our
                      customers through the highest ethical standards,
                      unwavering transparency, and cutting-edge technology
                      expertise, empowering them to scale their businesses with
                      enduring values.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*Our mission and vision - end*/}

        {/*Founding Values - start */}

        <div className="container text-center my-5">
          <h2 className="headline">Founding Values</h2>
          <p className="subtitle">Skill Development</p>
          <div className="row justify-content-center ">
            {/* Box 1 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Integrity.png"
                      alt="Integrity"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Integrity</h5>
                <p className="Founding_Values-paragraph">
                  We strive to cultivate an environment where integrity is a{" "}
                  <b>
                    key value and a guiding principle that shapes our
                    interactions with clients,
                  </b>{" "}
                  partners, employees, and the communities we serve. Our
                  dedication to integrity is embedded in the fabric of our
                  culture, driving us to consistently deliver excellence and
                  exceed expectations.
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Transparency.png"
                      alt="Transparency"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Transparency</h5>
                <p className="Founding_Values-paragraph">
                  We wholeheartedly embrace transparency as a guiding force that{" "}
                  <b>defines and shapes our commitment to stakeholders.</b> Our
                  goal is to nurture a culture of openness, trust, and
                  accountability in all our endeavors.
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Customer_Satisfaction.png"
                      alt="Customer_Satisfaction"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Customer Satisfaction</h5>
                <p className="Founding_Values-paragraph">
                  We are committed to a customer-centric approach in every
                  aspect of our business. Our team is empowered and{" "}
                  <b>
                    encouraged to go above and beyond to ensure customer
                    delight.
                  </b>{" "}
                  We perceive challenges as opportunities to showcase our
                  commitment to customer satisfaction, turning each experience
                  into a positive and memorable one.
                </p>
              </div>
            </div>
          </div>
          <div className="row founding-values-second-row justify-content-center">
            {/* Box 4 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Equality.png"
                      alt="Equality"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Equality</h5>
                <p className="Founding_Values-paragraph">
                  We are dedicated to dismantling barriers and biases,{" "}
                  <b>
                    ensuring that our commitment to equality is reflected in our
                    hiring practices,
                  </b>{" "}
                  professional development opportunities, and organizational
                  culture. Our aim is to create an environment where diverse
                  voices are not only heard but celebrated, contributing to a
                  rich tapestry of ideas and innovation.
                </p>
              </div>
            </div>
            {/* Box 5 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Community.png"
                      alt="Community"
                      className="mb-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Community</h5>
                <p className="Founding_Values-paragraph">
                  We are committed to actively engaging with and giving back to
                  the communities that surround us.{" "}
                  <b>
                    Through meaningful partnerships, social initiatives, and
                    volunteer efforts,
                  </b>{" "}
                  our goal is to make a positive impact on the lives of those we
                  serve. We extend beyond business to social responsibility,
                  aspiring to be a force for good in the places we call home.
                </p>
              </div>
            </div>
            {/* Box 6 */}
            <div className="col-md-4 col-lg-4 founding-values-box d-flex justify-content-center">
              <div className="Founding_Values-custom-card">
                <div className="icon-circle mb-3">
                  <i>
                    <img
                      src="/images/Another_values.png"
                      alt="Another_values"
                      className="mb-2 ms-1"
                    />
                  </i>
                </div>
                <h5 className="Founding_Values-title">Another values</h5>
                <p className="Founding_Values-paragraph">
                  We wholeheartedly embrace{" "}
                  <b>
                    transparency as a guiding force that defines and shapes our
                    commitment to stakeholders.
                  </b>{" "}
                  Our goal is to nurture a culture of openness, trust, and
                  accountability in all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Founding Values - end */}
      </main>
)}
    </>
  );
};

export default AboutPage;

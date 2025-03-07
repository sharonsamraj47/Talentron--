import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import VideoContainer from "../components/VideoContainer";
import "../styles/global.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function
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

  const handleJobSeekerClick = () => {
    navigate("/contact-us", { state: { userType: "job-seeker" } }); // Navigate to the Contact page
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
  
const slides = [
  {
    id: 1,
    content: (
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 text-start ps-4 text-lg-start">
          <h1 className="fw-bold title-text">Hi Candidate!</h1>
          <h2 className="fw-bolder title-text blue-text">Are you looking for a Job?</h2>
          <p className="title-subtext d-none d-lg-block">
          Let us guide you to your dream career with personalized training and guaranteed placement opportunities.
          </p>
          <button className="btn btn-primary job-seeker-button" onClick={handleJobSeekerClick}>
  Job Seeker
</button>

        </div>
        {/* Right Section (Images) */}
        <div className="col-lg-6 d-none d-lg-flex image-wrapper">
          <div className="image-container">
            <div className="inner_image_overlay">
              <img src="/images/outter_image_1.png" alt="Bottom layer Image 1" className="layer1"/>
              <img src="/images/inner_image_1.png" alt="Image 1" className="layer2"/>
            </div>
            <div className="inner_image_overlay">
              <img src="/images/outter_image_2.png" alt="Bottom layer Image 2" className="layer1"/>
              <img src="/images/inner_image_2.png" alt="Image 2" className="layer2"/>
            </div>
            <div className="inner_image_overlay">
              <img src="/images/outter_image_3.png" alt="Bottom layer Image 2" className="layer1"/>
              <img src="/images/inner_image_3.png" alt="Image 3" className="layer2" />
            </div>
          </div>
        </div>
      </div>
    ),
    background: "url('/images/Rectangle-6651.png') center/cover no-repeat",
  },
  {
    id: 2,
    content: (
      <div className="col-lg-6 text-start ps-4 text-lg-start">
        <h1 className="fw-bold title-text">Hi Candidate!</h1>
        <h2 className="fw-bolder title-text blue-text">Are you looking for a Job?</h2>
        <p className="title-subtext d-none d-lg-block">
        Let us guide you to your dream career with personalized training and guaranteed placement opportunities.
        </p>
        <button className="btn btn-primary job-seeker-button" onClick={handleJobSeekerClick}>
  Job Seeker
</button>

      </div>
    ),
    background: "url('/images/2nd-home-image.png') center/cover no-repeat",
  },
  {
    id: 3,
    content: (
      <div className="row align-items-center">
        {/* Left Section */}
      <div className="col-lg-6 text-start ps-4 text-lg-start">
        <h1 className="fw-bold title-text">Hi Candidate!</h1>
        <h2 className="fw-bolder title-text blue-text">Are you looking for a Job?</h2>
        <p className="title-subtext d-none d-lg-block">
        Let us guide you to your dream career with personalized training and guaranteed placement opportunities.
        </p>
        <button className="btn btn-primary job-seeker-button" onClick={handleJobSeekerClick}>
  Job Seeker
</button>

      </div>
      </div>
      
    ),
    background: "url('/images/third-slide.png') center/cover no-repeat",
  },
];


useEffect(() => {
  // Function to preload images
  const preloadImages = () => {
    slides.forEach((slide) => {
      const match = slide.background.match(/url\(['"]?(.*?)['"]?\)/);
      if (match) {
        const img = new Image();
        img.src = match[1]; // Extracted image URL
      }
    });
  };

  preloadImages(); // Call preload on mount
}, []);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
     {/* job seeker - start */}
     

     <div
  className="below-header text-white pt-2 position-relative"
  style={{ 
    background: isMobile
      ? "url('/images/Rectangle-6651.png') center/cover no-repeat"
      : slides[currentSlide].background 
  }}
>
  {/* Left Arrow Button - Always Visible */}
  <button className="slider-arrow left-arrow" style={{display:'flex',justifyContent:'center',alignItems:'center'}}onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}>
    <FaArrowLeft />
  </button>

  <div className="container py-5">
    <div className="row align-items-center">{slides[currentSlide].content}</div>

    {/* Mobile Images (Different Image for Each Slide) */}
    <div className="row d-lg-none text-center mt-4 mobile-image-container">
      {currentSlide === 0 && (
        <img src="/images/mobile_image_job_seeker.png" alt="Mobile Image 1" className="img-fluid mx-auto" />
      )}
      {currentSlide === 1 && (
        <img src="/images/mobile_image_2.png" alt="Mobile Image 2" className="img-fluid mx-auto" />
      )}
      {currentSlide === 2 && (
        <img src="/images/mobile_image_3.png" alt="Mobile Image 3" className="img-fluid mx-auto" />
      )}
    </div>
  </div>

  {/* Right Arrow Button - Always Visible */}
  <button className="slider-arrow right-arrow" style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}>
    <FaArrowRight />
  </button>

  {/* Indicators (Always Visible) */}
  <div className="position-absolute start-50 translate-middle-x indicators-css" >
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentSlide ? "active-dot" : "inactive-dot"}`}
        onClick={() => setCurrentSlide(index)}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: index === currentSlide ? "white" : "transparent",
          cursor: "pointer"
        }}
      ></span>
    ))}
  </div>

  <div className="custom-container container bg-white mb-0 mt-0">
      <div className="scrollable-row scrollable-row2 ms-2">
        <button className="card" onClick={() => goToTrainingPrograms("fullstack")} style={{ cursor: "pointer" }}> 
          <img src="/images/full_stack.png" alt="Full Stack Icon" />
          <h5 className="scrollable-text pt-1">Full Stack Development</h5>
        </button>
        <button className="card" onClick={() => goToTrainingPrograms("DataEngineering")} style={{ cursor: "pointer" }}> 
          <img src="/images/data.png" alt="Data Engineering Icon" />
          <h5 className="scrollable-text pt-1">Data Engineering</h5>
        </button>
        <button className="card" onClick={() => goToTrainingPrograms("frontend")} style={{ cursor: "pointer" }}> 
          <img src="/images/front_end.png" alt="Front-end Icon" />
          <h5 className="scrollable-text pt-1">Front-end Development</h5>
        </button>
        <button className="card" onClick={() => goToTrainingPrograms("SoftwareTesting")} style={{ cursor: "pointer" }}> 
          <img src="/images/testing.png" alt="Software Testing Icon" />
          <h5 className="scrollable-text pt-1">Software Testing</h5>
        </button>
        <button className="card" onClick={() => goToTrainingPrograms("more")} style={{ cursor: "pointer" }}> 
          <div className="circle-button">
            <i className="bi bi-chevron-right"></i>
          </div>
          <h5 className="scrollable-text pt-1">More Events</h5>
        </button>
      </div>
    </div>
      </div>

    {/*  job seeker - End */} 

    {/*  Why Client Choose US - Start */} 

    <div className="container position-relative py-5">
      <div className="center-heading">
        <h2 className="headline">Why Client Choose Us</h2>
        <h5 className="subtitle grey-text">Skill Development</h5>
      </div>

      <div className="row align-items-center">
        {/*  Left Section */} 
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="why-client-overlay-container">
            {/*  Main Image */} 
            <img
              src="/images/why client choose us.png"
              alt="Client choose us"
              className="main-image"
            />

            {/*  Top-right Image Overlay */} 
            <img
              src="/images/8890 client.png"
              alt="8890 client"
              className="overlay-top-right"
            />

          {/*  Bottom-right Text Overlay */} 
            <img
              src="/images/joining.png"
              alt="Join"
              className="overlay-bottom-right"
            />
          </div>
        </div>

        {/*  Right Section */} 
        <div className="col-lg-6">
          <h4 className="fw-bold subheading">Talentron - Job portal</h4>
          <p className="subtext">
            Welcome to Talentron, where we're committed to empowering the next
            generation of technology leaders. Founded by Solomon, whose
            extensive 20-year career spanned various domains, Talentron was born
            out of a passion for building high-performing teams and unlocking
            their full potential.
          </p>
          <ul className="list-unstyled">
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> Hiring -
              Better Decision Making.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> Measure
              Skill Development.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> Increase
              Revenue Growth.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> High
              Return on Investment.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> Saves
              Companies Productive Time.
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/*  Why Client Choose US - End */} 

    {/*  Talent Hiring Process - Start */} 

    <div className="footer-bottom bg-dark bg-gradient text-white pt-2 pb-4">
      <div className="container text-center mt-5">
        <h2 className="headline white-text">Talent Hiring Process</h2>
        <p className="subtitle white-text">Placement in Premium Companies</p>

        <div className="process-container">
          <div className="process-step">
            <img src="/images/talent01.png" alt="Step 1" />
            <p className="hiring-process-index">01</p>
            <p className="process-text">Get Hiring Plan</p>
            <p className="process-text">from Clients</p>
          </div>

          <img className="arrow" src="/images/Arrow 33.png" alt="arrow" />

          <div className="process-step">
            <img src="/images/talent02.png" alt="Step 2" />
            <p className="hiring-process-index">02</p>
            <p className="process-text">
              Frequent <br />
              Collaboration
            </p>
          </div>

          <img className="arrow" src="/images/Arrow 33.png" alt="arrow" />

          <div className="process-step">
            <img src="/images/talent03.png" alt="Step 3" />
            <p className="hiring-process-index">03</p>
            <p className="process-text">Initial Screening &</p>
            <p className="process-text">Facilitating Interview</p>
          </div>

          <img className="arrow" src="/images/Arrow 33.png" alt="arrow" />

          <div className="process-step">
            <img src="/images/talent04.png" alt="Step 4" />
            <p className="hiring-process-index">04</p>
            <p className="process-text">Get Commitment</p>
            <p className="process-text">from Candidate</p>
          </div>

          <img className="arrow" src="/images/Arrow 33.png" alt="arrow" />

          <div className="process-step">
            <img src="/images/talent05.png" alt="Step 5" />
            <p className="hiring-process-index">05</p>
            <p className="process-text pb-3">Hire Candidate</p>
          </div>

          <img className="arrow" src="/images/Arrow 33.png" alt="arrow" />

          <div className="process-step">
            <img src="/images/talent06.png" alt="Step 6" />
            <p className="hiring-process-index">06</p>
            <p className="process-text">Onboarding</p>
            <p className="process-text">Process</p>
          </div>
        </div>
      </div>
    </div>

    {/*  End */}

    {/*  Video container - start */} 

    <VideoContainer />

    {/*  Video container - End */} 

    {/*  Our training Process - start */} 

    <div className="training-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold headline">Our Training Process</h2>
        <p className="subtitle grey-text">Professional Growth</p>

        <div className="training-container position-relative pt-2">
          <div className="training-wrapper d-flex align-items-center">
          <div className="training-process">
  <img src="/images/training01.png" alt="Step 1" />
  <div className="line-circle-start mt-1">
    <div className="circle"></div>
  </div>
  <p className="below-line-number pt-4">01</p>
  <div className="rectangle-arrow">
    <p className="mt-3 me-2">1-2 Weeks</p>
  </div>
  <p className="training-process">Assess</p>
  <p className="pb-0 training-subpoints">
    Assess Training needs<br />Prepare Resources<br />Prepare Resources
  </p>
</div>



            <div className="training-process">
              <img src="/images/training02.png" alt="Step 2" />
              <div className="line-circle mt-1">
                <div className="circle"></div>
              </div>
              <p className="below-line-number pt-4">02</p>
              <div className="rectangle-arrow">
              <p className="mt-3 me-2">2-3 Weeks</p>
              </div>
              <p className="training-process">Training Readiness</p>
              <p className="pb-0 training-subpoints">
                Candidate Screening<br />Get Commitment<br />Design Training
                Program
              </p>
            </div>

            <div className="training-process">
              <img src="/images/training03.png" alt="Step 3" />
              <div className="line-circle mt-1">
                <div className="circle"></div>
              </div>
              <p className="below-line-number pt-4">03</p>
              <div className="rectangle-arrow">
              <p className="mt-3 me-2">2-3 Months</p>
              </div>
              <p className="training-process">Delivery Training</p>
              <p className="pb-0 training-subpoints">
                Intense Training<br />Facilitate Cloud Eco-System<br />Periodic
                Assessment
              </p>
            </div>

            <div className="training-process">
              <img src="/images/training04.png" alt="Step 4" />
              <div className="line-circle mt-1">
                <div className="circle"></div>
              </div>
              <p className="below-line-number pt-4">04</p>
              <div className="rectangle-arrow">
              <p className="mt-3 me-2">1-2 Months</p>
              </div>
              <p className="training-process">Real-Time Projects</p>
              <p className="pb-0 training-subpoints">
                Provide Technical Guidance<br />Monitor Progress<br />Periodic
                Assessment
              </p>
            </div>

            <div className="training-process">
              <img src="/images/training05.png" alt="Step 5" />
              <div className="line-circle mt-1">
                <div className="circle"></div>
              </div>
              <p className="below-line-number pt-4">05</p>
              <div className="rectangle-arrow">
              <p className="mt-3 me-2">1-2 Weeks</p>
              </div>
              <p className="training-process">VAT & Get Certified</p>
              <p className="pb-0 training-subpoints">
                Soft Skill Training<br />Corporate Culture Training<br />Mentor
                through Experts
              </p>
            </div>

            <div className="training-process">
              <img src="/images/training06.png" alt="Step 6" />
              <div className="line-circle-end mt-1">
                <div className="circle"></div>
              </div>
              <p className="below-line-number pt-4">06</p>
              <div className="rectangle-arrow">
              <p className="mt-3 me-2">1-3 Months</p>
             </div>
              <p className="training-process">Engage Partners</p>
              <p className="pb-0 training-subpoints">
                Conduct Assessments<br />Arrange Interviews<br />Onboard
                Candidate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  Our training Process - end */} 

   {/*  Why choose our training - start */} 

    <div className="container py-5">
      {/*  Centered Heading Section */} 
      <div className="center-heading">
        <h2 className="headline">Why Choose Our Training</h2>
        <h5 className="subtitle grey-text">Working on Real Time Projects</h5>
      </div>

      <div className="row align-items-center">
        {/*  Left Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h4 className="fw-bold subheading">Talentron - Our Training</h4>
          <p className="subtext">
            At Talentron, we believe in providing a personalized training
            experience to each individual. We offer special attention and
            mentorship to help you sharpen your technical skills, provide career
            guidance, and offer live project exposure to emerging technologies.
          </p>
          <ul className="list-unstyled">
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" />
              &nbsp;Personalized Training Experience.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> Real Time
              Projects.
            </li>
            <li className="tick-mark points mb-2">
              <img src="/images/teenyicons_tick-circle-solid.png" /> 100%
              Guaranteed Job.
            </li>
          </ul>
        </div>

        {/*  Right Section */} 
        <div className="col-lg-6">
          <div className="why-our-training-overlay-container">
            <img src="/images/why choose our trainging.png" alt="Laptop" />
            <img src="/images/165+.png" alt="165+ Projects" />
          </div>
        </div>
      </div>
    </div>

   {/*  Why choose our training - End */} 

  </main>
)}
  </>
  );
};

export default Home;

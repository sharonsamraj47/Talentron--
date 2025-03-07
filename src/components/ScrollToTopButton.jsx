import React, { useEffect } from "react";
import '../styles/global.css';


const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    const handleScroll = () => {
      // Calculate 8% of the page height
      const scrollThreshold = document.documentElement.scrollHeight * 0.08;

      // Check the current scroll position
      if (window.scrollY > scrollThreshold) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-to-top-btn"
      id="scrollToTopBtn"
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;

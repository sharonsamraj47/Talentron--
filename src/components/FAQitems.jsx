import React, { useState } from "react";
import "../styles/global.css";

// The reusable FAQItem component
const FAQItem = ({ question, answer, index, toggleCollapse, collapsed }) => {
  return (
    <div className="accordion-item">
      <h2 className="faq-heading" id={`heading${index}`}>
        <button
          onClick={() => toggleCollapse(index)}
          className={`accordion-button ${collapsed ? "collapsed" : ""} faq-toggle`}
        >
          {question}
          {!collapsed && (
            <div className="faq-answer-inside" style={{ display: collapsed[index] ? 'none' : 'block' }}>
              {answer}
            </div>
          )}
        </button>
      </h2>
    </div>
  );
};

// FAQList component to manage state and render the list
const FAQList = () => {
  const [collapsed, setCollapsed] = useState([true, true, true, true, true]);

  const toggleCollapse = (index) => {
    setCollapsed((prev) => {
      const newCollapsed = [...prev];
      newCollapsed[index] = !newCollapsed[index];
      return newCollapsed;
    });
  };

  const faqData = [
    {
      question: "What qualifications must one meet to enrol in the training program?",
      answer: "You should have the basic knowledge of any programming language and an attitude of passionate learning."
    },
    {
      question: "What is the course fee for the training program?",
      answer: "The course fee varies depending on the chosen program. Please check our website for the latest pricing details."
    },
    {
      question: "What courses are available for the upcoming training program?",
      answer: "The courses include Full-Stack Development, Data Science, Cybersecurity, and more."
    },
    {
      question: "What teaching methodology is being employed?",
      answer: "The teaching methodology includes hands-on practice, live projects, and mentorship from industry experts."
    },
    {
      question: "Can a homemaker with an extended career break attend the training program?",
      answer: "Absolutely! Our training program is designed for individuals looking to re-enter the workforce with industry-relevant skills."
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="headline d-flex justify-content-center">Frequently Asked Questions</h2>
      <h5 className="subtitle d-flex justify-content-center grey-text mb-5">Working on Real time projects</h5>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            toggleCollapse={toggleCollapse}
            collapsed={collapsed[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;

import React, { useState, useEffect } from "react";
import { Tab, Nav, Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TabView = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("fullstack");
  
  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setActiveKey(location.state.activeTab);
    }
  }, [location]);

  const handleTabClick = (key) => {
    setActiveKey(key);
  };
  
  const tabs = [
    {
      key: "fullstack",
      title: (
        <div
          className={`tabComponent-custom-card-1 ${
            activeKey === "fullstack" ? "active-tab" : ""
          }`}
          onClick={() => handleTabClick("fullstack")}
        >
          <div className="tabComponent-icon-circle-1">
            <i>
              <img
                src="/images/fluent_window-dev-edit-16-filled.png"
                alt="Head-lightbulb"
                className="mb-1"
              />
            </i>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="tabComponent-text">Full-stack<br/>Development</p>
            <i className="tabComponent-arrow-icon">&#8594;</i>
          </div>
        </div>
      ),
      color:"#EAF7FF",
    },
    { 
      key: "frontend", 
      title: (
        <div
          className={`tabComponent-custom-card-2 ${
            activeKey === "frontend" ? "active-tab" : ""
          }`}
          onClick={() => handleTabClick("frontend")}
        >
          <div className="tabComponent-icon-circle-2">
            <i>
              <img
                src="/images/akar-icons_html-fill.png"
                alt="training-class"
                className="mb-1"
              />
            </i>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="tabComponent-text">Front-end<br/>Development</p>
            <i className="tabComponent-arrow-icon">&#8594;</i>
          </div>
        </div>
      ),
      color:"#FFEAEB",
    },
    { 
      key: "DataEngineering", 
      title: (
        <div
          className={`tabComponent-custom-card-3 ${
            activeKey === "DataEngineering" ? "active-tab" : ""
          }`}
          onClick={() => handleTabClick("DataEngineering")}
        >
          <div className="tabComponent-icon-circle-3">
            <i>
              <img
                src="/images/bxs_data.png"
                alt="anvil-impact"
                className="mb-1"
              />
            </i>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="tabComponent-text">Data<br/>Engineering</p>
            <i className="tabComponent-arrow-icon">&#8594;</i>
          </div>
        </div>
      ),
      color:"#FFF2E8"
    },
    { 
      key: "SoftwareTesting", 
      title: (
        <div
          className={`tabComponent-custom-card-4 ${
            activeKey === "SoftwareTesting" ? "active-tab" : ""
          }`}
          onClick={() => handleTabClick("SoftwareTesting")}
        >
          <div className="tabComponent-icon-circle-4">
            <i>
              <img
                src="/images/grommet-icons_system.png"
                alt="handshake"
                className="mb-1"
              />
            </i>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="tabComponent-text">Software<br/>Testing</p>
            <i className="tabComponent-arrow-icon">&#8594;</i>
          </div>
        </div>
      ),
      color:"#F6FFCB",
    },
  ];

  const fullstackContent = {
    firstColumn: [
      {
        title: "Front-End Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "/images/front-end-tech.png",
      },
    ],
    secondColumn: [
      {
        title: "Back-end Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/back-end-tech.png",
      },
    ],
    thirdColumn: [{
      title: "Deployment and Hosting",
      tickMark: "/images/teenyicons_tick-circle-solid.png",
      items: [
        "Cloud platforms (AWS, Azure)",
        "Containerization (Docker)",
        "Server-side frameworks (Express.js / Django)",
      ],
      image: "/images/deploymentAndHost.png",
    },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };

  const frontEndContent = {
    firstColumn: [
      {
        title: "Front-End Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "/images/front-end-tech.png",
      },
    ],
    secondColumn: [{
      title: "Back-end Technologies",
      tickMark: "/images/teenyicons_tick-circle-solid.png",
      items: [
        "Server-side programming (Node.js / Python)",
        "Database management (MySQL / PostgreSQL)",
        "Server-side frameworks (Express.js / Django)",
      ],
      image: "/images/back-end-tech.png",
    },
    ],
    thirdColumn: [
      {
        title: "Deployment and Hosting",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  
  const DataEngineeringContent = {
    firstColumn: [
      {
        title: "Front-End Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "/images/front-end-tech.png",
      },
    ],
    secondColumn: [
      {
        title: "Back-end Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/back-end-tech.png",
      },
    ],
    thirdColumn: [
      {
        title: "Deployment and Hosting",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  
  const SoftwareTestingContent = {
    firstColumn: [
      {
        title: "Front-End Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "/images/front-end-tech.png",
      },
    ],
    secondColumn: [
      {
        title: "Back-end Technologies",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/back-end-tech.png",
      },
    ],
    thirdColumn: [
      {
        title: "Deployment and Hosting",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "/images/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  
  return (
    <Container className="mt-3">
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Nav variant="tabs">
          {tabs.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link eventKey={tab.key} className={`nav-tab-${tab.key}`}>{tab.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content className="justify-content-center">
          <Tab.Pane eventKey="fullstack" className={`fullstack-tabView ${activeKey === "fullstack" ? "active-pane" : ""}`}>
            <Row className="justify-content-center">
              {[...fullstackContent.firstColumn, ...fullstackContent.secondColumn, ...fullstackContent.thirdColumn].map((content, i) => (
                <Col lg={3} md={6} sm={12} key={i} className="mb-3 mt-3 d-flex justify-content-center">
                  <div className="fullstack-tabView-box">
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points">
                          <img src={content.tickMark} alt="tickMark" /> {item}
                        </li>
                      ))}
                    </ul>
                    {content.title === "Front-End Technologies" && (
                      <button className="register-button mt-5">Register now →</button>
                    )}
                  </div>
                </Col>
              ))}

              <Col lg={3} md={6} sm={12} className="mt-3 d-flex justify-content-center">
                <div className="fullstack-lastColumn">
                  {fullstackContent.lastColumn.map((content, i) => (
                    <div className="p-2 mb-2 fullstack-tabView-box" key={i}>
                      <h6 className="tabComponent-title">{content.title}</h6>
                      <ul className="list-unstyled">
                        {content.items.map((item, index) => (
                          <li key={index} className="tabComponent-points">
                            <img src={content.tickMark} alt="tickMark" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Tab.Pane>
          
          <Tab.Pane eventKey="frontend" className={`frontend-tabView ${activeKey === "frontend" ? "active-pane" : ""}`}>
            <Row className="justify-content-center">
              {[...frontEndContent.firstColumn, ...frontEndContent.secondColumn, ...frontEndContent.thirdColumn].map((content, i) => (
                <Col lg={3} md={6} sm={12} key={i} className="mb-3 mt-3 d-flex justify-content-center">
                  <div className="frontend-tabView-box">
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points">
                          <img src={content.tickMark} alt="tickMark" /> {item}
                        </li>
                      ))}
                    </ul>
                    {content.title === "Front-End Technologies" && (
                      <button className="register-button mt-5">Register now →</button>
                    )}
                  </div>
                </Col>
              ))}

              <Col lg={3} md={6} sm={12} className="mt-3 d-flex justify-content-center">
                <div className="frontend-lastColumn">
                  {frontEndContent.lastColumn.map((content, i) => (
                    <div className="p-2 mb-2 frontend-tabView-box" key={i}>
                      <h6 className="tabComponent-title">{content.title}</h6>
                      <ul className="list-unstyled">
                        {content.items.map((item, index) => (
                          <li key={index} className="tabComponent-points">
                            <img src={content.tickMark} alt="tickMark" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Tab.Pane>
          
          <Tab.Pane eventKey="DataEngineering" className={`DataEngineering-tabView ${activeKey === "DataEngineering" ? "active-pane" : ""}`}>
            <Row className="justify-content-center">
              {[...DataEngineeringContent.firstColumn, ...DataEngineeringContent.secondColumn, ...DataEngineeringContent.thirdColumn].map((content, i) => (
                <Col lg={3} md={6} sm={12} key={i} className="mb-3 mt-3 d-flex justify-content-center">
                  <div className="DataEngineering-tabView-box">
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points">
                          <img src={content.tickMark} alt="tickMark" /> {item}
                        </li>
                      ))}
                    </ul>
                    {content.title === "Front-End Technologies" && (
                      <button className="register-button mt-5">Register now →</button>
                    )}
                  </div>
                </Col>
              ))}

              <Col lg={3} md={6} sm={12} className="mt-3 d-flex justify-content-center">
                <div className="DataEngineering-lastColumn">
                  {DataEngineeringContent.lastColumn.map((content, i) => (
                    <div className="p-2 mb-2 DataEngineering-tabView-box" key={i}>
                      <h6 className="tabComponent-title">{content.title}</h6>
                      <ul className="list-unstyled">
                        {content.items.map((item, index) => (
                          <li key={index} className="tabComponent-points">
                            <img src={content.tickMark} alt="tickMark" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Tab.Pane>
          
          <Tab.Pane eventKey="SoftwareTesting" className={`SoftwareTesting-tabView ${activeKey === "SoftwareTesting" ? "active-pane" : ""}`}>
            <Row className="justify-content-center">
              {[...SoftwareTestingContent.firstColumn, ...SoftwareTestingContent.secondColumn, ...SoftwareTestingContent.thirdColumn].map((content, i) => (
                <Col lg={3} md={6} sm={12} key={i} className="mb-3 mt-3 d-flex justify-content-center">
                  <div className="SoftwareTesting-tabView-box">
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points">
                          <img src={content.tickMark} alt="tickMark" /> {item}
                        </li>
                      ))}
                    </ul>
                    {content.title === "Front-End Technologies" && (
                      <button className="register-button mt-5">Register now →</button>
                    )}
                  </div>
                </Col>
              ))}

              <Col lg={3} md={6} sm={12} className="mt-3 d-flex justify-content-center">
                <div className="SoftwareTesting-lastColumn">
                  {SoftwareTestingContent.lastColumn.map((content, i) => (
                    <div className="p-2 mb-2 SoftwareTesting-tabView-box" key={i}>
                      <h6 className="tabComponent-title">{content.title}</h6>
                      <ul className="list-unstyled">
                        {content.items.map((item, index) => (
                          <li key={index} className="tabComponent-points">
                            <img src={content.tickMark} alt="tickMark" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default TabView;
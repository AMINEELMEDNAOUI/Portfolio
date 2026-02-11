import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t("about.title")} <strong className="purple">{t("about.im")}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            {t("about.skillset")} <strong className="purple">{t("about.skillset_strong")}</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t("about.tools_strong")}</strong> {t("about.tools_text")}
          </h1>

          <Toolstack />

          <div className="github-wrap-container">
            <Github />
          </div>
        </Container>
      </Container>
      <style>{`
 
  .github-wrap-container .react-activity-calendar {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

 
  .github-wrap-container .react-activity-calendar__footer {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important; /* Force l'écartement gauche/droite */
    align-items: center !important;
    width: 100% !important;
    padding-top: 15px !important;
    
  }

  
  .github-wrap-container .react-activity-calendar__legend {
    display: flex !important;
    align-items: center !important;
    gap: 5px !important;
  }

  
  @media (max-width: 600px) {
    .github-wrap-container .react-activity-calendar__footer {
      flex-direction: column !important;
      gap: 10px !important;
      font-size: 14px !important;
    }
  }
    

 
  .github-wrap-container svg {
    max-width: 100% !important;
    height: auto !important;
  }

  .about-section p, .about-card p {
    text-align: left !important;
    word-spacing: normal !important;
  }

  @media (max-width: 767px) {
    .about-section {
      overflow-x: hidden !important;
      font-size: 16px !important;
    }
  }
`}</style>
    </>
  );
}

export default About;
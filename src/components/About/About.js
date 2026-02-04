import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next"; // 1. Import du hook

function About() {
  const { t } = useTranslation(); // 2. Initialisation

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
  /* On cible le conteneur généré par la bibliothèque GitHub Calendar */
  .github-wrap-container .react-activity-calendar {
    display: flex !important;
    flex-wrap: wrap !important; /* Force le retour à la ligne */
    justify-content: center !important;
  }

  /* On s'assure que les graphiques internes ne dépassent pas */
  .github-wrap-container svg {
    max-width: 100% !important;
    height: auto !important;
  }

  /* Fix pour le texte étiré sur mobile */
  .about-section p, .about-card p {
    text-align: left !important;
    word-spacing: normal !important;
  }

  @media (max-width: 767px) {
    .about-section {
      overflow-x: hidden !important; /* Empêche tout scroll horizontal parasite */
    }
  }
`}</style>
    </>
  );
}

export default About;
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

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
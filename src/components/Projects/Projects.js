import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "react-i18next";

// Imports des images
import academy from "../../Assets/Projects/academy.png";
import so from "../../Assets/Projects/so.png";
import pptpres from "../../Assets/Projects/pptpres.png";
import pointage from "../../Assets/Projects/pointage.png";
import face from "../../Assets/Projects/face.png";
import bpmn from "../../Assets/Projects/BPMN.png";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.title")} <strong className="purple">{t("projects.title_purple")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.subtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpmn}
              isBlog={false}
              title={t("projects.p1_title")}
              description={t("projects.p1_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/Processus-achat-BonitaSoft"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pointage}
              isBlog={false}
              title={t("projects.p2_title")}
              description={t("projects.p2_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/Pointage"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={academy}
              isBlog={false}
              title={t("projects.p3_title")}
              description={t("projects.p3_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/BrimMed-Academy"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pptpres}
              isBlog={false}
              title={t("projects.p4_title")}
              description={t("projects.p4_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/PPT-Presentation-controlled-by-hand-gesture"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title={t("projects.p5_title")}
              description={t("projects.p5_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/Face-recognition"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={so}
              isBlog={false}
              title={t("projects.p6_title")}
              description={t("projects.p6_desc")}
              ghLink="https://github.com/AMINEELMEDNAOUI/Smart-Office-Iot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
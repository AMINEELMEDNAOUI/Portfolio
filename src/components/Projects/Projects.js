import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import academy from "../../Assets/Projects/academy.png";
import so from "../../Assets/Projects/so.png";
import pptpres from "../../Assets/Projects/pptpres.png";
import pointage from "../../Assets/Projects/pointage.png";
import face from "../../Assets/Projects/face.png";
import bpmn from "../../Assets/Projects/BPMN.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpmn}
              isBlog={false}
              title="Wavesoft"
              description="Designed and implemented an automated procurement solution by integrating BonitaSoft BPM with WaveSoft ERP to modernize legacy workflow. By replacing the outdated VDoc system with BPMN-modeled processes and bespoke user interfaces, I streamlined the purchasing lifecycle and enhanced operational efficiency. The solution features a centralized web application that provides real-time tracking for purchase requests, quote management, and stock releases, ensuring a transparent and data-driven supply chain."
              ghLink="https://github.com/AMINEELMEDNAOUI/Processus-achat-BonitaSoft"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pointage}
              isBlog={false}
              title="RemoteCheck"
              description="Designed and implemented a specialized web interface using the MERN stack (MySQL, Express, React, and Node.js) to modernize employee attendance tracking across remote operational sites. By collaborating with a cross-functional team, I engineered a robust management system that replaced manual reporting with a streamlined, digital workflow. The final solution provides real-time oversight of workforce presence, significantly enhancing data accuracy and operational transparency while demonstrating a comprehensive command of full-stack development and database integration."
              ghLink="https://github.com/AMINEELMEDNAOUI/Pointage"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={academy}
              isBlog={false}
              title="Brimed Academy"
              description="Designed and developed online Education Plateforme a comprehensive management ecosystem for a tutoring center, leveraging a modern full-stack architecture with ReactJS and Spring Boot. I engineered a centralized platform that digitizes the entire academic workflow, from student and teacher onboarding to automated course scheduling and payment processing. By integrating a secure backend with a responsive user interface, the solution eliminated administrative bottlenecks, providing real-time data synchronization and a seamless experience for both staff and educators."
              ghLink="https://github.com/AMINEELMEDNAOUI/BrimMed-Academy"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pptpres}
              isBlog={false}
              title="PPT-Presentation-controlled-by-hand-gesture"
              description="Engineered an innovative gesture-controlled presentation system that leverages Computer Vision and Machine Learning to enable touchless navigation. By implementing a neural network to recognize and classify hand gestures in real time, I developed a seamless interface that translates physical movements—such as pointing or drawing—into system commands. This solution integrates sophisticated gesture-detection algorithms to replace traditional input devices, offering a more intuitive and interactive user experience for digital presentations."
              ghLink="https://github.com/AMINEELMEDNAOUI/PPT-Presentation-controlled-by-hand-gesture"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition System for Attendance Management"
              description="Designed and developed an intelligent biometric attendance solution to automate student check-ins and streamline classroom management. By replacing traditional roll calls with real-time facial recognition, the system provides a contactless and fraud-proof method for verifying student identity via live video feeds. I implemented a robust time-slotting architecture that aligns with academic schedules, allowing for precise tracking across multiple lecture periods while integrating a validation layer to prevent duplicate entries. This centralized dashboard offers educators an instantaneous, data-driven overview of student punctuality and attendance patterns, significantly enhancing administrative efficiency and data accuracy."
              ghLink="https://github.com/AMINEELMEDNAOUI/Face-recognition"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={so}
              isBlog={false}
              title="Smart Office Iot System"
              description="Engineered a comprehensive IoT ecosystem designed to optimize environmental conditions and operational efficiency within modern workspaces. By integrating a network of sensors and actuators, I developed autonomous control systems for lighting, climate (temperature and humidity), and blinds management to maximize energy savings while enhancing user comfort. The system also features a proactive safety layer with real-time gas detection and intelligent data modeling. This project involved extensive research into hardware selection and communication protocols to create robust algorithms that demonstrate the tangible impact of smart technology on workspace productivity, occupant safety, and environmental sustainability."
              ghLink="https://github.com/AMINEELMEDNAOUI/Smart-Office-Iot"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

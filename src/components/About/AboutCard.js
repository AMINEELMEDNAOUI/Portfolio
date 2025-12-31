import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Amine El Mednaoui</span>{" "}
            from <span className="purple">Casablanca, Morocco</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Fullstack Development Intern</span> at{" "}
            <span className="purple">DSI Conseil & Services </span>.
            <br />
            I hold a Master's degree in <span className="purple">Big Data and Internet of Things</span> from{" "}
            <span className="purple">ENSAM Casablanca</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do!"{" "}
          </p>
          <footer className="blockquote-footer">Amine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
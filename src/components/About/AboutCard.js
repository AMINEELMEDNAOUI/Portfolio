import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next"; // Import du hook

function AboutCard() {
  const { t } = useTranslation(); // Initialisation

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.hi")} <span className="purple">Amine El Mednaoui</span>{" "}
            {t("aboutCard.from")} <span className="purple">Casablanca, Morocco</span>.
            <br />
            {t("aboutCard.working")}{" "}
            <span className="purple">{t("nav.fullstack_role", "Fullstack Development Intern")}</span> {t("aboutCard.at")}{" "}
            <span className="purple">DSI Conseil & Services </span>.
            <br />
            {t("aboutCard.degree")} <span className="purple">Big Data and Internet of Things</span> {t("aboutCard.school")}{" "}
            <span className="purple">ENSAM Casablanca</span>.
            <br />
            <br />
            {t("aboutCard.hobbies_title")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.hobby_1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.hobby_2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.hobby_3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t("aboutCard.quote")}"{" "}
          </p>
          <footer className="blockquote-footer">Amine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AMINE_EL_MEDNAOUI.jpg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next"; // 1. Import

function Home2() {
  const { t } = useTranslation(); // 2. Initialisation

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.title")} <span className="purple"> {t("home2.title_purple")} </span> {t("home2.title_end")}
            </h1>
            <p className="home-about-body">
              {t("home2.body_1")}
              <br />
              <br />
              {t("home2.proficient")}
              <i>
                <b className="purple">
                  {" "}
                  JavaScript , NodeJS , Java , C++ , Python , et ReactJS.{" "}
                </b>
              </i>
              {t("home2.stack_end")}
              <br />
              <br />
              {t("home2.interests")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.interest_web")}{" "}
                </b>
              </i>
              {t("home2.designing")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.interest_bpm")}{" "}
                </b>
              </i>
              {t("home2.exploring")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.interest_ai")}{" "}
                </b>
              </i>
              <br />
              <br />
              {t("home2.build_with")}
              <b className="purple"> Node.js </b> {t("home2.and_modern")}{" "}
              <i>
                <b className="purple">React.js</b> et{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle mt-5 ms-0 ms-md-5" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
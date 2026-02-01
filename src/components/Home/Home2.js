import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AMINE_EL_MEDNAOUI.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Software Engineer graduate with a Master's degree in Big Data and Internet of Things from the National School of Arts and Crafts of Casablanca (ENSAM), passionate about transforming concepts into reliable and scalable solutions. Possessing dual expertise in Full-Stack Development and Big Data & IoT Systems, I specialize in building high-performance applications, from system architecture to intuitive user experiences. My goal is to design and integrate efficient business process management systems, ensuring operational effectiveness and contributing to key organizational objectives.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript , NodeJS , Java , C++ , Python , et ReactJS.{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, {" "}
                </b>
              </i>
              designing Efficient
              <i>
                <b className="purple">
                  {" "}
                  Business Process Solutions (BPM/ERP), {" "}
                </b>
              </i>
              and exploring
              <i>
                <b className="purple">
                  {" "}
                  AI, Big Data & IoT Systems. {" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
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

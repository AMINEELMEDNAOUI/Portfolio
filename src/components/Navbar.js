import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import logo from "../Assets/logo.png";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiOutlineMail,
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";
import "../App.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  // Gère le changement de couleur au scroll
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    updateExpanded(false);
  };


  const currentFlag = i18n.language.startsWith("fr") ? "FR" : "GB";

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/Portfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("nav.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> {t("nav.contact")}
              </Nav.Link>
            </Nav.Item>



            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/AMINEELMEDNAOUI/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <NavDropdown
              title={
                <span className="lang-menu-title">
                  <Flag code={currentFlag} height="14" style={{ marginRight: "8px", borderRadius: "2px" }} />
                  {currentFlag === "FR" ? "FR" : "EN"}
                </span>
              }
              id="language-dropdown"
              className="language-dropdown-container"
            >
              <NavDropdown.Item onClick={() => changeLanguage("en")} className="d-flex align-items-center">
                <Flag code="GB" height="14" style={{ marginRight: "10px", borderRadius: "2px" }} />
                {t("nav.english")}
              </NavDropdown.Item>

              <NavDropdown.Divider style={{ backgroundColor: "#c770fe", opacity: 0.2 }} />

              <NavDropdown.Item onClick={() => changeLanguage("fr")} className="d-flex align-items-center">
                <Flag code="FR" height="14" style={{ marginRight: "10px", borderRadius: "2px" }} />
                {t("nav.french")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
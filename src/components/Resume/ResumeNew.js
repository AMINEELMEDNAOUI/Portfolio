import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfen from "../../Assets/../Assets/AMINE_EL_MEDNAOUI_CV_EN.pdf";
import pdffr from "../../Assets/../Assets/AMINE_EL_MEDNAOUI_CV_FR.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const currentPDF = i18n.language.startsWith("fr") ? pdffr : pdfen;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />


        <Row
          style={{ justifyContent: "center", position: "relative", marginBottom: "-20px" }}
          className="mt-5"
        >
          <Button
            variant="primary"
            href={currentPDF}
            target="_blank"
            style={{
              maxWidth: "300px",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            className="mx-2 mb-2"
          >
            <AiOutlineDownload />
            &nbsp;{t("resume.download")}
          </Button>
        </Row>


        <Row className="resume">
          <Document file={currentPDF} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
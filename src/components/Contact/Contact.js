import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from '../Particle';
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next"; // 1. Ajout de l'import

function Contact() {
    const { t } = useTranslation(); // 2. Initialisation du hook
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_cvxg6qu',
            'template_f65z4nj',
            form.current,
            '6Klt3fUZD5UyXYYpI'
        )
            .then(() => {
                Swal.fire({
                    title: t("contact.alert_success_title"), // Traduit
                    text: t("contact.alert_success_text"),   // Traduit
                    icon: 'success',
                    background: '#1a1421',
                    color: '#ffffff',
                    confirmButtonColor: '#c770fe',
                    iconColor: '#c770fe',
                    customClass: {
                        popup: 'my-swal-popup'
                    }
                });
                e.target.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                    title: t("contact.alert_error_title"), // Traduit
                    text: t("contact.alert_error_text"),   // Traduit
                    icon: 'error',
                    background: '#1a1421',
                    color: '#fff',
                    confirmButtonColor: '#c770fe'
                });
            });
    };

    return (
        <section style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                <Particle />
                <Container fluid className="home-section" id="contact">
                    <Container className="home-content">
                        <Row style={{ justifyContent: "center", padding: "10px" }}>
                            <Col md={7} className="home-header" style={{ textAlign: "center", zIndex: 10, marginTop: "-60px", marginLeft: "-20px" }}>
                                <h1 className="heading" style={{ paddingBottom: 15, marginLeft: "-60px" }}>
                                    {t("contact.title")} <strong className="main-name">{t("contact.me")}</strong>
                                </h1>

                                <p style={{ color: "white" }}>
                                    {t("contact.sub")} <span className="purple">{t("contact.reach")}</span> {t("contact.to_me")}
                                </p>

                                <Form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    style={{ textAlign: "left", marginTop: "30px" }}
                                >
                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>{t("contact.label_name")}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            className="custom-input"
                                            placeholder={t("contact.placeholder_name")}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>{t("contact.label_email")}</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            className="custom-input"
                                            placeholder={t("contact.placeholder_email")}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>{t("contact.label_message")}</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={5}
                                            className="custom-input"
                                            placeholder={t("contact.placeholder_message")}
                                            required
                                        />
                                    </Form.Group>

                                    <div style={{ textAlign: "center" }}>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="fork-btn-inner"
                                            style={{ width: "100%", padding: "10px" }}
                                        >
                                            {t("contact.send")}
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
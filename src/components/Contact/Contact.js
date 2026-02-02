import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from '../Particle';
import Swal from 'sweetalert2';

function Contact() {
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
                    title: 'Message Sent!',
                    text: 'Amine will get back to you soon.',
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
                    title: 'Oops...',
                    text: 'Something went wrong while sending the message.',
                    icon: 'error',
                    background: '#1a1421', // Fixed property name
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
                                <h1 className="heading" style={{ paddingBottom: 15 }}>
                                    CONTACT <strong className="main-name">ME</strong>
                                </h1>

                                <p style={{ color: "white" }}>
                                    Feel free to <span className="purple">reach out</span> to me!
                                </p>

                                <Form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    style={{ textAlign: "left", marginTop: "30px" }}
                                >
                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            className="custom-input"
                                            placeholder="Your name"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            className="custom-input"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: "white" }}>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={5}
                                            className="custom-input"
                                            placeholder="Your message..."
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
                                            Send Message
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
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const generatePath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const RecoverPassword = () => {
    return (
        <section className="login-content">
            <Container className="h-100">
                <Row className="align-items-center justify-content-center h-100">
                    <Col md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <a href="/index.html" className="auth-logo">
                                    <img src={generatePath('/assets/images/logo.png')} alt="logo" className="img-fluid rounded-normal" />
                                </a>
                                <h2 className="mb-2 text-center">Reset Password</h2>
                                <p>
                                    Enter your email address and we'll send you an email with
                                    instructions to reset your password.
                                </p>
                                <Form>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group controlId="formEmail" className="form-group" >
                                                <label for="formEmail">Email</label>
                                                <Form.Control
                                                    type="email"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button type="submit" className="btn-block" variant="primary">
                                        Reset
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RecoverPassword;

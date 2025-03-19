import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const generatePath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const SignIn = () => {
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
                                <h2 className="mb-2 text-center">Sign In</h2>
                                <p className="text-center">
                                    To Keep connected with us please login with your personal info.
                                </p>
                                <Form>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="admin@example.com" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="********" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Check
                                                type="checkbox"
                                                id="rememberMe"
                                                label="Remember Me"
                                                className="mb-3"
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <Link as="a" to="/auth/recover-password" className="text-primary float-md-start float-lg-end">
                                                Forgot Password?
                                            </Link>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <span>
                                            Create an Account <Link as="a" to="/auth/register" className="text-primary">Sign Up</Link>
                                             
                                        </span>
                                        <Button type="submit" className="mt-md-0 mt-3">Sign In</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignIn;

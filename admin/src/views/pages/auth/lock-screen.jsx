import React, { Fragment, memo } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const LockScreen = memo(() => {
    return (
        <Fragment>
            <section className='login-content'>
                <Container className='h-100'>
                    <Row className='align-items-center justify-content-center h-100'>
                        <Col md={12} lg={6}>
                            <Card >
                                <Card.Body className="card-body">
                                    <Row className="align-items-center">
                                        <Col lg={12} >
                                            <Link to="/" className="auth-logo">
                                                <img src={generatePath('assets/images/logo-dark.png')} alt="user-icon" className="img-fluid rounded-normal light-logo" />
                                            </Link>
                                            <div className="text-center">
                                                <h2 className="mb-2">Hi ! Barry Tech</h2>
                                                <p>Enter your password to access the admin.</p>
                                            </div>
                                            <Form>
                                                <Row >
                                                    <Col lg={12} >
                                                        <Form.Group className="form-group">
                                                            <Form.Label className="form-label">Password</Form.Label>
                                                            <Form.Control className="form-control" type="password" placeholder="********" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button type="submit" className="d-block w-100">Login</Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
})

export default LockScreen
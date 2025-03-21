import React, { Fragment, memo } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const Register = memo(() => {
  return (
    <Fragment>
      <div className='login-content'>
        <Container className='h-100'>
          <Row className='align-items-center justify-content-center h-100'>
            <Col lg={6}>
              <Card className='p-3'>
                <Card.Body>
                  <Link to="/" className="auth-logo">
                    <img src={generatePath('/assets/images/logo-dark.png')}  alt="logo" className="img-fluid rounded-normal" />
                  </Link>
                  <h3 className='mb-3 fw-bold text-center'>Getting Started</h3>
                  <p className="text-center text-secondary mb-4">Choose your social media to create account</p>
                  <div className="social-btn d-flex justify-content-around align-items-center mb-4">
                    <Button variant='outline-light'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="88.428 12.828 107.543 207.085">
                        <path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#3c5a9a"></path>
                      </svg>
                    </Button>
                    <Button variant='outline-light'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
                        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path>
                        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path>
                        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path>
                        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path>
                      </svg>
                    </Button>
                    <Button variant='outline-light'>
                      <svg width="20" height="20" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570A  70,  70 0 0 1 370, 523A  70,  70 0 0 0 401, 521A  70,  70 0 0 1 344, 455A  70,  70 0 0 0 372, 460A  70,  70 0 0 1 354, 370A 195, 195 0 0 0 495, 442A  67,  67 0 0 1 611, 380A 117, 117 0 0 0 654, 363A  65,  65 0 0 1 623, 401A 117, 117 0 0 0 662, 390A  65,  65 0 0 1 630, 425Z" fill="#3BA9EE"></path>
                      </svg>
                    </Button>
                  </div>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0"><span className="line-around-1">or register with email</span></p>
                  </div>
                  <Form>
                    <Row >
                      <Col lg={12} >
                        <Form.Group className="form-group mb-3">
                          <div className="text-secondary form-label text-dark">Email</div>
                          <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                      </Col>
                      <Col lg={12} className="mt-2">
                        <Form.Group className='form-group mb-3'>
                          <div className="text-secondary form-label text-dark">Password</div>
                          <Form.Control className="form-control" type="password" placeholder="Enter Password" />
                        </Form.Group>
                      </Col>
                      <Col lg={12} className="mt-2">
                        <Form.Check>
                          <Form.Check.Input id='flexCheckDefault' />
                          <Form.Check.Label className="ps-2" type="password" htmlFor='flexCheckDefault1'>
                            I agree to the{" "}
                            <Link to="/termsofUse" className='text-primary'>Terms of Service</Link>{" "}
                            and{" "}
                            <Link to="/privacy-Policy" className='text-primary'>Privacy Policy</Link>
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Button variant='primary' type="submit" className="btn-block mt-2 w-100">Create Account</Button>
                    <Col lg={12} className="mt-3">
                      <p className="mb-0 text-center">Do you have an account? <Link to="/auth/login">Sign In</Link></p>
                    </Col>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </Fragment>
  )
})

Register.displayName = "Register"
export default Register
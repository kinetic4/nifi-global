import React, { Fragment, memo } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const ConfirmMail = memo(() => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <div className="login-content">
        <Container className="h-100">
          <Row className='align-items-center justify-content-center h-100'>
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <Row className='align-items-center'>
                    <Col className='text-center'>
                      <Link to="/" className="auth-logo">
                        <img src={generatePath('/assets/images/logo-dark.png')}  alt="logo" className="img-fluid rounded-normal" />
                      </Link>
                      <h2 className='mt-3 mb-0'>Success !</h2>
                      <p className='mb-1'>
                        A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.
                      </p>
                      <div className="d-inline-block">
                        <Button variant='primary' onClick={() => navigate("/")} className='mt-3 d-flex align-items-center justify-content-center gap-1'>
                          <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                          <span>Back to Home</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
})

ConfirmMail.displayName = "ConfirmMail"
export default ConfirmMail
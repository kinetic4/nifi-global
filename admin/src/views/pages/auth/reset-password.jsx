import React, { Fragment, memo } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const ResetPassword = memo(() => {
  return (
    <Fragment>
      <div className='login-content'>
        <Container className='h-100'>
          <Row className='align-items-center justify-content-center h-100'>
            <Col lg={6}>
              <Card className='p-5'>
                <Card.Body>
                  <Link to="/" className="auth-logo">
                    <img  src={generatePath('/assets/images/logo-dark.png')}  alt="logo" className="img-fluid rounded-normal" />
                  </Link>
                  <h3 className='mb-3 text-center'>Reset Password</h3>
                  <p className="text-center small text-secondary mb-3">You can reset your password here</p>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="form-group">
                        <div className="text-secondary form-label text-dark">Email</div>
                          <Form.Control type='email' placeholder='Enter Email'></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button value="primary" type='submit' className='w-100'>Reset Password</Button>
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

ResetPassword.displayName = "ResetPassword"
export default ResetPassword
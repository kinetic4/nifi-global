import React, { Fragment, memo } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const Error404 = memo(() => {

  let navigate = useNavigate()
  return (
    <Fragment>
      <Container>
        <Row className='no-gutters height-self-center'>
          <Col className='text-center align-self-center'>
            <div className="iq-error position-relative">
            <img src={generatePath('/assets/images/error/datum_404.png')} alt="404" className='img-fluid mb-0 iq-error-img' />
              <h2 className='mb-0'>Oops! This Page is Not Found.</h2>
              <p>The requested page dose not exist.</p>
              <Button variant='primary' onClick={() => navigate("/")} className='mt-3 d-inline-flex align-items-center'> 
                <span>Back to Home</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default Error404
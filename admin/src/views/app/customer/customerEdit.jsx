import React, { Fragment, memo } from 'react'
import { Row, Container, Col, Breadcrumb, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

//choice js
import ChoicesJs from "../../../components/choices";

const CustomerEdit = memo(() => {
  const country = [
    { value: '', label: 'Select Country' },
    { value: 'france', label: 'France' },
    { value: 'uk', label: 'UK' },
    { value: 'usa', label: 'USA' },
  ]

  const states = [
    { value: '', label: 'Select State' },
    { value: 'ohio', label: 'Ohio' },
    { value: 'briston', label: 'Briston' },
    { value: 'nevada', label: 'Nevada' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'texas', label: 'Texas' },
    { value: 'california', label: 'California' },
  ];
  const customer = generatePath('customer');
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className='d-flex flex-wrap align-items-center justify-content-between'>
              <div className='d-flex align-items-center justify-content-between'>
                <Breadcrumb bsPrefix="breadcrumb p-0 mb-0">
                  <Breadcrumb.Item href={customer}>Customers</Breadcrumb.Item>
                  <Breadcrumb.Item active href='#'>Edit Customer</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <Link to="/customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="ms-2">Back</span>
              </Link>
            </div>
          </Col>
          <Col lg={12} className='mb-3 d-flex justify-content-between'>
            <h4 className="fw-bold d-flex align-items-center">Edit Customer</h4>
          </Col>
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md="3" className='mb-3'>
                    <Card.Body className="rounded bg-light">
                      <div className="d-flex justify-content-center"> 
                        <img src={generatePath('/assets/images/user/1.jpg')}  alt="profile" className="img-fluid" />
                      </div>
                      <div className="d-flex justify-content-center mt-2 mb-3">

                        <p className="mb-0 text-muted fw-bold">Upload Image</p>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col md="9">
                    <Form className="row g-3 date-icon-set-modal">
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text1" className="form-label fw-bold text-muted text-uppercase">Full
                          Name</Form.Label>
                        <Form.Control id="Text1" placeholder="Enter Full Name" defaultValue="Christian Bale" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label className="form-label fw-bold text-muted text-uppercase mb-md-4 mb-1">Gender</Form.Label><br />
                        <div className="d-flex align-items center">
                          <div className="form-check form-check-inline">
                            <Form.Check.Input type="radio" id="inlineRadio1" name="customRadio-1" />
                            <label className="custom-control-label" htmlFor="inlineRadio1"> Male </label>
                          </div>&nbsp;
                          <div className="form-check form-check-inline">
                            <Form.Check.Input type="radio" id="inlineRadio2" name="customRadio-1" defaultChecked />
                            <label className="custom-control-label" htmlFor="inlineRadio2" > Female </label>
                          </div>
                          <div className="form-check form-check-inline ">
                            <Form.Check.Input type="radio" id="inlineRadio3" name="customRadio-1" />
                            <label className="custom-control-label" htmlFor="inlineRadio3"> Other </label>
                          </div>
                        </div>
                      </Col>
                      <Col md="6" className='mb-3 position-relative'>
                        <Form.Label htmlFor="Text2" className="form-label fw-bold text-muted text-uppercase">Birth Day</Form.Label>
                        <Form.Control id="Text2" placeholder="" defaultValue="05/15/2021" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text3" className="form-label fw-bold text-muted text-uppercase">Company Name</Form.Label>
                        <Form.Control id="Text3" placeholder="Enter Company Name" defaultValue="AB Nexa" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text4" className="form-label fw-bold text-muted text-uppercase">Email</Form.Label>
                        <Form.Control id="Text4" placeholder="Enter Email" defaultValue="christian.Bale@blueberrye.com" type="email" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text4" className="form-label fw-bold text-muted text-uppercase">Phone</Form.Label>
                        <Form.Control id="Text4" placeholder="Enter Phone" defaultValue="+1 (021) 145-2256" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="inputcountry" className="form-label fw-bold text-muted text-uppercase">Country</Form.Label>
                        <ChoicesJs options={country} className="js-choice" select="one" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="inputstate" className="form-label fw-bold text-muted text-uppercase">State/Region</Form.Label>
                        <ChoicesJs options={states} className="js-choice" select="one" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text5" className="form-label fw-bold text-muted text-uppercase">Address</Form.Label>
                        <Form.Control id="Text5" placeholder="Enter Address" defaultValue="Lane & High, 2124 North High Street, Columbus" />
                      </Col>
                      <Col md="6" className='mb-3'>
                        <Form.Label htmlFor="Text6" className="form-label fw-bold text-muted text-uppercase">zipcode</Form.Label>
                        <Form.Control id="Text6" placeholder="Enter Zipcode" defaultValue="43201" />
                      </Col>
                      <Col md="12" className='mb-3'>
                        <Form.Label htmlFor="Text7" className="form-label fw-bold text-muted text-uppercase">bio</Form.Label>
                        <textarea rows={2} className='form-control' id="Text7" placeholder="Enter Bio" defaultValue="Brolin uploaded a picture of Christian Bale next to his own father James Brolin. ... He commented on how similar the two looked in the photographs proving that they really were father and son." />
                      </Col>
                      <Col md="12" className='mb-3'>
                        <Form.Label className="form-label fw-bold text-muted text-uppercase mb-3">Notification Type</Form.Label><br />
                        <div className="d-flex align-items center">
                          <div className="form-check form-check-inline">
                            <Form.Check.Input type="checkbox" id="inlineRadio4" name="customRadio-1" />
                            <Form.Check.Label htmlFor="inlineRadio4"> Email </Form.Check.Label>
                          </div>&nbsp;
                          <div className="form-check form-check-inline">
                            <Form.Check.Input type="checkbox" id="inlineRadio5" name="customRadio-1" defaultChecked />
                            <Form.Check.Label htmlFor="inlineRadio5"> SMS </Form.Check.Label>
                          </div>&nbsp;
                          <div className="form-check form-check-inline">
                            <Form.Check.Input type="checkbox" id="inlineRadio6" name="customRadio-1" />
                            <Form.Check.Label htmlFor="inlineRadio6"> Phone </Form.Check.Label>
                          </div>
                        </div>
                      </Col>
                    </Form>
                    <div className="d-flex flex-wrap justify-content-between mt-3 gap-3">
                      <Button variant="secondary" className="fw-bold btn-sm">
                        <div className="d-flex justify-content-between align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>&nbsp;
                          Delete Customer
                        </div>
                      </Button>
                      <Button variant="primary" className="btn btn-primary fw-bold btn-sm">
                        Save Customer
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default CustomerEdit
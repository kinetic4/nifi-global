import React, { Fragment, memo } from 'react'
import { Container, Row, Col, Form, Button, Breadcrumb } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'
// datepicker
import Datepickers from '../../../components/Datepicker';

const generatePath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

//choice js
import ChoicesJs from "../../../components/choices";

const Customeradd = memo(() => {
    const country = [
        { value: 'select-country', label: 'Select Country' },
        { value: 'france', label: 'France' },
        { value: 'uk', label: 'UK' },
        { value: 'usa', label: 'USA' },
    ]

    const states = [
        { value: 'select-state', label: 'Select State/Region' },
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
                    <Col lg="12" className='mb-1'>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-between">
                                <nav style={{ '--bs-breadcrumb-divider': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }}>
                                    <Breadcrumb bsPrefix='breadcrumb p-0 mb-2'>
                                        <Breadcrumb.Item href={customer}>Customers</Breadcrumb.Item>
                                        <Breadcrumb.Item href="#" active={true}>Add Customer</Breadcrumb.Item>
                                    </Breadcrumb>
                                </nav>
                            </div>
                            <Link to="/app/customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="12" className="mb-3 d-flex justify-content-between">
                        <h4 className="fw-bold0 d-flex align-items-center">Add New Customer</h4>
                    </Col>
                    <Col lg="12">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md="3" className="mb-3">
                                        <Card.Body className="rounded bg-body">
                                            <div className="d-flex justify-content-center mt-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="80px" x="0px" y="0px" viewBox="0 0 419.2 419.2" style={{"enable-background":'new 0 0 419.2 419.2'}} xml:space="preserve" stroke="currentColor" fill="currentColor">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <circle cx="158" cy="144.4" r="28.8"></circle>
                                                                <path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232     c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4     c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z      M21.2,80.4c0-9.6,4-18.4,10.4-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8     l-59.2-59.2c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,355.2v-0.8     c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.4L92,198.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8     c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2     c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60     c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2     c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4     c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8     c0-17.6,7.2-33.2,18.4-44.8c11.2-11.6,27.2-18.4,44.8-18.4s33.2,7.2,44.8,18.4c11.6,11.6,18.4,27.2,18.4,44.8     C397.2,328,390,343.6,378.8,355.2z"></path>
                                                                <path d="M341.6,267.6c-0.8-0.8-2-1.6-3.6-2.4c-1.2-0.4-2.4-0.8-3.6-0.8c-0.4,0-0.4,0-0.4,0c-0.4,0-0.4,0-0.4,0     c-1.2,0-2.4,0.4-3.6,0.8c-1.2,0.4-2.4,1.2-3.6,2.4l-24.8,24.8c-4,4-4,10.8,0,15.2c4,4,10.8,4,15.2,0l6.4-6.4v44     c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-44l6.4,6.4c4,4,10.8,4,15.2,0c4-4,4-10.8,0-15.2L341.6,267.6z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2 mb-5">
                                                <p className="mb-0 text-muted fw-bold">Upload Image</p>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                    <Col md="9">
                                        <Form className="row g-3 date-icon-set-modal">
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text1" className="fw-bold text-muted text-uppercase">Full Name</Form.Label>
                                                <Form.Control type="text" id="Text1" placeholder="Enter Full Name" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label className="fw-bold text-muted text-uppercase">Gender</Form.Label><br />
                                                <div className="d-flex align-items center">
                                                    <div className="form-check">
                                                        <Form.Check.Input type="radio" id="inlineRadio1" name="customRadio-1" />
                                                        <Form.Label className="custom-control-label" htmlFor="inlineRadio1"> Male </Form.Label>
                                                    </div>
                                                    <div className="form-check ms-3">
                                                        <Form.Check.Input type="radio" id="inlineRadio2" name="customRadio-1" />
                                                        <Form.Label className="custom-control-label" htmlFor="inlineRadio2"> Female </Form.Label>
                                                    </div>
                                                    <div className="form-check ms-3">
                                                        <Form.Check.Input type="radio" id="inlineRadio3" name="customRadio-1" />
                                                        <Form.Label className="custom-control-label" htmlFor="inlineRadio3"> Other </Form.Label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 position-relative relative-resp">
                                                <Form.Label htmlFor="Text2" className="fw-bold text-muted text-uppercase">Birth Day</Form.Label>
                                                <Datepickers type="text" className="vanila-datepicker" id="Text2" name="event_date" placeholder="Enter Birth Day" autoComplete="off" />
                                                <span className="search-link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text3" className="fw-bold text-muted text-uppercase">Company Name</Form.Label>
                                                <Form.Control type="text" id="Text3" placeholder="Enter Company Name" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text4" className="fw-bold text-muted text-uppercase">Email</Form.Label>
                                                <Form.Control type="text" id="Text4" placeholder="Enter Email" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text5" className="fw-bold text-muted text-uppercase">Phone</Form.Label>
                                                <Form.Control type="text" id="Text5" placeholder="Enter Phone" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="inputcountry" className="fw-bold text-muted text-uppercase">Country</Form.Label>
                                                <ChoicesJs options={country} className="js-choice" select="one" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="inputState" className="fw-bold text-muted text-uppercase">State/Region</Form.Label>
                                                <ChoicesJs options={states} className="js-choice" select="one" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text6" className="fw-bold text-muted text-uppercase">Address</Form.Label>
                                                <Form.Control type="text" id="Text6" placeholder="Enter Address" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <Form.Label htmlFor="Text7" className="fw-bold text-muted text-uppercase">Zipcode</Form.Label>
                                                <Form.Control type="text" id="Text7" placeholder="Enter Zipcode" />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <Form.Label htmlFor="Text9" className="fw-bold text-muted text-uppercase">Bio</Form.Label>
                                                <Form.Control as="textarea" id="Text9" rows="3" placeholder="Enter Bio" />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <Form.Label className="form-label fw-bold text-muted text-uppercase mb-3">Notification Type</Form.Label><br />
                                                <div className="d-flex align-items center">
                                                    <div className="form-check form-check-inline">
                                                        <Form.Check.Input type="checkbox" id="inlineRadio4" name="customRadio-1" />
                                                        <Form.Check.Label htmlFor="inlineRadio4"> Email </Form.Check.Label>
                                                    </div>&nbsp;
                                                    <div className="form-check form-check-inline">
                                                        <Form.Check.Input type="checkbox" id="inlineRadio5" name="customRadio-1" />
                                                        <Form.Check.Label htmlFor="inlineRadio5"> SMS </Form.Check.Label>
                                                    </div>&nbsp;
                                                    <div className="form-check form-check-inline">
                                                        <Form.Check.Input type="checkbox" id="inlineRadio6" name="customRadio-1" />
                                                        <Form.Check.Label htmlFor="inlineRadio6"> Phone </Form.Check.Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                        <div class="d-flex justify-content-end mt-3 gap-1">
                                            <Button variant="btn btn-primary" fdprocessedid="6my83j">Submit</Button>
                                            <Button variant="btn btn-danger" fdprocessedid="adkbz">Cancel</Button>
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

export default Customeradd;
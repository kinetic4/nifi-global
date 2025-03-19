import React, { Fragment, memo } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const InvoiceView = memo(() => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
              <h4 className="fw-bold">Invoice View</h4>
              <Link to="/pages-invoice" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="ms-2">Back</span>
              </Link>
            </div>
          </Col>
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Row className="pb-4 mx-0 p-0 card-header">
                  <Col lg={12} className="mb-3">
                    <img className="avatar avatar-50 is-squared" alt="user-icon" src={generatePath('/assets/images/logo-dark.png')} />
                  </Col> 
                  <Col lg={6} className="col-md-6">
                    <div className="text-start">
                      <h5 className="fw-bold mb-2">Invoice number</h5>
                      <p className="mb-md-0">IN-05866</p>
                    </div>
                  </Col>
                  <Col md={6} >
                    <div className="float-md-end">
                      <h5 className="fw-bold mb-2">Invoice Date</h5>
                      <p className="mb-0">2nd Oct 2019 03:16 PM</p>
                    </div>
                  </Col>
                </Row>
                <Row className=" pt-4 pb-5 mx-0">
                  <Col lg={6} className="col-lg-6 col-md-6">
                    <div className="text-start">
                      <h5 className="fw-bold mb-3">Invoice From</h5>
                      <p className="mb-0 mb-1">Chris Wood</p>
                      <p className="mb-0 mb-1">4183 Forest Avenue</p>
                      <p className="mb-0 mb-1">New York</p>
                      <p className="mb-0 mb-1">10011</p>
                      <p className="mb-0 mb-1">USA</p>
                      <p className="mb-0 mb-2">chris.wood@blueberry.com</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="float-md-end">
                      <h5 className="fw-bold mb-3">Invoice To</h5>
                      <p className="mb-0 mb-1">Blueberry LLC</p>
                      <p className="mb-0 mb-1">354 Roy Allen</p>
                      <p className="mb-0 mb-1">Denver</p>
                      <p className="mb-0 mb-1">80202</p>
                      <p className="mb-0 mb-2">USA</p>
                      <p className="mb-0 mb-2">info@blueberry.com</p>
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} >
                    <ListGroup variant='flush' as="ul">
                      <ListGroup.Item as="li" className=" p-0">
                        <div className="table-responsive">
                          <table className="table table-bordered mb-0">
                            <thead>
                              <tr className="text-muted">
                                <th scope="col" className="text-center">No</th>
                                <th scope="col" className="text-center">Description</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-center">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  1
                                </td>
                                <td className="text-center">
                                  OR-325548
                                </td>
                                <td className="text-center">
                                  6
                                </td>
                                <td className="text-center">
                                  $800
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  2
                                </td>
                                <td className="text-center">
                                  OR-500008
                                </td>
                                <td className="text-center">
                                  3
                                </td>
                                <td className="text-center">
                                  $500
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  3
                                </td>
                                <td className="text-center">
                                  OR-654412
                                </td>
                                <td className="text-center">
                                  5
                                </td>
                                <td className="text-center">
                                  $600
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <div className="d-flex justify-content-end mb-2">
                          Subtotal: <p className="ms-2 mb-0">$1,600</p>
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                          Taxes: <p className="ms-2 mb-0">$300</p>
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                          Total: <p className="ms-2 mb-0 fw-bold">$1,900</p>
                        </div>

                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <div className="col-lg-12">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="flex align-items-start flex-column mb-2">
                        <h6>Notes:</h6>
                        <p className="mb-0 my-2">Please send all items at the same time to the shipping address.
                          Thanksin advance.</p>
                      </div>
                      <div className='d-flex gap-1'>
                        <button className="btn btn-secondary px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                          </svg>{" "}
                          Print
                        </button>
                        <button className="btn btn-primary px-4">Send</button>
                      </div>
                    </div>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default InvoiceView
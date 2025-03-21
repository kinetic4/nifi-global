import React, { Fragment, memo } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Form, Row, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

// plugins
import Flatpickr from "react-flatpickr";

// datepicker
import Datepickers from '../../../components/Datepicker';

const TransactionNew = memo(() => {
  const cart = [
    {
      product_img: generatePath('/assets/images/products/12.jpg'),
      product_name: 'FivePlus Nord 5G',
      product_spec: '(12GB RAM, 256GB Storage)',
      product_quantity: 1,
      price: 2399.99
    },
    {
      product_img: generatePath('/assets/images/products/1.jpg'),
      product_name: 'Bassheads 220 Wired Headset',
      product_spec: 'Molten Orange, In the Ear',
      product_quantity: 1,
      price: 74.98
    },
  ]

  let sum = 0;
  cart.forEach(element => {
    sum += element.price
  });
  const order = generatePath('order');
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg={12} className='mb-2'>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className='d-flex align-items-center justify-content-between'>
                <nav style={{ '--bs-breadcrumb-divider': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }}>
                  <Breadcrumb bsPrefix='breadcrumb pb-0 mb-0 ps-0'>
                    <Breadcrumb.Item href={order}>Transactions</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active={true}>Add Transactions</Breadcrumb.Item>
                  </Breadcrumb>
                </nav>
              </div>
              <Link to="/app/transaction" className='btn btn-primary btn-sm d-flex align-items-center justify-content-between'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <span className='ms-2'>Back</span>
              </Link>
            </div>
          </Col>
          <Col lg={12} className='mb-3 d-flex justify-content-between'>
            <h4 className='fw-bold d-flex align-items-center'>New Transactions</h4>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <h5 className='fw-bold pb-3'>Customer Details</h5>
                <Form className='row'>
                  <Col md={12} className='mb-2 mb-md-3'>
                    <Form.Label htmlFor="Text1" className='fw-bold text-muted text-uppercase'>Customer</Form.Label>
                    <Form.Control type='text' id='Text1' placeholder='Search Customer'></Form.Control>
                  </Col>
                  <Col md={12} className='mb-2 mb-md-3'>
                    <Form.Label htmlFor="Text2" className='fw-bold text-muted text-uppercase'>Phone</Form.Label>
                    <Form.Control type='text' id='Text2' placeholder='Enter Phone'></Form.Control>
                  </Col>
                  <Col md={12} className='mb-2 mb-md-3'>
                    <Form.Label htmlFor="Text3" className='fw-bold text-muted text-uppercase'>Email</Form.Label>
                    <Form.Control type='text' id='Text3' placeholder='Enter Email'></Form.Control>
                  </Col>
                  <Col md={12} className='mb-0'>
                    <Form.Label htmlFor="Text4" className='fw-bold text-muted text-uppercase'>Address</Form.Label>
                    <Form.Control type='text' id='Text4' placeholder='Enter Address'></Form.Control>
                  </Col>
                </Form>
              </Col>
              <Col lg={6} className='mt-lg-0 mt-5'>
                <h5 className="fw-bold pb-3">Order Details</h5>
                <Form className='row g-3'>
                  <Col md={6} className='mb-1 mb-md-3'>
                    <Form.Label htmlFor="Text5" className='fw-bold text-muted text-uppercase'>Date</Form.Label>
                    <Datepickers type="text" className="vanila-datepicker" id="Text2" name="event_date" placeholder="DD MM YYYY" autoComplete="off" />
                  </Col>
                  <Col md={6} className='mb-1 mb-md-3'>
                    <Form.Label htmlFor="Text6" className='fw-bold text-muted text-uppercase'>Time</Form.Label>
                    <Form.Control type='text' id='Text6' placeholder='00:00' ></Form.Control>
                  </Col>
                  <Col md={12} className='mb-1 mb-md-3'>
                    <Form.Label className='fw-bold text-muted text-uppercase'>Payment Method</Form.Label> <br />
                    <div className='btn-group'>
                      <Button variant='outline-primary' className='active'>Credit Card</Button>
                      <Button variant='outline-primary'>PayPal</Button>
                      <Button variant='outline-primary'>Apple Pay</Button>
                    </div>
                  </Col>
                  <Col md={12} className='mb-1 mb-md-3'>
                    <Form.Label htmlFor="Text7" className='fw-bold text-muted text-uppercase'>Comment</Form.Label>
                    <textarea id='Text7' placeholder='Enter your comment' rows={3} className='form-control'></textarea>
                  </Col>
                  <ListGroup.Item as="li" className="p-3">
                <div className="d-flex justify-content-end align-items-center">
                  {/* Total: <p className="ms-2 mb-0 fw-bold">${sum.toLocaleString('en-US')}</p> */}
                  <Button variant="primary" className="ms-5 btn-sm">Submit</Button>
                </div>
              </ListGroup.Item>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* <Card>
          <Card.Body className="p-0">
            <ListGroup variant="flush" as='ul'>
              <ListGroup.Item as="li" className="p-3">
                <h5 className='fw-bold mb-3'>Order Items</h5>
                <div className="modal-product-search d-flex">
                  <Form className='me-2 position-relative'>
                    <Form.Group className="form-group mb-0">
                      <Form.Control type="text" id="exampleInputText" placeholder="Search Product" ></Form.Control>
                      <Link to="#" className="search-link">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </Link>
                    </Form.Group>
                  </Form>
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="p-0">
                <div className="table-responsive">
                  <table className='table mb-0'>
                    <thead>
                      <tr className='text-muted'>
                        <th>Product</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className="active-project-1 d-flex align-items-center mt-0 ">
                                <div className="h-avatar is-medium">
                                  <img className="avatar avatar-60 rounded" alt="user-icon" src={data.product_img} />
                                </div>
                                <div className="data-content">
                                  <div>
                                    <span className="fw-bold">{data.product_name}</span>
                                  </div>
                                  <p className="m-0 mt-1">
                                    {data.product_spec}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>&nbsp;{" "}
                                {data.product_quantity}
                                <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </div>
                            </td>
                            <td className="text-center">
                              ${data.price.toLocaleString('en-US')}
                            </td>
                            <td className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                              </svg>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </ListGroup.Item>
             
            </ListGroup>
          </Card.Body>
        </Card> */}
      </Container>
    </Fragment>
  )
})

export default TransactionNew
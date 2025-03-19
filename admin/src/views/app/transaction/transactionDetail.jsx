import React, { Fragment, memo } from 'react'
import { Row, Breadcrumb, Col, Container, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};


const TransactionDetail = memo(() => {

  const orders = [
    {
      product_name: "Bassheads 220 Wired Headset",
      product_description: "Molten Orange, In the Ear",
      product_image: "/assets/images/products/1.jpg",
      quantity: 1,
      price: 74.98
    },
    {
      product_name: "HP v150W PENDRIVE",
      product_description: "64 GB (Blue, Black)",
      product_image: "/assets/images/products/6.jpg",
      quantity: 3,
      price: 199.97
    },
    {
      product_name: "M10 FHD Plus with Active Pen Tablet",
      product_description: "(2nd Gen) 10.3 inches",
      product_image: "/assets/images/products/8.jpg",
      quantity: 1,
      price: 962.49
    }
  ];

  let total = 0;

  orders.forEach(element => {
    total += element.price
  });

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="mb-3">
              <nav aria-label="breadcrumb">
                <Breadcrumb bsPrefix='breadcrumb p-0 mb-0'>
                  <Breadcrumb.Item href="/order">Orders</Breadcrumb.Item>
                  <Breadcrumb.Item active href='#'>Order Details</Breadcrumb.Item>
                </Breadcrumb>
              </nav>
            </div>
          </Col>
          <Col lg={12} className='mb-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='fw-bold'>Order Details</h4>
              <Link className="btn btn-primary btn-sm" to="/pages-invoice">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>{" "}
                Generate Invoice
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card>
              <ListGroup as='ul' variant="flush" className='rounded'>
                <ListGroup.Item as="li" className="p-3">
                  <h5 className="fw-bold pb-2">Order Info</h5>
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            ID
                          </td>
                          <td>
                            OR-325548
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Date &amp; Time
                          </td>
                          <td>
                            01 Jan 2021 06:32
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Payment Method
                          </td>
                          <td>
                            Credit Card
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Invoice
                          </td>
                          <td className="text-primary">
                            IN-302240
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Status
                          </td>
                          <td>
                            <p className="mb-0 text-success fw-bold d-flex justify-content-start align-items-center">
                              <small><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                              </small>Completed
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="p-3">
                  <h5 className="fw-bold pb-2">Customer Details</h5>
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Name
                          </td>
                          <td>
                            John Lynn
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Email
                          </td>
                          <td>
                            lynnj34@blueberry.com
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Phone
                          </td>
                          <td>
                            +21 11445-2213
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Country
                          </td>
                          <td>
                            USA
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            State/Region
                          </td>
                          <td>
                            Ohio
                          </td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">
                            Address
                          </td>
                          <td>
                            201, Baker Street
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8}>
            <Card>
              <ListGroup as='ul' variant="flush" className='rounded'>
                <ListGroup.Item className="p-3"><h5 className="fw-bold">Order Items</h5></ListGroup.Item>
                <ListGroup.Item className="p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr className="text-muted">
                          <th>Product</th>
                          <th className="text-right">Quantity</th>
                          <th className="text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((data, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className="active-project-1 d-flex align-items-center mt-0 ">
                                  <div className="h-avatar is-medium">
                                    <img className="avatar rounded" alt="user-icon" src={generatePath(data.product_image)}  />
                                  </div>
                                  <div className="data-content">
                                    <div>
                                      <span className="fw-bold">{data.product_name}</span>
                                    </div>
                                    <p className="m-0 mt-1">
                                      {data.product_description}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                {data.quantity}
                              </td>
                              <td className="text-right">
                                ${data.price.toLocaleString('en-US')}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="p-3">
                  <div className="d-flex justify-content-end">
                    Total: <p className="ms-2 mb-0 fw-bold">${total.toLocaleString('en-US')}</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default TransactionDetail
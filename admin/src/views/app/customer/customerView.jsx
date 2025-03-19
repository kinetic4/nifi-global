import React, { Fragment, memo, useRef, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, ListGroup, Nav, Row, Tab, Table, Form, Alert, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Hooks
import useDataTable from "../../../hooks/useDatatable";

// plugin
import Chart from "react-apexcharts";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

//DATA
const tableData = [
  {
    id: 'IN-902559',
    date: "12 Jan 2020",
    desc: "Order OR-561488",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$104.98"
  },
  {
    id: 'IN-552149',
    date: "15 Jan 2020",
    desc: "Order OR-568842",
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06',
    total: "$99.98"
  },
  {
    id: 'IN-941529',
    date: "12 Jan 2020",
    desc: "Order OR-598550",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$966.12"
  },
  {
    id: 'IN-125623',
    date: "16 Jan 2020",
    desc: "Order OR-325548",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c',
    total: "$65.00"
  },
  {
    id: 'IN-911211',
    date: "18 Jan 2020",
    desc: "Order OR-125475",
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D',
    total: "$108.99"
  },
  {
    id: 'IN-902210',
    date: "19 Jan 2020",
    desc: "Order OR-595508",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$199.99"
  },
  {
    id: 'IN-902445',
    date: "20 Jan 2020",
    desc: "Order OR-884155",
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06',
    total: "$99.99"
  },
  {
    id: 'IN-901020',
    date: "22 Jan 2020",
    desc: "Order OR-500008",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$449.00"
  },
  {
    id: 'IN-9036510',
    date: "22 Jan 2020",
    desc: "Order OR-489523",
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D',
    total: "$1,299.05"
  },
  {
    id: 'IN-120010',
    date: "23 Jan 2020",
    desc: "Order OR-965508",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$6,325.99"
  },
  {
    id: 'IN-302240',
    date: "15 Jan 2020",
    desc: "Order OR-654412",
    status: "Paid",
    status_class: "success",
    fill: '#3cb72c',
    total: "$699.00"
  },
  {
    id: 'IN-662210',
    date: "26 Jan 2020",
    desc: "Order OR-965508",
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D',
    total: "$150.03"
  }
];


const columns = [
  { data: "id", title: "ID" },

  { data: "date", title: "Date" },
  { data: "desc", title: "Description" },
  {
    data: null,
    orderable: true,
    searchable: true,
    title: "Status",
    render: function (row) {
      return `
      <p class="mb-0 text-${row.status_class} d-flex justify-content-start align-items-center">
      <small><svg class="me-2 " xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">
                                                            <circle cx="12" cy="12" r="8" fill="${row.fill}"></circle>
                                                        </svg>
                                                    </small>
      ${row.status}</p>
        `;
    },
  },
  { data: "total", title: "Total" },
];

const chart1 = {
  series: [{
    data: [91, 82, 90, 88, 105, 99]
  }],
  chart: {
    height: 265,
    type: 'bar',
    toolbar: {
      show: false,
    },
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  legend: {
    show: false
  },
  yaxis: {
    labels: {
      offsetY: 0,
      minWidth: 20,
      maxWidth: 20
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
    ],
    labels: {
      minHeight: 22,
      maxHeight: 22,
      style: {
        fontSize: '12px'
      }
    }
  }
};

const CustomerView = memo(() => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setFeedback({
        message: 'New passwords do not match!',
        type: 'danger'
      });
      return;
    }

    // Here you would typically call your API to change the password
    // For demonstration, we'll just show a success message
    setFeedback({
      message: 'Password successfully changed!',
      type: 'success'
    });
    
    // Reset form
    setNewPassword('');
    setConfirmPassword('');
    setValidated(false);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });
  const customer = generatePath('customer');
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className='d-flex flex-wrap align-items-center justify-content-between'>
              <Breadcrumb bsPrefix='breadcrumb p-0 mb-0'>
                <Breadcrumb.Item href={customer}>Customers</Breadcrumb.Item>
                <Breadcrumb.Item hre="#" active>Customer View</Breadcrumb.Item>
              </Breadcrumb>
              <Link to="/customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="ms-2">Back</span>
              </Link>
            </div>
          </Col>
          <Col lg={12} className="mb-3 d-flex justify-content-between">
            <h4 className="fw-bold d-flex align-items-center">Customer View</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card>
              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li">
                  <div>
                    <ul className="list-style-1 mb-0">
                      <li className="list-item d-flex justify-content-start align-items-center">
                        <div className="avatar">
                          <img src={generatePath('/assets/images/user/1.jpg')} alt="01.jpg" className="avatar avatar-img avatar-60 rounded-circle" />
                        </div>
                        <div className="list-style-detail ms-4 me-2">
                          <h5 className="fw-bold">Kate Smith</h5>
                          <p className="mb-0 mt-1 text-muted">Botsford and Sons</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="row mt-3 mt-3 gx-lg-2 gx-xl-3">
                    <div class="col-6 text-center mb-2">
                      <button class="btn btn-block btn-sm btn-primary w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                        <span class="ms-1">Message</span>
                      </button>
                    </div>
                    <div class="col-6 text-center">
                      <button class="btn btn-block btn-sm btn-secondary w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                        <span class="ms-1">Edit Profile</span>
                      </button>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Table variant='borderless' className=" mb-0">
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">Email ID</p>
                        </td>
                        <td>
                          <p className="mb-0 ">kate@yahoo.com</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">Birthday</p>
                        </td>
                        <td>
                          <p className="mb-0 ">01 Feb 1990</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">Phone</p>
                        </td>
                        <td>
                          <p className="mb-0 ">+99 8756214524</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">Country</p>
                        </td>
                        <td>
                          <p className="mb-0 ">USA</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">State/Region</p>
                        </td>
                        <td>
                          <p className="mb-0 ">West Virginia</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <p className="mb-0 text-muted">Address</p>
                        </td>
                        <td>
                          <p className="mb-0 ">Baker Street, no. 7</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <Card>
            <Card.Header as="h4">Change Password</Card.Header>
            <Card.Body>
              {feedback.message && (
                <Alert variant={feedback.type} dismissible onClose={() => setFeedback({ message: '', type: '' })}>
                  {feedback.message}
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                

              <Form.Group className="mb-3" controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                    <Button 
                      variant="outline-secondary" 
                      onClick={toggleNewPasswordVisibility}
                      aria-label={showNewPassword ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      Please enter a new password (minimum 8 characters).
                    </Form.Control.Feedback>
                  </InputGroup>
                  <Form.Text className="text-muted">
                    Password must be at least 8 characters long.
                  </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button
                  type='outline-secondary'
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={showConfirmPassword ? 'Hide Password' : 'Show password'}
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye}/>
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    Please confirm your new password.
                  </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Change Password
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8}>
            <Card>
              <Card.Body className='p-0'>
                <Tab.Container defaultActiveKey="first">
                  <nav className='tab-bottom-bordered'>
                    <Nav as="ul" className='pt-2 mb-0' variant='tabs'>
                      <Nav.Item as="li" className='pb-0 mb-0'>
                        <Nav.Link eventKey="first" className='fw-bold text-uppercase nav-link px-5'>
                          Invoices
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className='pb-0 mb-0'>
                        <Nav.Link eventKey="second" className='fw-bold text-uppercase nav-link px-5'>
                          Activity
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className='d-flex justify-content-between align-items-center p-3 pb-md-0'>
                        <h5>Invoice List</h5>
                        <Button variant='secondary' size='sm'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="me-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                          </svg>{" "}
                          <span>Export</span>

                        </Button>
                      </div>
                      <div className="table-responsive customer-view-table">
                        <table
                          id="datatable"
                          ref={tableRef}
                          className='table data-table mb-0 dataTable no-footer'>
                        </table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className='p-3'>
                      <h3 className="mb-3">Activity</h3>
                      <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                        <ul className="list-inline p-0 m-0">
                          <li>
                            <div className="pt-3">
                              <p className="mb-0 text-muted font-weight-bold text-uppercase">13, September
                                2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Signed Out</h6>
                            <div className="d-inline-block w-100">
                              <p className="mb-0">Santander crea una sociedad para gestionar las sucursales
                                que cierra</p>
                              <div className="d-inline-block w-100">
                                <p>Probablemente, la bodega más sostenible de españa</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Create Invoice IN-302240</h6>
                            <div className="d-inline-block w-100">
                              <p>Repsol sopesa elegir primero un socio para su área de renovables y
                                después sacarla a Bolsa</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Signed In</h6>
                            <div className="d-inline-block w-100">
                              <p>El Ibex busca nuevos máximos en la última jornada de abril</p>
                            </div>
                            <div className="pt-3">
                              <p className="mb-0 text-muted font-weight-bold text-uppercase">14, September
                                2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Signed Out</h6>
                            <div className="d-inline-block w-100">
                              <p>Ecoener se atreve con la Bolsa y se estrenará con una valoración de 336
                                millones</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Create Invoice IN-662210</h6>
                            <div className="d-inline-block w-100">
                              <p className="mb-0">BBVA supera la crisis del Covid y gana 1.210 millones en el
                                primer trimestre</p>
                            </div>
                            <div className="d-inline-block w-100">
                              <p>Probablemente, la bodega más sostenible de españa</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                            <h6 className="float-left mb-1 font-weight-bold">Signed In</h6>
                            <div className="d-inline-block w-100">
                              <p className="mb-0">El mercado se prepara para una corrección en mayo tras el
                                rally bursátil</p>
                            </div>
                            <div className="d-inline-block w-100">
                              <p>Repsol sopesa elegir primero un socio para su área de renovables y
                                después sacarla a Bolsa</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default CustomerView
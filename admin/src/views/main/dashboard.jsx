import React from "react";
// import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";

//leaflet
import Leaflet from "../../components/leaflet";
//datepicker
import Datepickers from "../../components/Datepicker";

//circularpro
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, Container, Row, Col, Dropdown, Table, Button } from "react-bootstrap";

// img 

import user1 from "/assets/images/user/1.jpg";
import user5 from "/assets/images/user/5.jpg";
import user2 from "/assets/images/user/2.jpg";
import user3 from "/assets/images/user/3.jpg";

const NewCustomerdata = [
  {
    date: "01 Jun 2020",
    customerImage: user2,
    customerName: "Maggie Potts",
    status: "Completed",
    statusColor: "success",
    statusColorHex: "#3cb72c",
    total: "$104.98",
  },
  {
    date: "02 Jun 2020",
    customerImage: user5,
    customerName: "Kevin Adkins",
    status: "Completed",
    statusColor: "success",
    statusColorHex: "#3cb72c",
    total: "$233.00",
  },
  {
    date: "05 Jun 2020",
    customerImage: user1,
    customerName: "Max Lynn",
    status: "Pending",
    statusColor: "warning",
    statusColorHex: "#db7e06",
    total: "$150.01",
  },
  {
    date: "06 Jun 2020",
    customerImage: user3,
    customerName: "Danniw Yatt",
    status: "Cancelled",
    statusColor: "danger",
    statusColorHex: "#F42B3D",
    total: "$199.99",
  },
];


const Dashboard = () => {
  const chart1 = {
    options: {
      colors: ["#1f1f7a", "#2e2eb8"],
      chart: {
        height: 265,
        fontFamily: "DM Sans",
        toolbar: {
          show: false,
        },
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.2,
          stops: [0, 50, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          offsetY: 0,
          minWidth: 20,
          maxWidth: 20,
        },
        stepSize: 30
      },
      xaxis: {
        type: "datetime",
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    series: [
      {
        name: "Incomes",
        data: [90, 105, 72, 90, 65, 109, 130],
      },
      {
        name: "Expenses",
        data: [115, 93, 75, 102, 144, 52, 71],
      },
    ],
  };
  const chart2 = {
    options: {
      colors: ["#b3cccc", "#04237D", "#4d4dff"],
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        events: {
          click: function (chart, w, e) {
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          distributed: true,
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },

      xaxis: {
        categories: ["30 Jan", "25 Feb", "28 Mar"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            fontSize: "12px",
          },
        },
      },
    },
    series: [
      {
        data: [55, 42, 19, 30, 20, 65, 21, 23, 45, 60, 30, 20],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        height: 310,
        width: 469,
        type: 'donut',
      },
      labels: ['Mobile', 'Electronics', 'Laptop', 'Others'],
      colors: ['#ffbb33', '#04237D', '#e60000', '#8080ff'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: '80%',
            labels: {
              show: true,
              total: {
                show: true,
                color: '#BCC1C8',
                fontSize: '18px',
                fontFamily: 'DM Sans',
                fontWeight: 600,
              },
              value: {
                show: true,
                fontSize: '25px',
                fontFamily: 'DM Sans',
                fontWeight: 700,
                color: '#8F9FBC',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        lineCap: 'round',
      },
      grid: {
        padding: {
          bottom: 0,
        },
      },
      legend: {
        position: 'bottom',
        offsetY: 8,
        show: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 268,
              width: 319
            },
          },
        },
      ],
    },
    series: [43, 58, 20, 35],
  };
  return (
    <Container fluid>
      <Row>
        <Col md="12" className="mb-4 mt-1">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <h4 className="fw-bold mb-2 mb-lg-0">Overview</h4>
            <div className="form-group mb-0 vanila-daterangepicker d-flex flex-row">
              <div className="date-icon-set">
                <Datepickers
                  className="vanila-datepicker"
                  names="start"
                  placeholder="From Date"
                />
                <span className="search-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <span className="flex-grow-0">
                <span className="btn text-body">To</span>
              </span>
              <div className="date-icon-set">
                <Datepickers names="end" placeholder="To Date" />
                <span className="search-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="8" md="12">
          <Row>
            <Col md="4">
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-2 text-secondary">Total Profit</p>
                      <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h5 className="mb-0 fw-bold">$95,595</h5>
                        <p className="mb-0 ms-3 text-success fw-bold">
                          +3.55%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-2 text-secondary">Total Expenses</p>
                      <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h5 className="mb-0 fw-bold">$12,789</h5>
                        <p className="mb-0 ms-3 text-success fw-bold">
                          +2.67%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-2 text-secondary">New Users</p>
                      <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h5 className="mb-0 fw-bold">13,984</h5>
                        <p className="mb-0 ms-3 text-danger fw-bold">
                          -9.98%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="fw-bold">Sales Report</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#1f1f7a"></rect>
                        </svg>
                        <span className="ms-1">Incomes</span>
                      </div>
                      <div className="ms-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#2e2eb8"></rect>
                        </svg>
                        <span className="ms-1">Expenses</span>
                      </div>
                    </div>
                  </div>
                  <Chart
                    className="custom-chart"
                    options={chart1.options}
                    series={chart1.series}
                    type="area"
                    height="265"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="4" md="8">
          <Card className="card-block card-stretch card-height">
            <Card.Header className="card-header-border d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Top Selling Plans</h4>
              </div>
            </Card.Header>
            <div className="card-body-list">
              <ul className="list-style-3 mb-0">
                <li className="card-body list-item d-flex justify-content-start align-items-center border-bottom">
                  <div className="avatar">
                    <img
                      className="avatar avatar-img avatar-60 rounded"
                      src='https://images.sftcdn.net/images/t_app-icon-s/p/75fb9925-6940-4347-bbaa-13240d69356e/3791836040/signals-auto-analysis-alert-crypto-pump-finder-logo'
                      alt="1.jpg"
                    />
                  </div>
                  <div className="list-style-detail ms-3 me-2">
                    <p className="mb-0">Bitcoin</p>
                  </div>
                  <div className="list-style-action d-flex justify-content-end ms-auto">
                    <h6 className="fw-bold">$16</h6>
                  </div>
                </li>
                <li className="card-body list-item d-flex justify-content-start align-items-center border-bottom">
                  <div className="avatar">
                    <img
                      className="avatar avatar-img avatar-60 rounded"
                      src='https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/airdrops/December2024/bckK34fgFA7vFD7MjdYdQlbRqqIrsdINIg3WFVRR.webp'
                      alt="2.jpg"
                    />
                  </div>
                  <div className="list-style-detail ms-3 me-2">
                    <p className="mb-0">Ripple</p>
                  </div>
                  <div className="list-style-action d-flex justify-content-end ms-auto">
                    <h6 className="fw-bold">$19</h6>
                  </div>
                </li>
                <li className="card-body list-item d-flex justify-content-start align-items-center border-bottom">
                  <div className="avatar">
                    <img
                      className="avatar avatar-img avatar-60 rounded"
                      src=' https://d33epyjwhmr3r5.cloudfront.net/assets/images/currency/ltc.png'
                      alt="3.jpg"
                    />
                  </div>
                  <div className="list-style-detail ms-3 me-2">
                    <p className="mb-0">Litecoin</p>
                  </div>
                  <div className="list-style-action d-flex justify-content-end ms-auto">
                    <h6 className="fw-bold">$17</h6>
                  </div>
                </li>
                <li className="card-body list-item d-flex justify-content-start align-items-center">
                  <div className="avatar">
                    <img
                      className="avatar avatar-img avatar-60 rounded"
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT966ZmiPr4ORFDqdqOK5dXEcbrPPQ03SohjPwy-fq-poA-sdvU'
                      alt="4.jpg"
                    />
                  </div>
                  <div className="list-style-detail ms-3 me-2">
                    <p className="mb-0">Dash</p>
                  </div>
                  <div className="list-style-action d-flex justify-content-end ms-auto">
                    <h6 className="fw-bold">$99</h6>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col md="4">
          <Row>
            <Col md="12">
              <Card className="bg-primary">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="fit-icon-2 text-info text-center">
                      <div style={{ width: 75, height: 75 }}>
                        <CircularProgressbar className="text-center"
                          styles={buildStyles({
                            textColor: "#c7cbd3",
                            textSize: "23px",
                            pathColor: `#c7cbd3`,
                            trailColor: "#fff",
                          })}
                          value={62}
                          text={"62%"}
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="text-white fw-bold">
                        1,860 <small> /3k Target</small>
                      </h5>
                      <small className="mb-0 text-white">Order In Period</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold">Active Users</h6>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2"
                        width="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className=" fw-bold">200</span>
                    </div>
                  </div>
                  <p className="mb-0">Pages views per day</p>
                  <Chart
                    className="custom-chart"
                    options={chart2.options}
                    series={chart2.series}
                    type="bar"
                    height="158"
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 pt-3 custom-padding-top">25 June</p>
                    <p className="mb-0 pt-3 custom-padding-top ">26 June</p>
                    <p className="mb-0 pt-3 custom-padding-top ">27 June</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="4" md="6">
          <Card className="card-block card-stretch card-height">
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Upcoming Events</h4>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle
                      as="div"
                      href="#"
                      variant="text-muted pl-3"
                      id="dropdownMenuButton-event"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby="dropdownMenuButton-event">
                      <Dropdown.Item href="#">
                        <svg
                          className="svg-icon text-secondary"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <svg
                          className="svg-icon text-secondary"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <svg
                          className="svg-icon text-secondary"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown.Menu aria-labelledby="dropdownMenuButton-event">
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table table-spacing mb-0">
                  <tbody>
                    <tr className="white-space-no-wrap">
                      <td>
                        <h6 className="mb-0 text-uppercase text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pe-2 me-1"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          30 Jun, Tue
                        </h6>
                      </td>
                      <td className="ps-0">Big Billion Day Sale</td>
                    </tr>
                    <tr className="white-space-no-wrap">
                      <td>
                        <h6 className="mb-0 text-uppercase text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pe-2 me-1"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          09 July, Mon
                        </h6>
                      </td>
                      <td className="ps-0">5% Off on Mobile</td>
                    </tr>
                    <tr className="white-space-no-wrap">
                      <td>
                        <h6 className="mb-0 text-uppercase text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pe-2 me-1"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          15 Aug, Sun
                        </h6>
                      </td>
                      <td className="ps-0">Electronics Sale</td>
                    </tr>
                    <tr className="white-space-no-wrap">
                      <td>
                        <h6 className="mb-0 text-uppercase text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pe-2 me-1"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          26 Oct, Thu
                        </h6>
                      </td>
                      <td className="ps-0">Fashionable Sale</td>
                    </tr>
                    <tr className="white-space-no-wrap">
                      <td>
                        <h6 className="mb-0 text-uppercase text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pe-2 me-1"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          25 Dec, Fri
                        </h6>
                      </td>
                      <td className="ps-0">5% Off on Cloths</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end align-items-center border-top-table card-body">
                <button className="btn btn-secondary btn-sm">See All</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6">
      <Card>
        <Card.Body>
          <h4 className="fw-bold mb-3">Popular Categories</h4>
          <Chart
            className="custom-chart"
            options={chart3.options}
            series={chart3.series}
            type="donut"
            height={chart3.options.chart.height}
            width={chart3.options.chart.width}
          />
          <div className="d-flex justify-content-around align-items-center cust-margin">
            <div>
              <svg
                className="me-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffbb33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#ffbb33" />
              </svg>{""}
              <span>Mobile</span>
            </div>
            <div>
              <svg
                className="me-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#e60000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#e60000" />
              </svg>
              <span>Laptop</span>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center mt-3">
            <div>
              <svg
                className="me-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#04237D" />
              </svg>
              <span>Electronics</span>
            </div>
            <div>
              <svg
                className="me-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#8080ff" />
              </svg>
              <span>Others</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
        <Col lg="8" md="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">New Customer</h4>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    as="div"
                    href="#"
                    variant="text-muted ps-3"
                    id="dropdownMenuButton-customer"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu aria-labelledby="dropdownMenuButton-customer" className="rounded-3">
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <svg
                        className="svg-icon text-secondary"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="mb-0">
                  <thead className="table-color-heading">
                    <tr className="text-secondary">
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NewCustomerdata.map((row, index) => (
                      <tr key={index} className="white-space-no-wrap">
                        <td>{row.date}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-45 me-2">
                              <img
                                src={row.customerImage}
                                className="img-fluid rounded-circle"
                                alt={row.customerName}
                              />
                            </div>
                            <div>{row.customerName}</div>
                          </div>
                        </td>
                        <td>
                          <p
                            className={`mb-0 text-${row.statusColor} d-flex justify-content-start align-items-center`}
                          >
                            <small>
                              <svg
                                className="me-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle cx="12" cy="12" r="8" fill={row.statusColorHex} />
                              </svg>
                            </small>
                            {row.status}
                          </p>
                        </td>
                        <td className="text-right">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-end align-items-center border-top-table p-3">
                  <Button variant="secondary" size="sm">See All</Button>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col lg="4" md="12" className="col-lg-4 col-md-12">
          <Card>
            <Card.Body>
              <h4 className="fw-bold mb-3">City Orders Statistics</h4>
              <Leaflet id="chart-map-column-04" className="custom-chart" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

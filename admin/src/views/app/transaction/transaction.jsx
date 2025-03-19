import React, { Fragment, memo, useRef } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Hooks
import useDataTable from "../../../hooks/useDatatable";

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

//DATA
const tableData = [
  {
    id: "OR-325548",
    date: "01 Jan 2021",
    customer: "Jack Ryan",
    total: "$104.98",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-223544",
    date: "02 Jan 2021",
    customer: "Matt Damon",
    total: "$99.00",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-125623",
    date: "02 Jan 2021",
    customer: "Caitriona Balfe",
    total: "$249.49",
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    id: "OR-662210",
    date: "02 Jan 2021",
    customer: "Josh Lucas",
    total: "$9.99",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-901020",
    date: "03 Jan 2021",
    customer: "Jon Bernthal",
    total: "$90.49",
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D'
  },
  {
    id: "OR-902210",
    date: "05 Jan 2021",
    customer: "Noah Jupe",
    total: "$39.99",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-902559",
    date: "06 Jan 2021",
    customer: "Tracy Letts",
    total: "$19.22",
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    id: "OR-253524",
    date: "09 Jan 2021",
    customer: "Ray McKinnon",
    total: "$102.9",
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D'
  },
  {
    id: "OR-902559",
    date: "10 Jan 2021",
    customer: "Remo Girone",
    total: "$13.99",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-302240",
    date: "12 Jan 2021",
    customer: "Jack McMullen",
    total: "$25.99",
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
];

const columns = [
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  { data: "id", title: "ID" },

  { data: "date", title: "Date" },
  { data: "customer", title: "Customer" },
  { data: "total", title: "Total" },
  {
    data: null,
    orderable: true,
    searchable: true,
    title: "Status",
    render: function (row) { 
      return `
      <p class="mb-0 text-${row.status_class} fw-bold d-flex justify-content-start align-items-center">
      <small><svg class="me-2 text-${row.status_class}" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">
                                                            <circle cx="12" cy="12" r="8" fill="${row.fill}"></circle>
                                                        </svg>
                                                    </small>
      ${row.status}</p>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: "Action",
    render: function () {
      const orderdetails = generatePath('orderdetails');
      return `
       <div class="d-flex justify-content-start align-items-center">
                                                    <a  data-bs-toggle="tooltip" data-bs-placement="top" href="${orderdetails}" aria-label="View" data-bs-original-title="View">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                        </svg>
                                                    </a>
                                                    <a  data-bs-toggle="tooltip" data-bs-placement="top" href="#" aria-label="Edit" data-bs-original-title="Edit">
                                                       <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
        `;
    },
  },
];


const Transaction = memo(() => {
  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 my-schedule mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="fw-bold">All Orders</h4>
              </div>
              <div className="create-workform">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="modal-product-search d-flex flex-wrap">
                    <Form className="me-3 position-relative">
                      <Form.Group className="form-group mb-0">
                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Order" />
                        <Link className="search-link" to="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
                    <Link to="/orderNew" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      Add Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='card-block card-stretch'>
              <Card.Body className='p-0'>
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <h5 className="fw-bold">Orders List</h5>
                  <Button variant='secondary' size='sm' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="me-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>{" "}
                    <span>Export</span>
                  </Button>
                </div>
                <div className="table-responsive iq-order-table">
                  <table
                    id="datatable"
                    ref={tableRef}
                    className='table data-table mb-0 dataTable no-footer'>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})

export default Transaction
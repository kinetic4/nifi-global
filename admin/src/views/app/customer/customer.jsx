import React, { Fragment, memo, useRef } from 'react'
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'

// Hook
import useDataTable from "../../../hooks/useDatatable";

// img
import User1 from '/assets/images/user/1.jpg'
import User2 from '/assets/images/user/2.jpg'
import User4 from '/assets/images/user/4.jpg'
import User5 from '/assets/images/user/5.jpg'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const tableData = [
  {
    name: 'Christian Bale',
    des: 'Vari tech',
    img: `${User1}`,
    email: 'christian.Bale@blueberrye.com',
    RefferalId: "9e5244a7-7a61-4841-96e6-b4c425152dc9",
    phone: '+1 (021) 145-2256'

  },
  {
    name: 'Matt Damon',
    des: 'Galaxy Man',
    img: `${User2}`,
    email: 'mattdamon@blueberry.com',
    RefferalId: "9e5244a7-7a61-4841-96e6-b4c425152dc9",
    phone: '+25 (100) 1254-662'

  },
  {
    name: 'Caitriona Balfe',
    des: 'Manager',
    img: `${User1}`,
    email: 'caitrionabalfe204@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+251 966 522 456'
  },
  {
    name: 'Josh Lucas',
    des: 'Father and Son',
    img: `${User4}`,
    email: 'joshlucas007@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+5 20154-65755'
  },
  {
    name: 'Jon Bernthal',
    des: 'Morris Cafe',
    img: `${User5}`,
    email: 'jon.Bernthal@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+200 51145 65523'
  },
  {
    name: 'Noah Jupe',
    des: `${"Grossman's"}`,
    img: `${User2}`,
    email: 'nnoahjupe@blueberry.com',
    RefferalId: "9e5244a7-7a61-4841-96e6-b4c425152dc9",
    phone: '+251 5225-98554'
  },
  {
    name: 'Tracy Letts',
    des: 'Jeans Unlimited',
    img: `${User1}`,
    email: 'tracyetts@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+22 562 4587 55'
  },
  {
    name: 'Ray McKinnon',
    des: 'Gene Man',
    img: `${User2}`,
    email: 'raymcKinnon@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+66 4515585632'
  },
  {
    name: 'Remo Girone',
    des: 'Apple Walter',
    img: `${User2}`,
    email: 'remo.girone420@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+6 14552-15771'
  },
  {
    name: 'Jack McMullen',
    des: 'Noor Cafeteria',
    img: `${User1}`,
    email: 'jackmullen@blueberry.com',
    RefferalId: '9e5244a7-7a61-4841-96e6-b4c425152dc9',
    phone: '+25 4415-21445'
  },
]

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
  {
    data: null,
    title: "Name",
    render: function (row) {
      return `
      <div class="active-project-1 d-flex align-items-center mt-0 ">
        <div class="h-avatar is-medium">
          <img class="avatar rounded-circle" alt="user-icon" src="${row.img}">
        </div>
        <div class="data-content">
          <div><span class="fw-bold">${row.name}</span></div>
          <p class="m-0 text-secondary small">${row.des}</p>
        </div>
      </div>
      `
    }
  },

  { data: "email", title: "Email" },
  { data: "RefferalId", title: "Refferal Id" },
  { data: "phone", title: "Phone" },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: "Action",
    render: function () {
      const customerView = generatePath('app/customerView');
      const customerEdit = generatePath('app/customerEdit');
      return `<div class="d-flex justify-content-start align-items-center">
  <a
    
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    href="${customerView}"
    aria-label="View"
    data-bs-original-title="View"
  >
    
  </a>
  <a
    
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    href="${customerEdit}"
    aria-label="Edit"
    data-bs-original-title="Edit"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                        </svg>
  </a>
  <a
    class="badge bg-danger"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    href="#"
    aria-label="Delete"
    data-bs-original-title="Delete"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
  </a>
</div>`;
    },
  },
];


const Customer = memo(() => {
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
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="fw-bold mb-3 mb-lg-0">Customer</h4>
              </div>
              <div className="create-workform">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="modal-product-search d-flex flex-wrap">
                    <Form className="me-3 position-relative">
                      <Form.Group className="mb-0">
                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Customer" />
                        <Link to="#" className="search-link">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
                    <Link to="/app/customerAdd" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Customer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Row>
              <Col lg="12">
                <Card className="card-block card-stretch">
                  <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-center p-3 pb-md-0">
                      <h5 className="fw-bold">Customer List</h5>
                      <Button variant="btn btn-secondary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="me-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>{" "}
                        Export
                      </Button>
                    </div>
                    <div className="table-responsive iq-customer-table">
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
          </Col>
        </Row>
      </Container>
    </Fragment>

  )
})

export default Customer;
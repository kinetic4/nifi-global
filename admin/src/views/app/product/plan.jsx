import React, { Fragment, memo, useRef } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

//Hooks
import useDataTable from "../../../hooks/useDatatable";

//DATA
const tableData = [
  {
    img: 'https://images.sftcdn.net/images/t_app-icon-s/p/75fb9925-6940-4347-bbaa-13240d69356e/3791836040/signals-auto-analysis-alert-crypto-pump-finder-logo',
    name: 'Bitcoin',
    desc: 'Crypto Currency',
    category: "Crypto",
    price: "$749.49",
    quantity: '02',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    img: 'https://d33epyjwhmr3r5.cloudfront.net/assets/images/currency/ltc.png',
    name: 'Litecoin',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$229.9",
    quantity: '00',
    status: "Out Of Stock",
    status_class: "danger",
    fill: '#F42B3D'
  },
  {
    img: 'https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/airdrops/December2024/bckK34fgFA7vFD7MjdYdQlbRqqIrsdINIg3WFVRR.webp',
    name: 'Ripple',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$74.98",
    quantity: '45',
    status: "In Stock",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT966ZmiPr4ORFDqdqOK5dXEcbrPPQ03SohjPwy-fq-poA-sdvU',
    name: 'Dash',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$89.22",
    quantity: '05',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    img: 'https://images.sftcdn.net/images/t_app-icon-s/p/75fb9925-6940-4347-bbaa-13240d69356e/3791836040/signals-auto-analysis-alert-crypto-pump-finder-logo',
    name: 'Bitcoin',
    desc: 'Crypto Currency',
    category: "Crypto",
    price: "$749.49",
    quantity: '02',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT966ZmiPr4ORFDqdqOK5dXEcbrPPQ03SohjPwy-fq-poA-sdvU',
    name: 'Dash',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$89.22",
    quantity: '05',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    img: 'https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/airdrops/December2024/bckK34fgFA7vFD7MjdYdQlbRqqIrsdINIg3WFVRR.webp',
    name: 'Ripple',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$74.98",
    quantity: '45',
    status: "In Stock",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    img: 'https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/airdrops/December2024/bckK34fgFA7vFD7MjdYdQlbRqqIrsdINIg3WFVRR.webp',
    name: 'Ripple',
    desc: 'Crypt currency',
    category: "Crypto",
    price: "$74.98",
    quantity: '45',
    status: "In Stock",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    img: 'https://images.sftcdn.net/images/t_app-icon-s/p/75fb9925-6940-4347-bbaa-13240d69356e/3791836040/signals-auto-analysis-alert-crypto-pump-finder-logo',
    name: 'Bitcoin',
    desc: 'Crypto Currency',
    category: "Crypto",
    price: "$749.49",
    quantity: '02',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    img: 'https://images.sftcdn.net/images/t_app-icon-s/p/75fb9925-6940-4347-bbaa-13240d69356e/3791836040/signals-auto-analysis-alert-crypto-pump-finder-logo',
    name: 'Bitcoin',
    desc: 'Crypto Currency',
    category: "Crypto",
    price: "$749.49",
    quantity: '02',
    status: "Limited",
    status_class: "warning",
    fill: '#db7e06'
  },
];

const columns = [
  {
    data: null,
    orderable: true,
    searchable: true,
    title: "Currency Name",
    render: function (row) {
      return `
      <div class="active-project-1 d-flex align-items-center mt-0 ">
                                                    <div class="h-avatar is-medium">
                                                        <img class="avatar rounded" alt="user-icon" src="${row.img}">
                                                    </div>
                                                    <div class="data-content">
                                                        <div>
                                                            <span class="fw-bold">${row.name}</span>
                                                        </div>
                                                        <p class="m-0 mt-1">
                                                            ${row.desc}
                                                        </p>
                                                    </div>
                                                </div>
      `
    }
  },
  { data: "category", title: "Category" },

  { data: "price", title: "price" },
  { data: "quantity", title: "Quantity" },
  {
    data: null,
    orderable: true,
    searchable: true,
    title: "Inventory",
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
      return `
       <div class="d-flex justify-content-start align-items-center">
  <a
    
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    href="#"
    aria-label="Edit"
    data-bs-original-title="Edit"
  >
   <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary me-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
</div>

        `;
    },
  },
];


const Plan = memo(() => {
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
                <h4 className="fw-bold">Plan</h4>
              </div>
              <div className="create-workform">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="modal-product-search d-flex flex-wrap">
                    <Form className="me-3 position-relative">
                      <Form.Group className="form-group mb-0">
                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Plan" />
                        <Link className="search-link" to="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
                    <Link to="/app/planAdd" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      Add Plan
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
                <div className="d-flex justify-content-between align-items-center p-3 pb-md-0">
                  <h5 className="fw-bold">Plan List</h5>
                  <Button variant='secondary' size='sm' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="me-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>{" "}
                    Export
                  </Button>
                </div>
                <div className="table-responsive iq-product-table">
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

export default Plan
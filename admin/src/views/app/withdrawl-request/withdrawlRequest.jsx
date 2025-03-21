import React, { Fragment, memo, useRef, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Hooks
import useDataTable from "../../../hooks/useDatatable";

import { generatePath } from 'react-router-dom';

//DATA
const tableData = [
  {
    id: "OR-325548",
    date: "01 Jan 2021",
    customer: "Jack Ryan",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-223544",
    date: "02 Jan 2021",
    customer: "Matt Damon",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: 'h)5k7N,BnvU,6*qKFXg;eg%yh',
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-125623",
    date: "02 Jan 2021",
    customer: "Caitriona Balfe",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: 'h)5k7N,BnvU,6*qKFXg;eg%yh',
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    id: "OR-662210",
    date: "02 Jan 2021",
    customer: "Josh Lucas",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: ')J3M,NYz4;Nzuq2/c.vkXW]?R{4beWY:?nYBmz4}{C_EUh/P0',
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-901020",
    date: "03 Jan 2021",
    customer: "Jon Bernthal",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: ')J3M,NYz4;Nzuq2/c.vkXW]?R{4beWY:?nYBmz4}{C_EUh/P0',
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D'
  },
  {
    id: "OR-902210",
    date: "05 Jan 2021",
    customer: "Noah Jupe",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: 'h)5k7N,BnvU,6*qKFXg;eg%yh',
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-902559",
    date: "06 Jan 2021",
    customer: "Tracy Letts",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: 'h)5k7N,BnvU,6*qKFXg;eg%yh',
    status: "Pending",
    status_class: "warning",
    fill: '#db7e06'
  },
  {
    id: "OR-253524",
    date: "09 Jan 2021",
    customer: "Ray McKinnon",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    status: "Cancelled",
    status_class: "danger",
    fill: '#F42B3D'
  },
  {
    id: "OR-902559",
    date: "10 Jan 2021",
    customer: "Remo Girone",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    status: "disperse",
    status_class: "success",
    fill: '#3cb72c'
  },
  {
    id: "OR-302240",
    date: "12 Jan 2021",
    customer: "Jack McMullen",
    total: "https://nifi-global-yrek.vercel.app/wallet",
    address: ')J3M,NYz4;Nzuq2/c.vkXW]?R{4beWY:?nYBmz4}{C_EUh/P0',
    status: "Completed",
    status_class: "success",
    fill: '#3cb72c'
  },
];

const WithdrawalRequest = memo(() => {
  const tableRef = useRef(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({
    id: '',
    status: '',
    statusClass: '',
    fill: ''
  });

  // Function to handle status button click
  const handleDisperseClick = (id, status, statusClass, fill) => {
    setSelectedStatus({
      id,
      status,
      statusClass,
      fill
    });
    setShowStatusModal(true);
  };



  

  // Add the handler function to the window object to make it accessible from the button's onclick
  useEffect(() => {
    window.handleDisperseClick = handleDisperseClick;
    
    // Cleanup function to remove the handler when component unmounts
    return () => {
      delete window.handleDisperseClick;
    };
  }, []);

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
    { data: "id", title: "Customer Id" },
    { data: "date", title: "Date" },
    { data: "customer", title: "Name" },
    { data: "total", title: "Total withdrawl link" },
    { data: 'address', title: 'Wallet address' },
    {
      data: null,
      orderable: true,
      searchable: true,
      title: "Status",
      render: function (row) { 
        return `
        <button 
          id="disperse-btn-${row.id}" 
          class="btn btn-sm btn-secondary rounded-full"
          data-status="${row.status}"
          data-status-class="${row.status_class}"
          data-fill="${row.fill}"
          data-id="${row.id}"
          onclick="handleDisperseClick('${row.id}', '${row.status}', '${row.status_class}', '${row.fill}')"
        >
          Disperse
        </button>
          `;
      },
    },
    {
      data: null,
      orderable: false,
      searchable: false,
      title: "Action",
      render: function () {
        const transactionDetail = generatePath('transactionDetail');
        return `
         <div class="d-flex justify-content-start align-items-center">
                                                      <a  data-bs-toggle="tooltip" data-bs-placement="top" href="${transactionDetail}" aria-label="View" data-bs-original-title="View">
                                                       
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

  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });

  // Function to get the status information based on the status value
  const getStatusInfo = (status) => {
    switch(status) {
      case 'Completed':
        return {
          title: 'Completed Transaction',
          description: 'This transaction has been successfully completed and processed.',
          actions: ['View Details', 'Export Receipt']
        };
      case 'Pending':
        return {
          title: 'Pending Transaction',
          description: 'This transaction is currently being processed. It may take 24-48 hours to complete.',
          actions: ['Track Progress', 'Cancel Request']
        };
      case 'Cancelled':
        return {
          title: 'Cancelled Transaction',
          description: 'This transaction has been cancelled. No further action is required.',
          actions: ['View Details', 'Retry Transaction']
        };
      case 'disperse':
        return {
          title: 'Disperse Transaction',
          description: 'This transaction has been dispersed across multiple accounts.',
          actions: ['View Distribution', 'Export Receipt']
        };
      default:
        return {
          title: 'Transaction Status',
          description: 'Status information for this transaction.',
          actions: ['View Details']
        };
    }
  };
  
  // Get status information for the selected status
  const statusInfo = selectedStatus.status ? getStatusInfo(selectedStatus.status) : null;
  
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 my-schedule mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="fw-bold">All Withdrawl Request</h4>
              </div>
              <div className="create-workform">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="modal-product-search d-flex flex-wrap">
                    <Form className="me-3 position-relative">
                      <Form.Group className="form-group mb-0">
                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Withdrawl" />
                        <Link className="search-link" to="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
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
                  <h5 className="fw-bold"> Withdrawl Request List</h5>
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

      {/* Status Modal */}
      <Modal 
        show={showStatusModal} 
        onHide={() => setShowStatusModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className={`text-${selectedStatus.statusClass}`}>
            {statusInfo?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center mb-3">
            <div 
              className="me-3" 
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: selectedStatus.fill,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {selectedStatus.status === 'Completed' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              )}
              {selectedStatus.status === 'Pending' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3.5a.5.5 0 1 1-1 0V4.5A.5.5 0 0 1 8 4z"/>
                  <path d="M7.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5z"/>
                </svg>
              )}
              {selectedStatus.status === 'Cancelled' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              )}
            </div>
            <div>
              <h5 className="mb-0">Status: {selectedStatus.status}</h5>
              <small>ID: {selectedStatus.id}</small>
            </div>
          </div>
          
          <p>{statusInfo?.description}</p>
          
          {/* Additional details can be added here based on status */}
          {selectedStatus.status === 'Completed' && (
            <div className="alert alert-success p-2">
              <small>Transaction was completed on {tableData.find(item => item.id === selectedStatus.id)?.date}</small>
            </div>
          )}
          
          {selectedStatus.status === 'Pending' && (
            <div className="alert alert-warning p-2">
              <small>Estimated completion time: 24-48 hours</small>
            </div>
          )}
          
          {selectedStatus.status === 'Cancelled' && (
            <div className="alert alert-danger p-2">
              <small>Transaction was cancelled on {tableData.find(item => item.id === selectedStatus.id)?.date}</small>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {statusInfo?.actions.map((action, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? selectedStatus.statusClass : 'light'}
              className={index === 0 ? '' : 'ms-2'}
              onClick={() => setShowStatusModal(false)}
            >
              {action}
            </Button>
          ))}
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
})

export default WithdrawalRequest
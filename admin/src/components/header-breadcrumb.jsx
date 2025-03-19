import { memo, Fragment, useState } from 'react'

//react-bootstrap
import { Row, Col, Modal, Button, Form, Container } from 'react-bootstrap'

//flatpicker
import Flatpickr from "react-flatpickr";

//componets
import Card from '../components/Card'
import ChoicesJs from './Choice';

const HeaderBread = memo(() => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const default_option = [
    { value: "Appointments", label: "Appointments" },
    { value: "Birthday", label: "Birthday" },
    { value: "Meetings", label: "Meetings" },
    { value: "Tour", label: "Tour" },
    { value: "Anniversary", label: "Anniversary" }
  ] 
  return (
    <Fragment>
      <Row>
        <Col md="12">
          <Card.Body className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
            <div className="card-title mb-0">
              <h4 className="mb-0">Set Your Weekly Hours</h4>
            </div>
            <div className="card-action mt-2 mt-sm-0">
              <Button
                className="btn btn-primary d-flex align-items-center"
                onClick={handleShow}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Add New Event</span>
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="#" method="post" className='iq-custom-choicejs'>
            <div className="d-flex flex-column align-items-start">
              <input type="hidden" name="id" />
              <input type="hidden" name="appointment_type" />
            </div>
            <Row >
              <Col md={12} className="mb-3">
                <label for="Text1" className="form-label fw-bold text-muted text-uppercase">Event Title</label>
                <input type="text" className="form-control" id="Text1" placeholder="Enter Event Title" />
              </Col>
              <Col md={12} >
                <label className="form-label fw-bold text-muted text-uppercase">Date & Time</label>
              </Col>
              <Col md={6} className="mb-3 d-flex">
                <Flatpickr options={{ minDate: "today" }} className="form-control flatpickrdate border-end-0 rounded-start rounded-0 mb-3" placeholder="Start Date" />
                <span class="input-group-text border-start-0 rounded-end rounded-0 mb-3" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                   width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                </span>
              </Col>
              <Col md={6} className="mb-3 d-flex">
                <Flatpickr options={{ minDate: "today" }} className="form-control flatpickrdate border-end-0 rounded-start rounded-0 mb-3" placeholder="End Date" />
                <span class="input-group-text border-start-0 rounded-end rounded-0 mb-3" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                   width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                </span>
              </Col>
              <Col md={12} className="mb-3">
                <div className="d-flex align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label" for="flexCheckDefault1">
                      All Day
                    </label>
                  </div>
                  <div className="form-check ms-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label" for="flexCheckDefault2">
                      Does not repeat
                    </label>
                  </div>
                </div>
              </Col>
              <Col md={12} className="mb-3">
                <p for="inputState" className="form-label fw-bold text-muted text-uppercase">Category</p>
                <ChoicesJs options={default_option} className="js-choice" select="one" />
              </Col>
              <Col md={12} className="mb-3">
                <label for="Text9" className="form-label fw-bold text-muted text-uppercase">Description</label>
                <textarea className="form-control" id="Text9" rows="4" placeholder="Enter Description"></textarea>
              </Col>
            </Row>
            <div className="d-flex justify-content-end"> 
              <Button variant="primary" onClick={handleClose}>
                Add Event
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
})
export default HeaderBread
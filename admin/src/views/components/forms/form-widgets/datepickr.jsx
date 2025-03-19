import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
import Card from '../../../../components/Card';

const Datepickr = () => {
  return (
    <Container fluid>
      <Row className="row">
        <Col lg={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title className=" ">
                <h4 className="card-title">Basic</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=" ">
              <div className="form-group mb-0">
                <label htmlFor="exampleInputdate" className="form-label">Date Input</label>
                <input type="date" className="form-control" id="exampleInputdate" defaultValue="2019-12-18" />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title className=" ">
                <h4 className="card-title">Month Date</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=" ">
              <div className="form-group mb-0">
                <label htmlFor="exampleInputmonth" className="form-label">Month Input</label>
                <input type="month" className="form-control" id="exampleInputmonth" defaultValue="2019-12" />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title className=" ">
                <h4 className="card-title">Time</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=" ">
              <div className="form-group mb-0">
                <label htmlFor="exampleInputtime" className="form-label">Time Input</label>
                <input type="time" className="form-control" id="exampleInputtime" defaultValue="13:45" />
              </div>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title className=" ">
                <h4 className="card-title">Week</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=" ">
              <div className="form-group mb-0">
                <label htmlFor="exampleInputweek" className="form-label">Week Input</label>
                <input type="week" className="form-control" id="exampleInputweek" defaultValue="2019-W46" />
              </div>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title className=" ">
                <h4 className="card-title">Date and Time</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=" ">
              <div className="form-group mb-0">
                <label htmlFor="exampleInputdatetime" className="form-label">Date and Time Input</label>
                <input type="datetime-local" className="form-control" id="exampleInputdatetime" defaultValue="2019-12-19T13:45:00" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Datepickr
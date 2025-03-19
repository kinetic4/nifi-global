import React from 'react';
import { Container, Row, Col, Card, Form, Button, Breadcrumb, Nav } from 'react-bootstrap';

//choice js
import ChoicesJs from "../../../components/choices";

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const PlanAdd = () => {
  const categories = [
    { value: 'selected', label: 'Select Category' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'applications', label: 'Applications' },
    { value: 'gadgets', label: 'Gadgets' },
  ];
  const tags = [
    { value: '1', label: 'Excellent' },
    { value: '2', label: 'Very Good' },
    { value: '3', label: 'Good' },
    { value: '4', label: 'Not Bad' },
    { value: '5', label: 'Bad' },
    { value: '6', label: 'Very Bad' },
  ]; 
   const product = generatePath('product');
  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="mb-2">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <Nav
                style={{ '--bs-breadcrumb-divider': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }}
                aria-label="breadcrumb"
              >
                <Breadcrumb bsPrefix="breadcrumb ps-0 mb-0 pb-0">
                  <Breadcrumb.Item href={product}>Plan</Breadcrumb.Item>
                  <Breadcrumb.Item active>Add Plan</Breadcrumb.Item>
                </Breadcrumb>
              </Nav>
            </div>
            <Button href={product} className="btn-sm d-flex align-items-center justify-content-between ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-2">Back</span>
            </Button>
          </div>
        </Col>
        <Col lg={12} className="mb-3 d-flex justify-content-between">
          <h4 className="fw-bold d-flex align-items-center">New Plan</h4>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <h5 className="fw-bold mb-3">Basic Information</h5>
              <Form className="row g-3">
                <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Plan Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product Name" />
                </Col>
                {/* <Col md={6} className="mb-3">

                  <Form.Label className="fw-bold text-muted text-uppercase">Category</Form.Label>
                  <ChoicesJs options={categories} className="js-choice" select="one" />
                </Col> */}
                <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Plan Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product Code" />
                </Col>
                {/* <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Product SKU</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product SKU" />
                </Col> */}
                {/* <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Manufacturer</Form.Label>
                  <Form.Control type="text" placeholder="Enter Manufacturer" />
                </Col> */}
                {/* <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Quantity</Form.Label>
                  <Form.Control type="text" placeholder="Enter Quantity" />
                </Col> */}
                <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Plan Price</Form.Label>
                  <Form.Control type="text" placeholder="Enter Price" />
                </Col>
                {/* <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Tax</Form.Label>
                  <Form.Control type="text" placeholder="Enter Tax" />
                </Col> */}
                <Col md={12}>
                  <Form.Group className="form-group" controlId="Text8">
                    <Form.Label className="fw-bold text-muted text-uppercase">Tag</Form.Label>
                    <ChoicesJs options={tags} className="js-choice" select="multi" />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Label className="fw-bold text-muted text-uppercase">Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter Description" />
                </Col>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h5 className="fw-bold mb-3">Plan Image</h5>
              <Card.Body className="bg-body rounded text-body">
                <div className="d-flex justify-content-center mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" height="120px" x="0px" y="0px" viewBox="0 0 419.2 419.2" style={{ enableBackground: "new 0 0 419.2 419.2" }} xmlSpace="preserve" stroke="currentColor" fill="currentColor">
                    <g>
                      <g>
                        <g>
                          <circle cx="158" cy="144.4" r="28.8"></circle>
                          <path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232     c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4     c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z      M21.2,80.4c0-9.6,4-18.4,10.4-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8     l-59.2-59.2c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,355.2v-0.8     c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.4L92,198.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8     c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2     c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60     c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2     c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4     c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8     c0-17.6,7.2-33.2,18.4-44.8c11.2-11.6,27.2-18.4,44.8-18.4s33.2,7.2,44.8,18.4c11.6,11.6,18.4,27.2,18.4,44.8     C397.2,328,390,343.6,378.8,355.2z"></path>
                          <path d="M341.6,267.6c-0.8-0.8-2-1.6-3.6-2.4c-1.2-0.4-2.4-0.8-3.6-0.8c-0.4,0-0.4,0-0.4,0c-0.4,0-0.4,0-0.4,0     c-1.2,0-2.4,0.4-3.6,0.8c-1.2,0.4-2.4,1.2-3.6,2.4l-24.8,24.8c-4,4-4,10.8,0,15.2c4,4,10.8,4,15.2,0l6.4-6.4v44     c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-44l6.4,6.4c4,4,10.8,4,15.2,0c4-4,4-10.8,0-15.2L341.6,267.6z"></path>
                        </g>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="d-flex justify-content-center mt-2 mb-5">
                  <p className="mb-0 text-muted fw-bold">Drop files here or click to upload</p>
                </div>
              </Card.Body>
              <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" >
                  Create Product
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlanAdd;

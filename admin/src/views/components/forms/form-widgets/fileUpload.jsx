import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Card from '../../../../components/Card'

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFile(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please select an image file');
      setFile(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container fluid>
      <Row className="row">
        <Col lg={12} className="col-lg-12">
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <Card.Header.Title className="header-title">
                <h4 className="card-title">Default</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor="customFile1">Choose File</Form.Label>
                  <Form.Control type="file" id="customFile1" />
                </Form.Group>
                <p>Default File:</p>
                <Form.Group>
                  <input type="file" id="myFile" name="filename2" />
                </Form.Group>
                <div className="mt-3">
                  <Button type="submit" variant="primary">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <Card.Header.Title className="header-title">
                <h4 className="card-title"> File Input</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="card-body">
              <Form id="file-upload-form" className="uploader-file" onSubmit={handleSubmit}>
                <Form.Control
                  type="file"
                  id="file-upload"
                  name="fileUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Form.Label id="file-drag" className="mb-0 bg-body">
                  <img id="file-image" src="#" alt="Preview" className="hidden" />
                  <span id="start-one">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <g>
                          <g>
                            <path d="M12 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" />
                          </g>
                          <g>
                            <g>
                              <path
                                d="M17 14L21 14C22.1046 14 23 14.8954 23 16V20C23 21.1046 22.1046 22 21 22L3 22C1.89543 22 1 21.1046 1 20V16C1 14.8954 1.89543 14 3 14H7"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </g>
                            <g>
                              <ellipse cx="16" cy="18.0115" rx="1" ry="1.01149" fill="white" />
                              <ellipse cx="20" cy="18.0115" rx="1" ry="1.01149" fill="white" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="d-block mt-2">Select a file or drag here</span>
                    <span id="notimage" className="hidden d-block mb-2">Please select image</span>
                    <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                    <Form.Control
                      type="file"
                      id="file-upload-btn"
                      name="Select a file"
                      accept="image/*"
                      className="btn btn-primary"
                    />
                  </span>
                  <span id="response" className="hidden">
                    <span id="messages"></span>
                    <progress className="progress" id="file-progress" value="0">
                      <span>0</span>%
                    </progress>
                  </span>
                </Form.Label>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FileUpload
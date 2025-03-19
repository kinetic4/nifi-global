import React, { useState } from 'react'
import { Col, Collapse, Container, Row } from 'react-bootstrap'
import Card from '../../../../components/Card'

const FormTextarea = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <Container className="iq-textarea" fluid>
        <Row className="row">
          <Col sm={12} className="col-sm-12 col-lg-12 col-md-12">
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Default</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen(!open)}>
                  <i data-bs-toggle="collapse" href="#form-textarea-1" aria-expanded="false"
                    aria-controls="form-textarea-1">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open} id="form-textarea-1">
                  <Card><kbd className="bg-dark">
                    <pre id="Default" className="text-white"><code>
                      &lt;div className="form-group"&gt;<br />
                      &lt;label htmlFor="exampleFormControlTextarea1"&gt;textarea&lt;/label&gt;<br />
                      &lt;textarea className="form-control" id="exampleFormControlTextarea1" rows="3"&gt;&lt;/textarea&gt;<br />
                      &lt;/div&gt;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-group mb-0">
                  <label htmlFor="exampleFormControlTextarea1">textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Horizontal Input</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen1(!open1)}>
                  <i data-bs-toggle="collapse" href="#form-textarea-2" aria-expanded="false"
                    aria-controls="form-textarea-2">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open1} className="collapse" id="form-textarea-2">
                  <Card><kbd className="bg-dark">
                    <pre id="horizontal-input" className="text-white"><code>
                      &lt;div className="form-group row align-items-center"&gt;<br />
                      &lt;div className="col-sm-3 col-4"&gt;<br />
                      &lt;label className="col-form-label"&gt;Description&lt;/label&gt;<br />
                      &lt;/div&gt;<br />
                      &lt;div className="col-sm-9 col-8"&gt;<br />
                      &lt;textarea className="form-control" id="horizontalTextarea" rows="3" placeholder="Textarea"&gt;&lt;/textarea&gt;<br />
                      &lt;/div&gt;<br />
                      &lt;/div&gt;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-group mb-0 row align-items-center">
                  <div className="col-sm-3 col-4">
                    <label className="col-form-label">Description</label>
                  </div>
                  <div className="col-sm-9 col-8">
                    <textarea className="form-control" id="horizontalTextarea" rows="3"
                      placeholder="Textarea"></textarea>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Floating Label</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen2(!open2)}>
                  <i data-bs-toggle="collapse" href="#form-textarea-3" aria-expanded="false"
                    aria-controls="form-textarea-3">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open2} className="collapse" id="form-textarea-3">
                  <Card><kbd className="bg-dark">
                    <pre id="floating-label" className="text-white"><code>
                      &lt;div className="form-label-group"&gt;<br />
                      &lt;textarea className="form-control" id="exampleFormControlTextarea2" rows="4"<br />
                      placeholder="Label in Textarea"&gt;&lt;/textarea&gt;<br />
                      &lt;label&gt;Textarea&lt;/label&gt;<br />
                      &lt;/div&gt;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-label-group mb-0">
                  <textarea className="form-control" id="exampleFormControlTextarea2" rows="4"
                    placeholder="Label in Textarea"></textarea>
                  <label>Textarea</label>
                </div>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Counter</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen3(!open3)}>
                  <i data-bs-toggle="collapse" href="#form-textarea-4" aria-expanded="false"
                    aria-controls="form-textarea-4">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open3} id="form-textarea-4">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &lt;div className="form-label-group mb-0"&gt;<br />
                      &lt;textarea data-length="20" className="form-control" id="exampleFormControlTextarea3" rows="3"
                      placeholder="Counter"&gt;&lt;/textarea&gt;<br />
                      &lt;label&gt;Counter&lt;/label&gt;<br />
                      &lt;/div&gt;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-label-group mb-0">
                  <textarea data-length="20" className="form-control" id="exampleFormControlTextarea3" rows="3"
                    placeholder="Counter"></textarea>
                  <label>Counter</label>
                </div>
                <small className="counter-value-text float-right"><span className="char-count">0</span> / 20 </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormTextarea
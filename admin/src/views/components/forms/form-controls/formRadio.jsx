import React, { useState } from 'react'
import { Col, Collapse, Container, Row } from 'react-bootstrap'
import Card from '../../../../components/Card'

const FormRadio = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <Container fluid>
        <Row className="row">
          <Col sm={12}>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title className="card-title">
                  <h4>Default Radio Buttons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen(!open)}>
                  <i data-bs-toggle="collapse" href="#form-default-radio-1" aria-expanded="false"
                    aria-controls="form-default-radio-1">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open} id="form-default-radio-1">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input" name="bsradioq" id="radio1" defaultChecked&#62;<br />
                      &#60;label htmlFor="radio1" className="form-check-label pl-2"&#62;Active&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input" name="bsradioq" id="radio2"&#62;<br />
                      &#60;label htmlFor="radio2" className="form-check-label pl-2"&#62;Inactive&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input" name="bsradio1" id="radio3" disabled defaultChecked&#62;<br />
                      &#60;label htmlFor="radio3" className="form-check-label pl-2"&#62;Active - Disabled&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input" name="bsradio1" id="radio4" disabled&#62;<br />
                      &#60;label htmlFor="radio3" className="form-check-label pl-2"&#62;Inactive - Disabled&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap gap-4">

                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="bsradioq" id="radio1" defaultChecked />
                    <label htmlFor="radio1" className="form-check-label pl-2">Active</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="bsradioq" id="radio2" />
                    <label htmlFor="radio2" className="form-check-label pl-2">Inactive</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="bsradio1" id="radio3" disabled defaultChecked />
                    <label htmlFor="radio3" className="form-check-label pl-2">Active - Disabled</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="bsradio1" id="radio4" disabled />
                    <label htmlFor="radio3" className="form-check-label pl-2">Inactive - Disabled</label>
                  </div>

                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title className="card-title">
                  <h4>Custom Colored Radio Buttons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen1(!open1)}>
                  <i data-bs-toggle="collapse" href="#form-colored-radio-2" aria-expanded="false"
                    aria-controls="form-colored-radio-2">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open1} className="collapse" id="form-colored-radio-2">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-primary border-0" name="bsradioo" id="radio111"&#62;<br />
                      &#60;label htmlFor="radio111" className="form-check-label pl-2"&#62;Primary&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-success border-0" name="bsradioo" id="radio112"&#62;<br />
                      &#60;label htmlFor="radio112" className="form-check-label pl-2"&#62;Success&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-danger border-0" name="bsradioo" id="radio113"&#62;<br />
                      &#60;label htmlFor="radio113" className="form-check-label pl-2"&#62;Danger&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-warning border-0" name="bsradioo" id="radio114"&#62;<br />
                      &#60;label htmlFor="radio114" className="form-check-label pl-2"&#62;Warning&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-gray border-0" name="bsradioo" id="radio115"&#62;<br />
                      &#60;label htmlFor="radio115" className="form-check-label pl-2"&#62;Dark&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input bg-info border-0" name="bsradioo" id="radio116"&#62;<br />
                      &#60;label htmlFor="radio116" className="form-check-label pl-2"&#62;Info&#60;/label&#62;<br />
                      &#60;/div&#62;

                    </code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap   gap-4">

                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-primary border-0" name="bsradioo" id="radio111" />
                    <label htmlFor="radio111" className="form-check-label pl-2">Primary</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-success border-0" name="bsradioo" id="radio112" />
                    <label htmlFor="radio112" className="form-check-label pl-2">Success</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-danger border-0" name="bsradioo" id="radio113" />
                    <label htmlFor="radio113" className="form-check-label pl-2">Danger</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-warning border-0" name="bsradioo" id="radio114" />
                    <label htmlFor="radio114" className="form-check-label pl-2">Warning</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-gray border-0" name="bsradioo" id="radio115" />
                    <label htmlFor="radio115" className="form-check-label pl-2">Dark</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input bg-info border-0" name="bsradioo" id="radio116" />
                    <label htmlFor="radio116" className="form-check-label pl-2">Info</label>
                  </div>


                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title className="card-title">
                  <h4>Custom Radio Buttons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen2(!open2)}>
                  <i data-bs-toggle="collapse" href="#form-custom-radio-3" aria-expanded="false"
                    aria-controls="form-custom-radio-3">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open2} id="form-custom-radio-3">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="bsradioyy" id="radio122"&#62;<br />
                      &#60;label htmlFor="radio122" className="form-check-label "&#62;One&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="bsradioyy" id="radio1222"&#62;<br />
                      &#60;label htmlFor="radio1222" className="form-check-label "&#62;Two&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="bsradioyy" id="radio12222" defaultChecked&#62;<br />
                      &#60;label htmlFor="radio12222" className="form-check-label "&#62;Three&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="" id="radio1" defaultChecked&#62;<br />
                      &#60;label htmlFor="radio1" className="form-check-label "&#62;Four Checked&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="" id="radio1" disabled&#62;<br />
                      &#60;label htmlFor="radio1" className="form-check-label "&#62;Five disabled&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check select form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input " name="" id="radio1" disabled&#62;<br />
                      &#60;label htmlFor="radio1"&#62;Six Selected and disabled&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap   gap-4">

                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input " name="bsradioyy" id="radio122" />
                    <label htmlFor="radio122" className="form-check-label ">One</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input " name="bsradioyy" id="radio1222" />
                    <label htmlFor="radio1222" className="form-check-label ">Two</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input " name="bsradioyy" id="radio12222" defaultChecked />
                    <label htmlFor="radio12222" className="form-check-label ">Three</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input " name="" id="radio1" defaultChecked />
                    <label htmlFor="radio1" className="form-check-label ">Four Checked</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input " name="" id="radio1" disabled />
                    <label htmlFor="radio1" className="form-check-label ">Five disabled</label>
                  </div>
                  <div className="form-check select form-check-inline">
                    <input type="radio" className="form-check-input " name="" id="radio1" disabled />
                    <label htmlFor="radio1">Six Selected and disabled</label>
                  </div>

                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title className="card-title">
                  <h4>Colored Radio Buttons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen3(!open3)}>
                  <i data-bs-toggle="collapse" href="#form-colored-radio-4" aria-expanded="false"
                    aria-controls="form-colored-radio-4">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open3} id="form-colored-radio-4">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-primary" name="bsradio" id="radio12"&#62;<br />
                      &#60;label htmlFor="radio12" className="form-check-label "&#62;Primary&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-success" name="bsradio" id="radio13"&#62;<br />
                      &#60;label htmlFor="radio13" className="form-check-label "&#62;Success&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-danger" name="bsradio" id="radio14"&#62;<br />
                      &#60;label htmlFor="radio14" className="form-check-label "&#62;Danger&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-warning" name="bsradio" id="radio15"&#62;<br />
                      &#60;label htmlFor="radio15" className="form-check-label "&#62;Warning&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-gray" name="bsradio" id="radio16"&#62;<br />
                      &#60;label htmlFor="radio16" className="form-check-label "&#62;Dark&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline"&#62;<br />
                      &#60;input type="radio" className="form-check-input text-info" name="bsradio" id="radio17"&#62;<br />
                      &#60;label htmlFor="radio17" className="form-check-label "&#62;Info&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap   gap-4">

                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input text-primary" name="bsradio" id="radio12" />
                    <label htmlFor="radio12" className="form-check-label ">Primary</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input  text-success" name="bsradio" id="radio13" />
                    <label htmlFor="radio13" className="form-check-label ">Success</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input text-danger" name="bsradio" id="radio14" />
                    <label htmlFor="radio14" className="form-check-label ">Danger</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input text-warning" name="bsradio" id="radio15" />
                    <label htmlFor="radio15" className="form-check-label ">Warning</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input text-gray" name="bsradio" id="radio16" />
                    <label htmlFor="radio16" className="form-check-label ">Dark</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input text-info" name="bsradio" id="radio17" />
                    <label htmlFor="radio17" className="form-check-label ">Info</label>
                  </div>


                </div>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default FormRadio
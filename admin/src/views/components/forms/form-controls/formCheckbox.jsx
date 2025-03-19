import React, { useState } from 'react'
import { Row, Col, Collapse, Container } from 'react-bootstrap'
import Card from '../../../../components/Card'
import '@fortawesome/fontawesome-free/css/all.css';

const Formcheckbox = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <>
      <Container fluid>
        <Row className="row">
          <Col sm={12}>
            <Card className="card">
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Basic Checkbox</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen(!open)}>
                  <i data-bs-toggle="collapse" href="#form-basic-checkbox-1" aria-expanded="false"
                    aria-controls="form-basic-checkbox-1">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open} className="collapse" id="form-basic-checkbox-1">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="checkbox1"&#62;<br />
                      &#60;label htmlFor="checkbox1"&#62;Primary / Inactive&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" value="" id="checkbox2" defaultChecked&#62;<br />
                      &#60;label htmlFor="checkbox2"&#62;Primary / Active&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" value="" id="checkbox3" disabled=""&#62;<br />
                      &#60;label htmlFor="checkbox3"&#62;Disable / Inactive&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" value="" id="checkbox4" defaultChecked disabled=""&#62;<br />
                      &#60;label htmlFor="checkbox4"&#62;Active / Disable&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" id="checkbox1" />
                  <label htmlFor="checkbox1">Primary / Inactive</label>
                </div>{" "}
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" value="" id="checkbox2" defaultChecked />
                  <label htmlFor="checkbox2">Primary / Active</label>
                </div>{" "}
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" value="" id="checkbox3" disabled />
                  <label htmlFor="checkbox3">Disable / Inactive</label>
                </div>{" "}
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" value="" id="checkbox4" defaultChecked disabled />
                  <label htmlFor="checkbox4">Active / Disable</label>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom Checkbox</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen1(!open1)}>
                  <i data-bs-toggle="collapse" href="#form-custom-checkbox-2" aria-expanded="false"
                    aria-controls="form-custom-checkbox-2">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open1} className="collapse" id="form-custom-checkbox-2">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck5"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck5"&#62;Primary / Inactive&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck6" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck6"&#62;Primary - active&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck7" disabled=""&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck7"&#62;Primary - inactive - disabled&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck8" defaultChecked disabled=""&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck8"&#62;Primary - active - disabled&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck5" />
                  <label className="form-check-label" htmlFor="customCheck5">Primary / Inactive</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck6" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck6">Primary - active</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck7" disabled />
                  <label className="form-check-label" htmlFor="customCheck7">Primary - inactive - disabled</label>
                </div>{" "}
                <div className="form-check custom-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck8" defaultChecked disabled />
                  <label className="form-check-label" htmlFor="customCheck8">Primary - active - disabled</label>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Color</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen2(!open2)}>
                  <i data-bs-toggle="collapse" href="#form-color-checkbox-3" aria-expanded="false"
                    aria-controls="form-color-checkbox-3">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open2} className="collapse" id="form-color-checkbox-3">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-success border-0" id="customCheck-2" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-2"&#62;Success&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-danger border-0" id="customCheck-3" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-3"&#62;Danger&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-warning border-0" id="customCheck-4" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-4"&#62;Warning&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-dark border-0" id="customCheck-5" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-5"&#62;Dark&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-checkbox form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-info border-0" id="customCheck-6" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-6"&#62;Info&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="customCheck-1" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-1"> Primary</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-success border-0" id="customCheck-2" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-2">Success</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-danger border-0" id="customCheck-3" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-3">Danger</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-warning border-0" id="customCheck-4" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-4">Warning</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-dark border-0" id="customCheck-5" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-5">Dark</label>
                </div>{" "}
                <div className="form-check form-checkbox form-check-inline">
                  <input type="checkbox" className="form-check-input bg-info border-0" id="customCheck-6" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-6">Info</label>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom Color</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen3(!open3)}>
                  <i data-bs-toggle="collapse" href="#form-customcolor-checkbox-4" aria-expanded="false"
                    aria-controls="form-customcolor-checkbox-4">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open3} id="form-customcolor-checkbox-4">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-primary border-0" id="customCheck-11"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-11"&#62;Primary &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-success border-0" id="customCheck-22"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-22"&#62;Success&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-danger border-0" id="customCheck-33"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-33"&#62;Danger&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-warning border-0" id="customCheck-44"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-44"&#62;Warning&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-dark border-0" id="customCheck-55"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-55"&#62;Dark&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox custom-checkbox-color form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input bg-info border-0" id="customCheck-66"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-66"&#62; Info&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-primary border-0" id="customCheck-11" />
                  <label className="form-check-label" htmlFor="customCheck-11">Primary </label>
                </div>{" "}
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-success border-0" id="customCheck-22" />
                  <label className="form-check-label" htmlFor="customCheck-22">Success</label>
                </div>{" "}
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-danger border-0" id="customCheck-33" />
                  <label className="form-check-label" htmlFor="customCheck-33">Danger</label>
                </div>{" "}
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-warning border-0" id="customCheck-44" />
                  <label className="form-check-label" htmlFor="customCheck-44">Warning</label>
                </div>{" "}
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-dark border-0" id="customCheck-55" />
                  <label className="form-check-label" htmlFor="customCheck-55">Dark</label>
                </div>{" "}
                <div className="form-check custom-checkbox custom-checkbox-color form-check-inline">
                  <input type="checkbox" className="form-check-input bg-info border-0" id="customCheck-66" />
                  <label className="form-check-label" htmlFor="customCheck-66"> Info</label>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Change Icon</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen4(!open4)}>
                  <i data-bs-toggle="collapse" href="#form-changeicon-checkbox-5" aria-expanded="false"
                    aria-controls="form-changeicon-checkbox-5">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open4} id="form-changeicon-checkbox-5">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-20" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-20"&#62;&#60;i<br />
                      className="fa fa-commenting-o me-2"&#62;&#60;/i&#62;SMS&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-30" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-30"&#62;&#60;i className="fa fa-times
                      me-2"&#62;&#60;/i&#62;Cancel&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-40" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-40"&#62;&#60;i className="fa fa-file
                      me-2"&#62;&#60;/i&#62;File&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-50" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-50"&#62;&#60;i className="fa fa-bold
                      me-2"&#62;&#60;/i&#62;Bold&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-60" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-60"&#62;&#60;i<br />
                      className="fa fa-map-marker me-2"&#62;&#60;/i&#62;Location&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check custom-checkbox checkbox-icon form-check-inline"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-70" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-70"&#62;&#60;i className="fa fa-camera
                      me-2"&#62;&#60;/i&#62;Camera&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-10" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-10"><i className="fa fa-music me-2"></i>Music</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-20" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-20"><i class="fa-regular fa-comment-dots me-2"></i>SMS</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-30" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-30"><i className="fa fa-times me-2"></i>Cancel</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-40" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-40"><i className="fa fa-file me-2"></i>File</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-50" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-50"><i className="fa fa-bold me-2"></i>Bold</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-60" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-60"><i
                    className="fa fa-map-marker me-2"></i>Location</label>
                </div>{" "}
                <div className="form-check custom-checkbox checkbox-icon form-check-inline">
                  <input type="checkbox" className="form-check-input" id="customCheck-70" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-70"><i className="fa fa-camera me-2"></i>Camera</label>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Boolean Checkbox</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen5(!open5)}>
                  <i data-bs-toggle="collapse" href="#form-boolen-checkbox-6" aria-expanded="false"
                    aria-controls="form-boolen-checkbox-6">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open5} className="collapse" id="form-boolen-checkbox-6">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-t" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-t"&#62;True&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-check-inline me-2"&#62;<br />
                      &#60;input type="checkbox" className="form-check-input" id="customCheck-f"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="customCheck-f"&#62;False&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" id="customCheck-t" defaultChecked />
                  <label className="form-check-label" htmlFor="customCheck-t">True</label>
                </div>{" "}
                <div className="form-check form-check-inline me-2">
                  <input type="checkbox" className="form-check-input" id="customCheck-f" />
                  <label className="form-check-label" htmlFor="customCheck-f">False</label>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Formcheckbox
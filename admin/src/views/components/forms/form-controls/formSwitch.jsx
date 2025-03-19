import React, { useState } from 'react'
import { Col, Collapse, Row, Container } from 'react-bootstrap'
import Card from '../../../../components/Card'

const FormSwitch = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Basic Switch</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen(!open)} >
                  <i data-bs-toggle="collapse" href="#form-basci-switch-1" aria-expanded="false"
                    aria-controls="form-basci-switch-1">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open} id="form-basci-switch-1">
                  <Card><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                      defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Active Switch&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckDefault"&#62;Inactive Switch&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-info" type="checkbox" role="switch"
                      id="flexSwitchCheckCheckedDisabled" defaultChecked disabled&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled"&#62;Disable Active
                      Switch&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled"
                      disabled&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckDisabled"&#62;Disable Inactive Switch&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap gap-4">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                      defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active Switch</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Inactive Switch</label>
                  </div>

                  <div className="form-check form-switch">
                    <input className="form-check-input bg-info" type="checkbox" role="switch"
                      id="flexSwitchCheckCheckedDisabled" defaultChecked disabled />
                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disable Active
                      Switch</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled"
                      disabled />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disable Inactive Switch</label>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Text</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen1(!open1)}>
                  <i data-bs-toggle="collapse" href="#form-text-switch-2" aria-expanded="false"
                    aria-controls="form-text-switch-2">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open1} className="collapse" id="form-text-switch-2">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Primary&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="switch" className="toggles text-white bg-primary border-primary"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      On &#38;nbsp;&#38;nbsp;Off<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Secondary&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="tr_fal_switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="tr_fal_switch" className="toggles text-white bg-success border-success"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      Tr &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;fal
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Danger&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="y_n_switch" className="checkboxs" defaultChecked /&#62;<br />
                      &#60;label htmlFor="y_n_switch" className="toggles text-white bg-danger border-danger"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      Yes&#38;nbsp;&#38;nbsp;No<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap gap-4">
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Primary</p>
                    <div>
                      <input type="checkbox" id="switch" className="checkboxs " defaultChecked />
                      <label htmlFor="switch" className="toggles text-white bg-primary border-primary">
                        <p className="texts ps-1">
                          On &nbsp;&nbsp;Off
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Secondary</p>
                    <div>
                      <input type="checkbox" id="tr_fal_switch" className="checkboxs " defaultChecked />
                      <label htmlFor="tr_fal_switch" className="toggles text-white bg-success border-success">
                        <p className="texts ps-1">
                          Tr &nbsp;&nbsp;&nbsp;&nbsp;fal
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Danger</p>
                    <div>
                      <input type="checkbox" id="y_n_switch" className="checkboxs" defaultChecked />
                      <label htmlFor="y_n_switch" className="toggles text-white bg-danger border-danger">
                        <p className="texts ps-1">
                          Yes&nbsp;&nbsp;No
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>


            <Card >
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title >
                  <h4 className="card-title">Color</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen2(!open2)}>
                  <i data-bs-toggle="collapse" href="#form-color-switch-3" aria-expanded="false"
                    aria-controls="form-color-switch-3">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body >
                <Collapse in={open2} id="form-color-switch-3">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-primary border-0 text-primary" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Primary&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-success border-0 text-success" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Success&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-danger border-0 text-danger" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Danger&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-warning border-0 text-warning" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Warning&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input bg-gray border-0 text-gray" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Dark&#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="form-check form-switch"&#62;<br />
                      &#60;input className="form-check-input text-info" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                      defaultChecked&#62;<br />
                      &#60;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&#62;Info&#60;/label&#62;<br />
                      &#60;/div&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap gap-4">
                  <div className="form-check form-switch">
                    <input className="form-check-input bg-primary border-0 text-primary" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Primary</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input bg-success border-0 text-success" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Success</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input bg-danger border-0 text-danger" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Danger</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input bg-warning border-0 text-warning" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Warning</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input bg-gray border-0 text-gray" type="checkbox" role="switch"
                      id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark</label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input text-info" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                      defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Info</label>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card >
              <Card.Header className=" d-flex justify-content-between">
                <Card.Header.Title >
                  <h4 className="card-title">Icon</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen3(!open3)}>
                  <i data-bs-toggle="collapse" href="#form-icon-switch-4" aria-expanded="false"
                    aria-controls="form-icon-switch-4">
                    <svg width=" 20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body >
                <Collapse in={open3} id="form-icon-switch-4">
                  <Card ><kbd className="bg-dark">
                    <pre id="counter" className="text-white"><code>
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Primary&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="switchs" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="switchs" className="toggles text-white bg-primary border-primary"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      &#60;i className="fa fa-check custom-switch-size"&#62;&#60;/i&#62; &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i<br />
                      className="fa fa-check custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Success&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="succ-switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="succ-switch" className="toggles text-white bg-success border-success"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      &#60;i className="fa fa-check custom-switch-size"&#62;&#60;/i&#62; &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i
                      className="fa fa-check custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Danger&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="dan-switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="dan-switch" className="toggles text-white bg-danger border-danger"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      &#60;i className="fa fa-times custom-switch-size"&#62;&#60;/i&#62; &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i
                      className="fa fa-times custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Warning&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="war-switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="war-switch" className="toggles text-white bg-warning border-warning"&#62;<br />
                      &#60;p className="texts ps-1"&#62;<br />
                      &#60;i className="fa fa-exclamation-triangle custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i
                      className="fa fa-exclamation-triangle custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;Dark&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="dark-switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="dark-switch" className="toggles text-white bg-dark border-dark"&#62;<br />
                      &#60;p className="texts ps-2"&#62;<br />
                      &#60;i className="fa fa-thumb-tack custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i
                      className="fa fa-thumb-tack custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;div className="d-flex flex-column align-items-center gap-1"&#62;<br />
                      &#60;p className="m-0"&#62;info&#60;/p&#62;<br />
                      &#60;div&#62;<br />
                      &#60;input type="checkbox" id="info-switch" className="checkboxs " defaultChecked /&#62;<br />
                      &#60;label htmlFor="info-switch" className="toggles text-white bg-info border-info"&#62;<br />
                      &#60;p className="texts ps-2"&#62;<br />
                      &#60;i className="fa fa-info custom-switch-size"&#62;&#60;/i&#62; &#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#38;nbsp;&#60;i
                      className="fa fa-info custom-switch-size"&#62;&#60;/i&#62;<br />
                      &#60;/p&#62;<br />
                      &#60;/label&#62;<br />
                      &#60;/div&#62;<br />
                      &#60;/div&#62;<br /></code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="d-flex flex-wrap gap-4">
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Primary</p>
                    <div>
                      <input type="checkbox" id="switchs" className="checkboxs " defaultChecked />
                      <label htmlFor="switchs" className="toggles text-white bg-primary border-primary">
                        <p className="texts ps-1">
                          <i className="fa fa-check custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-check custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Success</p>
                    <div>
                      <input type="checkbox" id="succ-switch" className="checkboxs " defaultChecked />
                      <label htmlFor="succ-switch" className="toggles text-white bg-success border-success">
                        <p className="texts ps-1">
                          <i className="fa fa-check custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-check custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Danger</p>
                    <div>
                      <input type="checkbox" id="dan-switch" className="checkboxs " defaultChecked />
                      <label htmlFor="dan-switch" className="toggles text-white bg-danger border-danger">
                        <p className="texts ps-1">
                          <i className="fa fa-times custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-times custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Warning</p>
                    <div>
                      <input type="checkbox" id="war-switch" className="checkboxs " defaultChecked />
                      <label htmlFor="war-switch" className="toggles text-white bg-warning border-warning">
                        <p className="texts ps-1">
                          <i className="fa fa-exclamation-triangle custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-exclamation-triangle custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">Dark</p>
                    <div>
                      <input type="checkbox" id="dark-switch" className="checkboxs " defaultChecked />
                      <label htmlFor="dark-switch" className="toggles text-white bg-dark border-dark">
                        <p className="texts ps-2">
                          <i className="fa fa-thumb-tack custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-thumb-tack custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    <p className="m-0">info</p>
                    <div>
                      <input type="checkbox" id="info-switch" className="checkboxs " defaultChecked />
                      <label htmlFor="info-switch" className="toggles text-white bg-info border-info">
                        <p className="texts ps-2">
                          <i className="fa fa-info custom-switch-size"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                            className="fa fa-info custom-switch-size"></i>
                        </p>
                      </label>
                    </div>
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

export default FormSwitch
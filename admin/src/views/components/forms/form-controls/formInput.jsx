import React, { useState } from 'react'
import { InputGroup, Form, Row, Col, Collapse, DropdownButton, Dropdown, SplitButton, Button, Container, ButtonGroup, FormControl } from 'react-bootstrap'
import Card from '../../../../components/Card'

const FormInput = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} className="col-sm-12 col-lg-12 col-md-12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Default</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen(!open)}>
                  <i data-bs-toggle="collapse" href="#input-group-1" aria-expanded="false"
                    aria-controls="#input-group-1">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <div className="card-body">
                <Collapse in={open} className="collapse" id="input-group-1">
                  <Card><kbd className="bg-dark">
                    <pre id="default" className="text-white"><code>
                      &#60;InputGroup className="mb-4"&#62;<br />
                      &#60;InputGroup.Text id="basic-addon1"&#62;@&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      /&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup className="mb-4"&#62;<br />
                      &#60;Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      /&#62;<br />
                      &#60;InputGroup.Text id="basic-addon2"&#62;@example.com&#60;/InputGroup.Text&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;Form.Label htmlFor="basic-url" className='mb-0'&#62;Your URL&#60;/Form.Label&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Text id="basic-addon3"&#62;<br />
                      https://example.com/users/
                      &#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control id="basic-url" aria-describedby="basic-addon3" /&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup className="mb-4"&#62;<br />
                      &#60;InputGroup.Text&#62;$&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control aria-label="Amount (to the nearest dollar)" /&#62;<br />
                      &#60;InputGroup.Text&#62;.00&#60;/InputGroup.Text&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup&#62;<br />
                      &#60;InputGroup.Text&#62;With textarea&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control as="textarea" aria-label="With textarea" style= "height: "87.2px" /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                    </code></pre>
                  </kbd></Card>
                </Collapse>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-4">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url" className='mb-0'>Your URL</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-4">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>With textarea</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" style={{ height: "87.2px" }} />
                </InputGroup>
              </div>
            </Card>

            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Simple Icon</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen1(!open1)}>
                  <i data-bs-toggle="collapse" href="#input-group-2" aria-expanded="false"
                    aria-controls="#input-group-2">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open1} id="input-group-2">
                  <Card><kbd className="bg-dark">
                    <pre id="simple-icons" className="text-white"><code>
                      &#x3C;div className=&#x22;input-group mb-4&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-prepend&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon4&#x22;&#x3E;&#x3C;i className=&#x22;las la-bell font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Notification&#x22; aria-label=&#x22;notification&#x22;<br />
                      aria-describedby=&#x22;basic-addon4&#x22;&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;p className=&#x22;text-end&#x22;&#x3E;&#x3C;i className=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;<br />
                      &#x3C;div className=&#x22;input-group&#x22;&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Notification&#x22; aria-label=&#x22;notification&#x22;<br />
                      aria-describedby=&#x22;basic-addon5&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-append&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon5&#x22;&#x3E;&#x3C;i className=&#x22;las la-bell font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;/div&#x3E;<br /></code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Notification" aria-label="notification"
                    aria-describedby="basic-addon4" />
                </div>
                <p className="text-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>Right
                </p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Notification" aria-label="notification"
                    aria-describedby="basic-addon5" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon5"><svg xmlns="http://www.w3.org/2000/svg"
                      width="20px" Height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg></span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Spinning Icon</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen2(!open2)}>
                  <i data-bs-toggle="collapse" href="#input-group-3" aria-expanded="false"
                    aria-controls="#input-group-3">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open2} id="input-group-3">
                  <Card className="card"><kbd className="bg-dark">
                    <pre id="spinning-icon" className="text-white"><code>
                      &#x3C;div className=&#x22;input-group mb-4&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-prepend&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon6&#x22;&#x3E;&#x3C;i className=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;<br />
                      aria-describedby=&#x22;basic-addon6&#x22;&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;div className=&#x22;input-group&#x22;&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;<br />
                      aria-describedby=&#x22;basic-addon7&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-append&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon7&#x22;&#x3E;&#x3C;i className=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;/div&#x3E;<br /></code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon6"><svg width="24" height="24" viewBox="0 0 24 24"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Loading icon">
                        <g id="Group 33568">
                          <circle id="Ellipse 125" cx="12" cy="5" r="2" fill="black" />
                          <circle id="Ellipse 130" cx="17" cy="7" r="2" fill="black" />
                          <circle id="Ellipse 127" cx="12" cy="19" r="2" fill="black" />
                          <circle id="Ellipse 132" cx="7" cy="17" r="2" fill="#828282" />
                          <circle id="Ellipse 131" cx="17" cy="17" r="2" fill="black" />
                          <circle id="Ellipse 128" cx="19" cy="12" r="2" fill="black" />
                          <circle id="Ellipse 129" cx="5" cy="12" r="2" fill="#828282" />
                          <circle id="Ellipse 133" cx="7" cy="7" r="2" fill="#828282" />
                        </g>
                      </g>
                    </svg></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Spinners" aria-label="spinners"
                    aria-describedby="basic-addon6" />
                </div>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Spinners" aria-label="spinners"
                    aria-describedby="basic-addon7" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon7"><svg width="24" height="24" viewBox="0 0 24 24"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Loading icon">
                        <g id="Group 33568">
                          <circle id="Ellipse 125" cx="12" cy="5" r="2" fill="black" />
                          <circle id="Ellipse 130" cx="17" cy="7" r="2" fill="black" />
                          <circle id="Ellipse 127" cx="12" cy="19" r="2" fill="black" />
                          <circle id="Ellipse 132" cx="7" cy="17" r="2" fill="#828282" />
                          <circle id="Ellipse 131" cx="17" cy="17" r="2" fill="black" />
                          <circle id="Ellipse 128" cx="19" cy="12" r="2" fill="black" />
                          <circle id="Ellipse 129" cx="5" cy="12" r="2" fill="#828282" />
                          <circle id="Ellipse 133" cx="7" cy="7" r="2" fill="#828282" />
                        </g>
                      </g>
                    </svg></span>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Switch</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen3(!open3)}>
                  <i data-bs-toggle="collapse" href="#input-group-4" aria-expanded="false"
                    aria-controls="#input-group-4">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open3} id="input-group-4">
                  <Card><kbd className="bg-dark">
                    <pre id="switch" className="text-white"><code>
                      &#x3C;p&#x3E;&#x3C;i className=&#x22;las la-long-arrow-alt-left mr-1&#x22;&#x3E;&#x3C;/i&#x3E; Left &#x3C;/p&#x3E;<br />
                      &#x3C;div className=&#x22;input-group mb-4&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-prepend&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon6&#x22;&#x3E;&#x3C;i className=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;<br />
                      aria-describedby=&#x22;basic-addon6&#x22;&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;p className=&#x22;text-end&#x22;&#x3E;&#x3C;i className=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;<br />
                      &#x3C;div className=&#x22;input-group&#x22;&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;<br />
                      aria-describedby=&#x22;basic-addon7&#x22;&#x3E;<br />
                      &#x3C;div className=&#x22;input-group-append&#x22;&#x3E;<br />
                      &#x3C;span className=&#x22;input-group-text&#x22; id=&#x22;basic-addon7&#x22;&#x3E;&#x3C;i className=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                    </code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <div className="custom-control custom-switch custom-switch-color">
                        <input type="checkbox" className="custom-control-input bg-primary" id="customSwitch01"
                          checked />
                        <label className="custom-control-label" htmlFor="customSwitch01"></label>
                      </div>
                    </div>
                  </div>
                  <input type="text" className="form-control" placeholder="Switch" aria-label="switch" />
                </div>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Switch" aria-label="switch" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <div className="custom-control custom-switch custom-switch-color">
                        <input type="checkbox" className="custom-control-input bg-success" id="customSwitch02"
                          checked />
                        <label className="custom-control-label" htmlFor="customSwitch02"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Buttons with Dropdowns</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen4(!open4)}>
                  <i data-bs-toggle="collapse" href="#input-group-5" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open4} id="input-group-5">
                  <Card><kbd className="bg-dark">
                    <pre id="buttons-with-dropdown" className="text-white"><code>
                      &#60;p&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18" /&#62;<br />
                      &#60;/svg&#62; Left &#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;DropdownButton
                      variant="primary"
                      title="Dropdown"
                      id="input-group-dropdown-1"
                      &#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Another action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Something else here&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Divider /&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Separated link&#60;/Dropdown.Item&#62;<br />
                      &#60;/DropdownButton&#62;<br />
                      &#60;Form.Control aria-label="Text input with dropdown button" /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;p className="text-end"&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" /&#62;<br />
                      &#60;/svg&#62;Right&#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control aria-label="Text input with dropdown button" /&#62;<br />

                      &#60;DropdownButton
                      variant="primary"
                      title="Dropdown"
                      id="input-group-dropdown-2"
                      align="end"
                      &#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Another action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Something else here&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Divider /&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Separated link&#60;/Dropdown.Item&#62;<br />
                      &#60;/DropdownButton&#62;<br />
                      &#60;/InputGroup&#62;<br /></code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-4">
                  <DropdownButton
                    variant="primary"
                    title={
                      <span className="d-flex gap-1 align-items-center">
                        Dropdown
                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.042 2.345 4 3.204 4h9.592c.86 0 1.32 1.042.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </span>
                    }
                    id="input-group-dropdown-1"
                    bsPrefix='d-flex gap-1 align-items-center btn'
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup>
                  <Form.Control aria-label="Text input with dropdown button" />

                  <DropdownButton
                    variant="primary"
                    title={
                      <span className="d-flex gap-1 align-items-center">
                        Dropdown
                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.042 2.345 4 3.204 4h9.592c.86 0 1.32 1.042.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </span>
                    }
                    id="input-group-dropdown-2"
                    align="end"
                    bsPrefix='d-flex gap-1 align-items-center btn'
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Segmented Buttons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen5(!open5)}>
                  <i data-bs-toggle="collapse" href="#input-group-6" aria-expanded="false"
                    aria-controls="#input-group-6">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open5} id="input-group-6">
                  <Card><kbd className="bg-dark">
                    <pre id="segmented-buttons" className="text-white"><code>
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;SplitButton
                      variant="primary"
                      title="Action"
                      id="segmented-button-dropdown-1"
                      &#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Another action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Something else here&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Divider /&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Separated link&#60;/Dropdown.Item&#62;<br />
                      &#60;/SplitButton&#62;<br />
                      &#60;Form.Control aria-label="Text input with dropdown button" /&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control aria-label="Text input with dropdown button" /&#62;<br />
                      &#60;SplitButton
                      variant="primary"
                      title="Action"
                      id="segmented-button-dropdown-2"
                      alignRight
                      &#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Another action&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Something else here&#60;/Dropdown.Item&#62;<br />
                      &#60;Dropdown.Divider /&#62;<br />
                      &#60;Dropdown.Item href="#"&#62;Separated link&#60;/Dropdown.Item&#62;<br />
                      &#60;/SplitButton&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-4">
                  <ButtonGroup>
                    <Button variant="primary" className="me-1">Action</Button>
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#action/1">Action</Dropdown.Item>
                        <Dropdown.Item href="#action/2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#action/3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#action/4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <FormControl aria-label="Text input with segmented dropdown button" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup className="mb-4">
                  <FormControl aria-label="Text input with segmented dropdown button" />
                  <ButtonGroup>
                    <Button variant="primary" className="me-1">Action</Button>
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#action/1">Action</Dropdown.Item>
                        <Dropdown.Item href="#action/2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#action/3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#action/4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom Select</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen6(!open6)}>
                  <i data-bs-toggle="collapse" href="#input-group-7" aria-expanded="false"
                    aria-controls="#input-group-7">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open6} id="input-group-7">
                  <Card><kbd className="bg-dark">
                    <pre id="custom-select" className="text-white"><code>
                      &#60;div className="input-group mb-3"&#62;<br />
                      &#60;label className="input-group-text" htmlFor="inputGroupSelect01"&#62;Options&#60;/label&#62;<br />
                      &#60;select className="form-select" id="inputGroupSelect01"&#62;<br />
                      &#60;option selected&#62;Choose...&#60;/option&#62;<br />
                      &#60;option value="1"&#62;One&#60;/option&#62;<br />
                      &#60;option value="2"&#62;Two&#60;/option&#62;<br />
                      &#60;option value="3"&#62;Three&#60;/option&#62;<br />
                      &#60;/select&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group mb-3"&#62;<br />
                      &#60;select className="form-select" id="inputGroupSelect02"&#62;<br />
                      &#60;option selected&#62;Choose...&#60;/option&#62;<br />
                      &#60;option value="1"&#62;One&#60;/option&#62;<br />
                      &#60;option value="2"&#62;Two&#60;/option&#62;<br />
                      &#60;option value="3"&#62;Three&#60;/option&#62;<br />
                      &#60;/select&#62;<br />
                      &#60;label className="input-group-text" htmlFor="inputGroupSelect02"&#62;Options&#60;/label&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group mb-3"&#62;<br />
                      &#60;button className="btn btn-outline-secondary" type="button"&#62;Button&#60;/button&#62;<br />
                      &#60;select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon"&#62;<br />
                      &#60;option selected&#62;Choose...&#60;/option&#62;<br />
                      &#60;option value="1"&#62;One&#60;/option&#62;<br />
                      &#60;option value="2"&#62;Two&#60;/option&#62;<br />
                      &#60;option value="3"&#62;Three&#60;/option&#62;<br />
                      &#60;/select&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group"&#62;<br />
                      &#60;select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon"&#62;<br />
                      &#60;option selected&#62;Choose...&#60;/option&#62;<br />
                      &#60;option value="1"&#62;One&#60;/option&#62;<br />
                      &#60;option value="2"&#62;Two&#60;/option&#62;<br />
                      &#60;option value="3"&#62;Three&#60;/option&#62;<br />
                      &#60;/select&#62;<br />
                      &#60;button className="btn btn-outline-secondary" type="button"&#62;Button&#60;/button&#62;<br />
                      &#60;/div&#62;<br />
                    </code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                </div>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" type="button">Button</button>
                  <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <div className="input-group">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Sizing</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen7(!open7)}>
                  <i data-bs-toggle="collapse" href="#input-group-8" aria-expanded="false"
                    aria-controls="#input-group-8">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open7} className="collapse" id="input-group-8">
                  <Card><kbd className="bg-dark">
                    <pre id="sizing" className="text-white"><code>
                      &#60;InputGroup size="sm" className="mb-3"&#62;<br />
                      &#60;InputGroup.Text id="inputGroup-sizing-sm"&#62;Small&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;br /&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Text id="inputGroup-sizing-default"&#62;<br />
                      Default
                      &#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;br /&#62;<br />
                      &#60;InputGroup size="lg"&#62;<br />
                      &#60;InputGroup.Text id="inputGroup-sizing-lg"&#62;Large&#60;/InputGroup.Text&#62;
                      &#60;Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      /&#62;<br />
                      &#60;/InputGroup&#62; </code></pre>
                  </kbd></Card>
                </Collapse>
                <InputGroup size="sm" className="mb-4">
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>

                <InputGroup className="mb-4">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Default
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Dropdown Icon</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen8(!open8)}>
                  <i data-bs-toggle="collapse" href="#input-group-9" aria-expanded="false"
                    aria-controls="#input-group-9">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body in={open8}>
                <Collapse id="input-group-9">
                  <Card><kbd className="bg-dark">
                    <pre id="dropdown-icon" className="text-white"><code>
                      &#x3C;div className=&#x22;input-group mb-4&#x22;&#x3E;<br />

                      &#x3C;div className=&#x22;input-group-prepend&#x22;&#x3E;<br />
                      &#x3C;button className=&#x22;btn btn-primary  dropone dropdown-toggle&#x22; type=&#x22;button&#x22; data-toggle=&#x22;dropdown&#x22;<br />
                      aria-haspopup=&#x22;true&#x22; aria-expanded=&#x22;false&#x22;&#x3E;&#x3C;i className=&#x22;las la-cog font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/button&#x3E;<br />
                      &#x3C;div className=&#x22;dropdown-menu&#x22;&#x3E;<br />
                      &#x3C;a className=&#x22;dropdown-item&#x22; href=&#x22;javascript:void(0);&#x22;&#x3E;Action&#x3C;/a&#x3E;<br />
                      &#x3C;a className=&#x22;dropdown-item&#x22; href=&#x22;javascript:void(0);&#x22;&#x3E;Another action&#x3C;/a&#x3E;<br />
                      &#x3C;a className=&#x22;dropdown-item&#x22; href=&#x22;javascript:void(0);&#x22;&#x3E;Something else here&#x3C;/a&#x3E;<br />
                      &#x3C;div role=&#x22;separator&#x22; className=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;<br />
                      &#x3C;a className=&#x22;dropdown-item&#x22; href=&#x22;javascript:void(0);&#x22;&#x3E;Separated link&#x3C;/a&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;/div&#x3E;<br />
                      &#x3C;input type=&#x22;text&#x22; className=&#x22;form-control&#x22; placeholder=&#x22;Dropdown&#x22; aria-label=&#x22;dropdown&#x22;&#x3E;<br />
                      &#x3C;/div&#x3E;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <div className="input-group mb-4">

                  <div className="input-group-prepend">
                    <button className="btn btn-primary  dropone dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20px"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg></button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">Action</a>
                      <a className="dropdown-item" href="javascript:void(0);">Another action</a>
                      <a className="dropdown-item" href="javascript:void(0);">Something else here</a>
                      <div role="separator" className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javascript:void(0);">Separated link</a>
                    </div>
                  </div>
                  <input type="text" className="form-control" placeholder="Dropdown" aria-label="dropdown" />
                </div>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right </p>
                <div className="input-group">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                  <div className="input-group-append">
                    <button className="btn btn-success dropone dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20px"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg></button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                      <div role="separator" className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Checkboxes</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen9(!open9)}>
                  <i data-bs-toggle="collapse" href="#input-group-10" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open9} id="input-group-10">
                  <Card><kbd className="bg-dark">
                    <pre id="checkbox" className="text-white"><code>
                      &#60;p&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18" /&#62;<br />
                      &#60;/svg&#62; Left &#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Checkbox aria-label="Checkbox for following text input" /&#62;<br />
                      &#60;Form.Control aria-label="Text input with checkbox" /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;p className="text-end"&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" /&#62;<br />
                      &#60;/svg&#62;Right&#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control aria-label="Text input with checkbox" /&#62;<br />
                      &#60;InputGroup.Checkbox aria-label="Checkbox for following text input" /&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup>
                  <Form.Control aria-label="Text input with checkbox" placeholder='Checkbox' />
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Radios</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen10(!open10)}>
                  <i data-bs-toggle="collapse" href="#input-group-10" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open10} id="input-group-10">
                  <Card><kbd className="bg-dark">
                    <pre id="checkbox" className="text-white"><code>
                      &#60;p&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18" /&#62;<br />
                      &#60;/svg&#62; Left &#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Radio aria-label="Radio for following text input" /&#62;<br />
                      &#60;Form.Control aria-label="Text input with checkbox" /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;p className="text-end"&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" /&#62;<br />
                      &#60;/svg&#62;Right&#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control aria-label="Text input with checkbox" /&#62;<br />
                      &#60;InputGroup.Radio aria-label="Radio for following text input" /&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-4">
                  <InputGroup.Radio aria-label="Radio for following text input" />
                  <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup>
                  <Form.Control aria-label="Text input with checkbox" />
                  <InputGroup.Radio aria-label="Radio for following text input" />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Multiple inputs</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen11(!open11)}>
                  <i data-bs-toggle="collapse" href="#input-group-10" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open11} id="input-group-11">
                  <Card><kbd className="bg-dark">
                    <pre id="checkbox" className="text-white"><code>
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Text&#62;First and last name&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control aria-label="First name" /&#62;<br />
                      &#60;Form.Control aria-label="Last name" /&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <InputGroup>
                  <InputGroup.Text>First and last name</InputGroup.Text>
                  <Form.Control aria-label="First name" />
                  <Form.Control aria-label="Last name" />
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Multiple addons</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen12(!open12)}>
                  <i data-bs-toggle="collapse" href="#input-group-10" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open12} id="input-group-10">
                  <Card><kbd className="bg-dark">
                    <pre id="checkbox" className="text-white"><code>
                      &#60;p&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18" /&#62;<br />
                      &#60;/svg&#62; Left &#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;InputGroup.Text&#62;$&#60;/InputGroup.Text&#62;<br />
                      &#60;InputGroup.Text&#62;0.00&#60;/InputGroup.Text&#62;<br />
                      &#60;Form.Control aria-label="Dollar amount (with dot and two decimal places)" /&#62;<br />
                      &#60;/InputGroup&#62;<br />
                      &#60;p className="text-end"&#62;&#60;svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor"&#62;<br />
                      &#60;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" /&#62;<br />
                      &#60;/svg&#62;Right&#60;/p&#62;<br />
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control aria-label="Dollar amount (with dot and two decimal places)" /&#62;<br />
                      &#60;InputGroup.Text&#62;$&#60;/InputGroup.Text&#62;<br />
                      &#60;InputGroup.Text&#62;0.00&#60;/InputGroup.Text&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                  <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup>
                  <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom select</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen13(!open13)}>
                  <i data-bs-toggle="collapse" href="#input-group-10" aria-expanded="false"
                    aria-controls="#input-group-11">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open13} id="input-group-10">
                  <Card><kbd className="bg-dark">
                    <pre id="checkbox" className="text-white"><code>
                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Button variant="outline-secondary" id="button-addon1"&#62;<br />
                      Button
                      &#60;/Button&#62;<br />
                      &#60;Form.Control
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      /&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      /&#62;<br />
                      &#60;Button variant="outline-secondary" id="button-addon2"&#62;<br />
                      Button
                      &#60;/Button&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup className="mb-3"&#62;<br />
                      &#60;Button variant="outline-secondary"&#62;Button&#60;/Button&#62;<br />
                      &#60;Button variant="outline-secondary"&#62;Button&#60;/Button&#62;<br />
                      &#60;Form.Control aria-label="Example text with two button addons" /&#62;<br />
                      &#60;/InputGroup&#62;<br />

                      &#60;InputGroup&#62;<br />
                      &#60;Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username with two button addons"
                      /&#62;<br />
                      &#60;Button variant="outline-secondary"&#62;Button&#60;/Button&#62;<br />
                      &#60;Button variant="outline-secondary"&#62;Button&#60;/Button&#62;<br />
                      &#60;/InputGroup&#62;</code></pre>
                  </kbd></Card>
                </Collapse>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-4">
                  <Button variant="primary" id="button-addon1">
                    Button
                  </Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup className="mb-4">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary" id="button-addon2">
                    Button
                  </Button>
                </InputGroup>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg> Left </p>
                <InputGroup className="mb-4">
                  <Button variant="outline-primary me-1">Button</Button>{" "}
                  <Button variant="outline-primary">Button</Button>
                  <Form.Control aria-label="Example text with two button addons" />
                </InputGroup>
                <p className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="20px" Height="20px" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>Right</p>
                <InputGroup>
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username with two button addons"
                    className=''
                  />
                  <Button variant="outline-primary me-1">Button</Button>{" "}
                  <Button variant="outline-primary">Button</Button>
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom file input</h4>
                </Card.Header.Title>
                <div className="header-action" onClick={() => setOpen14(!open14)}>
                  <i data-bs-toggle="collapse" href="#input-group-15" aria-expanded="false"
                    aria-controls="#input-group-15">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </i>
                </div>
              </Card.Header>
              <Card.Body>
                <Collapse in={open14} id="input-group-15">
                  <Card><kbd className="bg-dark">
                    <pre id="custom-file-input" className="text-white"><code>
                      &#60;div className="input-group mb-3"&#62;<br />
                      &#60;label className="input-group-text" htmlFor="inputGroupFile01"&#62;Upload&#60;/label&#62;<br />
                      &#60;input type="file" className="form-control" id="inputGroupFile01"&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group mb-3"&#62;<br />
                      &#60;input type="file" className="form-control" id="inputGroupFile02"&#62;<br />
                      &#60;label className="input-group-text" htmlFor="inputGroupFile02"&#62;Upload&#60;/label&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group mb-3"&#62;
                      &#60;button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"&#62;Button&#60;/button&#62;<br />
                      &#60;input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"
                      aria-label="Upload"&#62;<br />
                      &#60;/div&#62;<br />

                      &#60;div className="input-group"&#62;<br />
                      &#60;input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"&#62;<br />
                      &#60;button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"&#62;Button&#60;/button&#62;<br />
                      &#60;/div&#62;<br />
                    </code></pre>
                  </kbd></Card>
                </Collapse>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                  <input type="file" className="form-control" id="inputGroupFile01" />
                </div>

                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputGroupFile02" />
                  <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>

                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                  <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"
                    aria-label="Upload" />
                </div>

                <div className="input-group">
                  <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload" />
                  <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormInput
import React, { useState } from 'react';
import { Tab, Nav, Form, Button, Row, Col, Card } from 'react-bootstrap';

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('personal-info');

  return (
    <div className="container-fluid">
      <Tab.Container id="profile-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Body className="p-0">
                <Nav variant="tabs" className="nav-tabs mb-0 d-flex">
                  <Nav.Item className="col-md-3 p-0">
                    <Nav.Link eventKey="personal-info">Personal Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-md-3 p-0">
                    <Nav.Link eventKey="change-password">Change Password</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-md-3 p-0">
                    <Nav.Link eventKey="email-sms">Email and SMS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-md-3 p-0">
                    <Nav.Link eventKey="manage-contact">Manage Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={12}>
            <Tab.Content>
              <Tab.Pane eventKey="personal-info">
                <PersonalInformation />
              </Tab.Pane>

              <Tab.Pane eventKey="change-password">
                <ChangePassword />
              </Tab.Pane>

              <Tab.Pane eventKey="email-sms">
                <EmailSMS />
              </Tab.Pane>

              <Tab.Pane eventKey="manage-contact">
                <ManageContact />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

const PersonalInformation = () => (
  <Card>
    <Card.Header>
      <h4 className="card-title">Personal Information</h4>
    </Card.Header>
    <Card.Body>
      <Form>
        <Row className="align-items-center">
          <Col md={12} className="mb-3">
            <div className="profile-img-edit">
              <div className="crm-profile-img-edit"> 
                 <img src={generatePath('/assets/images/user/1.jpg')} alt="profile-pic" className="crm-profile-pic rounded-circle avatar-100" />
                <div className="crm-p-image bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                  <input class="file-upload" type="file" accept="image/*"></input>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col sm={6} className="form-group">

            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" defaultValue="Barry" />

          </Col>
          <Col sm={6} className="form-group">

            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" defaultValue="Tech" />

          </Col>
          <Col sm={6} className="form-group">

            <Form.Label>User Name:</Form.Label>
            <Form.Control type="text" defaultValue="Barry@01" />

          </Col>
          <Col sm={6} className="form-group">

            <Form.Label>City:</Form.Label>
            <Form.Control type="text" defaultValue="Atlanta" />

          </Col>
          <Col sm={6} className="form-group">

            <Form.Label>Gender:</Form.Label><br />
            <Form.Check inline label="Male" name="gender" type="radio" defaultChecked />
            <Form.Check inline label="Female" name="gender" type="radio" />

          </Col>
          <Col sm={6} className="form-group">

            <Form.Label for="dob">Date of Birth:</Form.Label>
            <Form.Control type="date" id="dob" defaultValue="1984-01-24" />

          </Col>
          <Col sm={6} className="form-group">
            <Form.Label>Marital Status:</Form.Label>
            <Form.Select id="exampleFormControlSelect1" defaultValue="Single">
              <option>Single</option>
              <option>Married</option>
              <option>Widowed</option>
              <option>Divorced</option>
              <option>Separated</option>
            </Form.Select>
          </Col>

          <Form.Group as={Col} sm={6} className="form-group">
            <Form.Label>Age:</Form.Label>
            <Form.Select id="exampleFormControlSelect2" defaultValue="33-45">
              <option>12-18</option>
              <option>19-32</option>
              <option>33-45</option>
              <option>46-62</option>
              <option>63 {'>'}</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} sm={6} className="form-group">
            <Form.Label>Country:</Form.Label>
            <Form.Select id="exampleFormControlSelect3" defaultValue="USA">
              <option>Canada</option>
              <option>Noida</option>
              <option>USA</option>
              <option>India</option>
              <option>Africa</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} sm={6} className="form-group">
            <Form.Label>State:</Form.Label>
            <Form.Select id="exampleFormControlSelect4" defaultValue="Georgia">
              <option>California</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Connecticut</option>
              <option>Louisiana</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} sm={12} className="form-group">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="address"
              defaultValue={`37 Cardinal Lane\nPetersburg, VA 23803\nUnited States of America\nZip Code: 85001`}
              style={{ lineHeight: '22px' }}
            />
          </Form.Group>
        </Row>
        <Button variant="outline-primary" className="me-2">Cancel</Button>{""}
        <Button type="submit" className="ms-1">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

const ChangePassword = () => (
  <Card>
    <Card.Header>
      <h4 className="card-title">Change Password</h4>
    </Card.Header>
    <Card.Body>
      <Form>
        <Form.Group controlId="cpass" className="form-group">
          <Form.Label>Current Password:</Form.Label>
          <a href="/auth/resetPassword" class="float-end">Forgot Password</a>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group controlId="npass" className="form-group">
          <Form.Label>New Password:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group controlId="vpass" className="form-group">
          <Form.Label>Verify Password:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="outline-primary" className="me-2">Cancel</Button>
        <Button type="submit" className="ms-1">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

const EmailSMS = () => (
  <Card>
    <Card.Header>
      <h4 className="card-title">Email and SMS</h4>
    </Card.Header>
    <Card.Body>
      <Form>
        <Row className="align-items-center form-group">
          <Col md={3} className="form-label" for="emailnotification">Email Notification:</Col>
          <Col md={9}>
            <Form.Check type="switch" id="inlineCheckbox1" className="form-check form-check-inline form-switch" defaultChecked />
          </Col>
        </Row>
        <Row className="align-items-center form-group">
          <Col md={3} className="form-label">SMS Notification:</Col>
          <Col md={9}>
            <Form.Check type="switch" id="inlineCheckbox1" className="form-check form-check-inline form-switch" defaultChecked />
          </Col>
        </Row>
        <Row className="align-items-center form-group">
          <Form.Label column md={3}>
            When To Email
          </Form.Label>
          <Col md={9}>
            <Form.Check
              type="checkbox"
              id="defaultCheck11"
              label="You have new notifications."
            />
            <Form.Check
              type="checkbox"
              id="defaultCheck12"
              label="You're sent a direct message."
            />
            <Form.Check
              type="checkbox"
              id="defaultCheck13"
              label="Someone adds you as a connection."
            />
          </Col>
        </Row>

        <Row className="align-items-center form-group">
          <Form.Label column md={3}>
            When To Escalate Emails
          </Form.Label>
          <Col md={9}>
            <Form.Check
              type="checkbox"
              id="defaultCheck14"
              label="Upon new order."
            />
            <Form.Check
              type="checkbox"
              id="defaultCheck15"
              label="New membership approval."
            />
            <Form.Check
              type="checkbox"
              id="defaultCheck16"
              label="Member registration."
            />
          </Col>
        </Row>
        <Button variant="outline-primary" className="me-2">Cancel</Button>
        <Button type="submit" className="ms-1">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

const ManageContact = () => (
  <Card>
    <Card.Header>
      <h4 className="card-title">Manage Contact</h4>
    </Card.Header>
    <Card.Body>
      <Form>
        <Form.Group controlId="cno" className="form-group">
          <Form.Label>Contact Number:</Form.Label>
          <Form.Control type="text" defaultValue="001 2536 123 458" />
        </Form.Group>
        <Form.Group controlId="email" className="form-group">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" defaultValue="Barryjone@demo.com" />
        </Form.Group>
        <Form.Group controlId="url" className="form-group">
          <Form.Label>Url:</Form.Label>
          <Form.Control type="text" defaultValue="https://getbootstrap.com" />
        </Form.Group>
        <Button variant="outline-primary" className="me-2">Cancel</Button>
        <Button type="submit" className="ms-1">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

export default UserProfile;

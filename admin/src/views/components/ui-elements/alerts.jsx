import React from 'react';
import { Card, Row, Col, Alert, Button, Container } from 'react-bootstrap';

const basicAlerts = [
  {
    variant: 'success',
    icon: (
      <i className="fas fa-thumbs-up"></i>
    ),
    message: 'This is a success alert—check it out!',
  },
  {
    variant: 'info',
    icon: (
      <i className="fas fa-bell"></i>
    ),
    message: 'This is an info alert—check it out!',
  },
  {
    variant: 'warning',
    icon: (
      <i className="fas fa-bell"></i>
    ),
    message: 'This is a warning alert—check it out!',
  },
  {
    variant: 'danger',
    icon: (
      <i className="far fa-life-ring"></i>
    ),
    message: 'This is a danger alert—check it out!',
  },
];

const basicIconsAlerts = [
  {
    variant: 'primary',
    icon: 'info-fill',
    message: 'An example alert with an icon',
  },
  {
    variant: 'success',
    icon: 'check-circle-fill3',
    message: 'An example success alert with an icon',
  },
  {
    variant: 'warning',
    icon: 'exclamation-triangle-fill01',
    message: 'An example warning alert with an icon',
  },
  {
    variant: 'danger',
    icon: 'exclamation-triangle-fill01',
    message: 'An example danger alert with an icon',
  },
];

const basicLinealerts = [
  {
    variant: 'success',
    iconClass: 'fas fa-thumbs-up',
    message: 'This is a success alert—check it out!',
  },
  {
    variant: 'info',
    iconClass: 'fas fa-bell',
    message: 'This is an info alert—check it out!',
  },
  {
    variant: 'warning',
    iconClass: 'fas fa-bell',
    message: 'This is a warning alert—check it out!',
  },
  {
    variant: 'danger',
    iconClass: 'far fa-life-ring',
    message: 'This is a danger alert—check it out!',
  },
];

const icons = {
  info: (
    <svg className="bi flex-shrink-0 me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
    </svg>
  ),
  check: (
    <svg className="bi flex-shrink-0 me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
    </svg>
  ),
  warning: (
    <svg className="bi flex-shrink-0 me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </svg>
  ),
};

const basicAlertsdata = [
  {
    variant: 'primary',
    icon: icons.info,
    message: 'An example alert alert-solid with an icon',
  },
  {
    variant: 'success',
    icon: icons.check,
    message: 'An example success alert alert-solid with an icon',
  },
  {
    variant: 'warning',
    icon: icons.warning,
    message: 'An example warning alert alert-solid with an icon',
  },
  {
    variant: 'danger',
    icon: icons.warning,
    message: 'An example danger alert alert-solid with an icon',
  },
];

const backgroundAlerts = [
  {
    variant: 'success',
    iconClass: 'fas fa-thumbs-up',
    message: 'This is a success alert—check it out!',
    position: 'alert-left',
  },
  {
    variant: 'info',
    iconClass: 'fas fa-bell',
    message: 'This is an info alert—check it out!',
    position: 'alert-top',
  },
  {
    variant: 'warning',
    iconClass: 'fas fa-bell',
    message: 'This is a warning alert—check it out!',
    position: 'alert-right',
  },
  {
    variant: 'danger',
    iconClass: 'far fa-life-ring',
    message: 'This is a danger alert—check it out!',
    position: 'alert-bottom',
  },
];

const bannerAlertsData = [
  {
    variant: 'warning',
    iconClass: 'far fa-life-ring',
    message: 'This is a success alert—check it out!',
    isBgColored: false,
  },
  {
    variant: 'warning',
    iconClass: 'far fa-life-ring',
    message: 'This is a success alert—check it out!',
    isBgColored: true,
  },
];

const Alerts = () => (
  <>
    <Container fluid>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Alerts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever.
              </p>
              {basicAlerts.map(({ variant, icon, message }, index) => (
                <Alert key={index} variant={variant} className="alert-dismissible fade show mb-3" role="alert">
                  <span>{icon}
                  </span>
                  <span className="ms-2">{message}</span>
                  <Button variant="close" data-bs-dismiss="alert" aria-label="Close">
                  </Button>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">Basic Alerts With Icons</Card.Title>
            </Card.Header>
            <Card.Body>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <symbol id="check-circle-fill3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </symbol>
                <symbol id="exclamation-triangle-fill01" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </symbol>
              </svg>
              {basicIconsAlerts.map((alert, index) => (
                <Alert key={index} variant={alert.variant} className="d-flex align-items-center">
                  <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                    <use xlinkHref={`#${alert.icon}`}></use>
                  </svg>
                  <div>{alert.message}</div>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">Basic Line Alerts</Card.Title>
            </Card.Header>
            <Card.Body>
              {basicLinealerts.map((alert, index) => (
                <Alert
                  key={index}
                  variant={alert.variant}
                  className={`bg-${alert.variant} text-white alert-dismissible fade show mb-3 border-none`}
                  role="alert"
                >
                  <span>
                    <i className={alert.iconClass}></i>
                  </span>
                  <span className="ms-1"> {alert.message}</span>
                  <Button variant="close" data-bs-dismiss="alert" aria-label="Close"></Button>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">Basic Line Alerts With Icons</Card.Title>
            </Card.Header>
            <Card.Body>
              {basicAlertsdata.map((alert, index) => (
                <Alert
                  key={index}
                  variant={alert.variant}
                  className={`text-white bg-${alert.variant} d-flex align-items-center border-none`}
                  role="alert"
                >
                  {alert.icon}
                  <div>{alert.message}</div>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">Alerts With Background</Card.Title>
            </Card.Header>
            <Card.Body>
              {backgroundAlerts.map((alert, index) => (
                <Alert
                  key={index}
                  variant={alert.variant}
                  className={`${alert.position} alert-dismissible fade show mb-3`}
                  role="alert"
                >
                  <span>
                    <i className={alert.iconClass}></i>
                  </span>
                  <span className="ms-1"> {alert.message}</span>
                  <Button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></Button>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">For Banner</Card.Title>
            </Card.Header>
            <Card.Body>
              {bannerAlertsData.map((alert, index) => (
                <Alert
                  key={index}
                  variant={alert.isBgColored ? '' : alert.variant}
                  className={`rounded-0 alert-dismissible fade show ${alert.isBgColored ? `text-white bg-${alert.variant}` : ''
                    }`}
                  role="alert"
                >
                  <span>
                    <i className={alert.iconClass}></i>
                  </span>
                  <span className="ms-1"> {alert.message}</span>
                  <Button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></Button>
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Alerts;

import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "/assets/images/logo-2.jpeg";

const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = (endtime) => {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const updateClock = () => {
      const time = document.querySelector('.countdown').getAttribute('data-date');
      const deadline = new Date(time);
      const t = calculateTimeRemaining(deadline);

      setTimeRemaining({
        days: t.days,
        hours: ('0' + t.hours).slice(-2),
        minutes: ('0' + t.minutes).slice(-2),
        seconds: ('0' + t.seconds).slice(-2),
      });

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    const timeinterval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(timeinterval);
  }, []);

  return (
    <div className="wrapper">
      <div className="iq-comingsoon pt-5">
        <Container fluid>
          <div className="d-flex justify-content-center">
            <div className="col-sm-8 col-md-9 text-center">
              <div className="iq-comingsoon-info">
                <Link to="/">
                  <img src={Logo} className="img-fluid w-25" alt="logo" />
                </Link>
                <h2 className="mt-4 mb-1">
                  Stay tuned, we're launching very soon
                </h2>
                <p>We are working very hard to give you the best experience possible!</p>
                <ul className="countdown d-flex align-items-center list-inline row" data-date="Dec 31 2024 20:20:22">
                  <li className="col-md-6 col-lg-3">
                    <Card>
                      <Card.Body>
                        <span>{timeRemaining.days}</span> Days
                      </Card.Body>
                    </Card>
                  </li>
                  <li className="col-md-6 col-lg-3">
                    <Card>
                      <Card.Body>
                        <span>{timeRemaining.hours}</span> Hours
                      </Card.Body>
                    </Card>
                  </li>
                  <li className="col-md-6 col-lg-3">
                    <Card>
                      <Card.Body>
                        <span>{timeRemaining.minutes}</span> Minutes
                      </Card.Body>
                    </Card>
                  </li>
                  <li className="col-md-6 col-lg-3">
                    <Card>
                      <Card.Body>
                        <span>{timeRemaining.seconds}</span> Seconds
                      </Card.Body>
                    </Card>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Row className="d-flex justify-content-center">
            <div className="col-lg-6 col-xl-4 col-md-7">
              <Form className="iq-comingsoon-form mt-5">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control comming mb-0 me-2"
                    id="exampleInputEmail1"
                    placeholder="Enter email address"
                  />
                  <Button type="submit" className="btn btn-primary">
                    Subscribe
                  </Button>
                </div>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ComingSoon;

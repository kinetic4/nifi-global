
import { Container, Row, Col, Card } from 'react-bootstrap';

const Timeline = () => {
  const events = [
    {
      date: 'Jan 2020',
      title: 'Client Login',
      description:
        "Bonbon macaroon jelly beans gummi bears jelly lollipop apple. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      bgClass: '',
      dotClass: '',
    },
    {
      date: 'Feb 2020',
      title: 'Scheduled Maintenance',
      description:
        "Bonbon macaroon jelly beans gummi bears jelly lollipop apple. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      bgClass: 'bg-success',
      dotClass: 'border-success',
    },
    {
      date: 'March 2020',
      title: 'Client Call',
      description:
        "Bonbon macaroon jelly beans gummi bears jelly lollipop apple. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      bgClass: '',
      dotClass: 'border-primary',
    },
    {
      date: 'April 2020',
      title: 'Mega event',
      description:
        "Bonbon macaroon jelly beans gummi bears jelly lollipop apple. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      bgClass: 'bg-success',
      dotClass: 'border-success',
    },
  ];

  return (
    <Container fluid className="timeline-page">
      <Row>
        <Col lg={12}>
          <Card className="card-block card-stretch card-height">
            <Card.Body>
              <div className="iq-timeline m-0 d-flex align-items-center justify-content-between position-relative">
                <ul className="list-inline p-0 m-0 w-100">
                  {events.map((event, index) => (
                    <li key={index}>
                      <div className={`time ${event.bgClass}`}>
                        <span>{event.date}</span>
                      </div>
                      <div className="content">
                        <div
                          className={`timeline-dots new-timeline-dots ${event.dotClass}`}
                        ></div>
                        <h6 className="mb-1">{event.title}</h6>
                        <div className="d-inline-block w-100">
                          <p>{event.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;

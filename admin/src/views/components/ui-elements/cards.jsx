import React, { Fragment } from "react";

//react-bootstrap
import {
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  CardGroup,
  Container,
} from "react-bootstrap";

// image
import img07 from "/assets/images/page-img/card.jpg";
import img08 from "/assets/images/page-img/08.jpg";
import img09 from "/assets/images/page-img/09.jpg";

//Masonry
import Masonry from "react-masonry-css";

const Cards = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={img07} alt="#" />
              <Card.Body>
                <Card.Title as="h4" className="card-title">
                  Card title
                </Card.Title>
                <Card.Text className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Card.Text>
                <Button variant="primary" to="#" className="btn btn-primary">
                  Button
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={img07} alt="#" />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Card.Text>
                <p>
                  It is a long established fact that a the readable content of a
                  page when looking at its layout.
                </p>
                <Card.Link href="#">Card link</Card.Link>{" "}
                <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={img07} alt="#" />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Card.Text>
                <ListGroup className=" list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={img07} alt="#" />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className=" list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card link</Card.Link>{" "}
                <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Card.Text>
                <Button
                  variant="primary"
                  to="#"
                  className="btn btn-primary btn-block"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Card.Text>
                <Button
                  variant="primary"
                  to="#"
                  className="btn btn-primary btn-block"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="mb-3">
              <div className="card-header">Featured</div>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary" to="#" className="btn btn-primary">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb-3">
              <div className="card-header">Quote</div>
              <Card.Body>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb-3">
              <div className="card-header">Featured</div>
              <Card.Body>
                <Button variant="primary" to="#" className="btn btn-primary">
                  Go somewhere
                </Button>
              </Card.Body>
              <div className="card-footer text-muted">2 days ago</div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className=" mb-3">
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button
                  variant="primary"
                  to="#"
                  className="btn btn-primary btn-block"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className=" text-center">
            <Card className=" mb-3">
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button
                  variant="primary"
                  to="#"
                  className="btn btn-primary btn-block"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="text-end">
            <Card className=" mb-3">
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button
                  variant="primary"
                  to="#"
                  className="btn btn-primary btn-block"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Card className="mb-3">
              <Card.Img variant="top" src={img07} alt="#" />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card className=" mb-3">
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={img07} alt="#" />
            </Card>
          </Col>
          <Col sm="4">
            <Card className="bg-dark text-white mb-3">
              <img src={img07} className="card-img" alt="#" />
              <div className="card-img-overlay">
                <Card.Title as="h4" className="text-white">
                  Card title
                </Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h4 className="mt-4 mb-3">Horizontal Card</h4>
          </Col>
          <Col lg="6">
            <Card className=" mb-3">
              <Row className=" no-gutters">
                <Col md={4}>
                  <Card.Img src={img08} alt="#" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title as="h4">Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in. a little bit longer.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="mb-3">
              <Row className="row no-gutters flex-row-reverse">
                <Col md={4}>
                  <Card.Img src={img09} alt="#" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-end">
                    <Card.Title as="h4">Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in. a little bit longer.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h4 className="mt-4 mb-3">Card Colored Styles</h4>
          </Col>
          <Col lg="4">
            <Card bg="primary" className=" text-white mb-3">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Primary card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card bg="secondary" className=" mb-3 text-white bg-secondary">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Secondary card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb-3 text-white bg-success">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Success card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card bg="danger" className="mb-3 text-white ">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Danger card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card bg="warning" className="mb-3 text-white">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Warning card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card bg="info" className="mb-3 text-white ">
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  Info card title
                </Card.Title>
                <blockquote className="blockquote mb-0">
                  <p className="font-size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-white font-size-12">
                    Someone famous in{" "}
                    <cite title="Source Title" className="text-white">
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h4 className="mt-4 mb-3">Border Card</h4>
          </Col>
          <Col lg="4">
            <Card border="primary" className="mb-3 ">
              <Card.Body className="text-primary">
                <Card.Title as="h4" className="text-primary">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card border="secondary" className="mb-3 ">
              <Card.Body className="text-secondary">
                <Card.Title as="h4" className="text-secondary">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card border="success" className="mb-3 ">
              <Card.Body className="text-success">
                <Card.Title as="h4" className="text-success">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card border="danger" className="mb-3 ">
              <Card.Body className="text-danger">
                <Card.Title as="h4" className="text-danger">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card border="warning" className="mb-3 ">
              <Card.Body className="text-warning">
                <Card.Title as="h4" className="text-warning">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card border="info" className="mb-3 ">
              <Card.Body className="text-info">
                <Card.Title as="h4" className="text-info">
                  Primary card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title text to build
                  on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h4 className="mt-4 mb-3">Card groups</h4>
          </Col>
          <Col sm="12">
            <CardGroup className="mb-3">
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col sm="12">
            <CardGroup className=" mb-3">
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </Card>
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </Card>
              <Card>
                <Card.Img variant="top" src={img07} alt="#" />
                <Card.Body>
                  <Card.Title as="h4">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </Card>
            </CardGroup>
          </Col>

          <Col sm="12">
            <h3 className="mb-3">Card Masonry Columns</h3>
            <div className="row" data-masonry='{"percentPosition": true }' style={{ position: 'relative', height: '778.344px' }}>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '0%', top: '0px' }}>
                <div className="card mb-3">
                  <img src="./assets/images/page-img/card.jpg" className="card-img-top rounded-top" alt="#" loading="lazy" />
                  <div className="card-body">
                    <h4 className="card-title">Card title that wraps to a new line</h4>
                    <p className="card-text">
                      This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '33.333%', top: '0px' }}>
                <div className="card mb-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '66.666%', top: '0px' }}>
                <div className="card mb-3">
                  <img src="./assets/images/page-img/card.jpg" className="card-img-top rounded-top" alt="#" loading="lazy" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in to additional content.
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '33.333%', top: '120.5px' }}>
                <div className="card bg-primary text-white text-center mb-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                      <small className="text-white">Someone famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '33.333%', top: '241px' }}>
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '33.333%', top: '423.016px' }}>
                <div className="card mb-3">
                  <img src="./assets/images/page-img/card.jpg" className="card-img-top rounded" alt="#" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '0%', top: '481.344px' }}>
                <div className="card text-right mb-3">
                  <blockquote className="blockquote card-body mb-0">
                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" style={{ position: 'absolute', left: '66.666%', top: '521.344px' }}>
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </Fragment>
  );
};

export default Cards;
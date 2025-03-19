import React, { Fragment } from "react";

//react-bootstrap
import { Row, Col, Card, Image, Container } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//img
import small1 from '/assets/images/small/img-1.jpg'
import user1 from '/assets/images/user/1.jpg'
import user2 from '/assets/images/user/2.jpg'
import user3 from '/assets/images/user/3.jpg'
import pageimg9 from '/assets/images/page-img/09.jpg'
import pageimg10 from '/assets/images/page-img/10.jpg'
import pageimg11 from '/assets/images/page-img/11.jpg'
import pageimg12 from '/assets/images/page-img/12.jpg'
import pageimg13 from '/assets/images/page-img/13.jpg'
import pageimg14 from '/assets/images/page-img/14.jpg'

const Images = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Responsive Images</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Images in Bootstrap are made responsive with{" "}
                  <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                  <code>height: auto;</code> are applied to the image so that it
                  scales with the parent element.
                </p>
                <Image
                  src={small1}
                  className="img-fluid"
                  alt="Responsive image"
                />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Equal-Width Multi-Row</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Create equal-width columns that span multiple rows by
                  inserting a <code>.w-100</code> where you want the columns to
                  break to a new line. Make the breaks responsive by mixing the{" "}
                  <code>.w-100</code> with some{" "}
                  <Link to="https://getbootstrap.com/docs/5.3/utilities/display/">
                    responsive display utilities
                  </Link>
                  .
                </p>
                <div className="d-flex align-items-start">
                  <Image
                    src={user1}
                    className="img-fluid avatar-70 me-3"
                    alt="#"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                </div>
                <div className="d-flex align-items-start mt-2">
                  <div className="flex-shrink-0">
                    <Image
                      src={user2}
                      className="img-fluid avatar-70 me-3"
                      alt="#"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    <div className="d-flex mt-3">
                      <Link className="me-3" to="#">
                        <Image src={user3} className="avatar-70" alt="#" />
                      </Link>
                      <div className="flex-grow-1">
                        <h5 className="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Order</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Change the order of content in media objects by modifying the
                  HTML itself, or by adding some custom flexbox CSS to set the{" "}
                  <code>order</code> property (to an integer of your choosing).
                </p>
                <div className="d-flex align-items-center mb-5">
                  <div>
                    <h5 className="mt-0 mb-1">Media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <Image
                    src={pageimg9}
                    className="ms-3 img-fluid avatar-70"
                    alt="#"
                  />
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div>
                    <h5 className="mt-0 mb-1">Center-aligned media</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <Image
                    src={pageimg10}
                    className="align-self-center ms-3 img-fluid avatar-70"
                    alt="#"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <Image
                    src={pageimg11}
                    className="align-self-end ms-3 img-fluid avatar-70"
                    alt="#"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Image Thumbnails</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  In addition to our{" "}
                  <Link to="https://getbootstrap.com/docs/5.3/utilities/borders/">
                    border-radius utilities
                  </Link>
                  , you can use <code>.img-thumbnail</code> to give an image a
                  rounded 1px border appearance.
                </p>
                <Image
                  src={pageimg10}
                  className="img-thumbnail"
                  alt="Responsive image"
                />{" "}
                <Image
                  src={pageimg11}
                  className="rounded ms-2 mt-2 mt-md-0 ms-md-3"
                  alt="Responsive image"
                />{" "}
                <Image
                  src={pageimg12}
                  className="rounded-circle ms-3 mt-3"
                  alt="Responsive image"
                />{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Image Thumbnails</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  In addition to our{" "}
                  <Link to="https://getbootstrap.com/docs/5.3/utilities/borders/">
                    border-radius utilities
                  </Link>
                  , you can use <code>.img-thumbnail</code> to give an image a
                  rounded 1px border appearance.
                </p>
                <div className="d-flex justify-content-between">
                  <Image
                    src={pageimg13}
                    className="mt-2 img-fluid rounded"
                    alt="Responsive image"
                  />
                  <Image
                    src={pageimg14}
                    className="mt-2 img-fluid rounded float-right"
                    alt="Responsive image"
                  />
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Media Object</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  The images or other media can be aligned top, middle, or
                  bottom. The default is top aligned.
                </p>
                <div className="d-flex align-items-center mb-4">
                  <Image
                    src={pageimg9}
                    className="align-self-start me-3 img-fluid avatar-70"
                    alt="#"
                  />
                  <div>
                    <h5 className="mt-0">Top-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Image
                    src={pageimg10}
                    className="align-self-center me-3 img-fluid avatar-70"
                    alt="#"
                  />
                  <div>
                    <h5 className="mt-0">Center-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Image
                    src={pageimg11}
                    className="align-self-end me-3 img-fluid avatar-70"
                    alt="#"
                  />
                  <div>
                    <h5 className="mt-0">Bottom-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Media list</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Because the media object has so few structural requirements,
                  you can also use these classes on list HTML elements. On your{" "}
                  <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the{" "}
                  <code>.list-unstyled</code> to remove any browser default list
                  styles, and then apply <code>.media</code> to your{" "}
                  <code>&lt;li&gt;</code>s. As always, use spacing utilities
                  wherever needed to fine tune.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <Image
                      src={pageimg12}
                      className="me-3 img-fluid avatar-70"
                      alt="#"
                    />
                    <div>
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                  <li className="d-flex align-items-center my-4">
                    <Image
                      src={pageimg13}
                      className="me-3 img-fluid avatar-70"
                      alt="#"
                    />
                    <div>
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <Image
                      src={pageimg14}
                      className="me-3 img-fluid avatar-70"
                      alt="#"
                    />
                    <div>
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Images;
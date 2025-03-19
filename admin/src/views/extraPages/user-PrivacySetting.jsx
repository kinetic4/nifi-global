import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// components
import Card from '../../components/Card'

const UserprivacySetting = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12">
            <Card>
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Privacy Setting</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body>
                <div className="acc-privacy">
                  <div className="data-privacy">
                    <h5 className="mb-2">Account Privacy</h5>
                    <Form.Control as="div" bsPrefix="custom-control custom-checkbox custom-control-inline d-flex ">
                      <Form.Check className="me-2" bsPrefix="custom-control-input" id="acc-private" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="acc-private">Private Account</Form.Check.Label>
                    </Form.Control>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2">Activity Status</h5>
                    <Form.Control as="div" bsPrefix="custom-control custom-checkbox custom-control-inline d-flex">
                      <Form.Check className="me-2" bsPrefix="custom-control-input" id="activety" defaultChecked="true" />
                      <Form.Check.Label bsPrefix="custom-control-label mb-1" htmlFor="activety">Show Activity Status</Form.Check.Label>
                    </Form.Control>
                    <p>It is a long established fact that a reader will be distracted by the readable content of
                      a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here', making it look like readable English.</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2"> Story Sharing </h5>
                    <Form.Control as="div" bsPrefix="custom-control custom-checkbox custom-control-inline d-flex">
                      <Form.Check className="me-2" bsPrefix="custom-control-input" id="story" defaultChecked="true" />
                      <Form.Check.Label bsPrefix="custom-control-label mb-1" htmlFor="story">Allow Sharing</Form.Check.Label>
                    </Form.Control>
                    <p>It is a long established fact that a reader will be distracted by the readable content of
                      a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here', making it look like readable English.</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2"> Photo Of You </h5>
                    <Form.Control as="div" className="d-flex" bsPrefix="custom-control custom-radio">
                      <Form.Check className="me-2" type="radio" id="automatically" name="customRadio0" bsPrefix="custom-control-input" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="automatically"> Add Automatically</Form.Check.Label>
                    </Form.Control>
                    <Form.Control as="div" className="d-flex" bsPrefix="custom-control custom-radio">
                      <Form.Check className="me-2" type="radio" id="manualy" name="customRadio0" bsPrefix="custom-control-input" />
                      <Form.Check.Label className="mb-1" bsPrefix="custom-control-label" htmlFor="manualy"> Add Manualy</Form.Check.Label>
                    </Form.Control>
                    <p>It is a long established fact that a reader will be distracted by the readable content of
                      a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here', making it look like readable English.</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2"> Your Profile </h5>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex">
                      <Form.Check className="me-2" type="radio" id="public" name="customRadio1" bsPrefix="custom-control-input"/>
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="public"> Public </Form.Check.Label>
                    </Form.Control>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex">
                      <Form.Check className="me-2" type="radio" id="friend" name="customRadio1" bsPrefix="custom-control-input" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="friend"> Friend </Form.Check.Label>
                    </Form.Control>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex">
                      <Form.Check className="me-2" type="radio" id="spfriend" name="customRadio1" bsPrefix="custom-control-input" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="spfriend"> Specific Friend </Form.Check.Label>
                    </Form.Control>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex">
                      <Form.Check className="me-2" type="radio" id="onlyme" name="customRadio1" bsPrefix="custom-control-input" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="onlyme"> Only Me </Form.Check.Label>
                    </Form.Control>
                    <p>It is a long established fact that a reader will be distracted by the readable content of
                      a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here', making it look like readable English.</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2"> Login Notification </h5>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex">
                      <Form.Check className="me-2" type="radio" id="enable" name="customRadio2" bsPrefix="custom-control-input" />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="enable"> Enable </Form.Check.Label>
                    </Form.Control>
                    <Form.Control as="div" bsPrefix="custom-control custom-radio d-flex mb-1">
                      <Form.Check className="me-2" type="radio" id="enable" name="customRadio2" bsPrefix="custom-control-input" defaultChecked />
                      <Form.Check.Label bsPrefix="custom-control-label" htmlFor="disable"> Disable </Form.Check.Label>
                    </Form.Control>
                    <p>It is a long established fact that a reader will be distracted by the readable content of
                      a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here', making it look like readable English.</p>
                  </div>
                  <hr />
                  <div className="data-privacy">
                    <h5 className="mb-2">Privacy Help</h5>
                    <Link to="/" onClick={e => e.preventDefault()}><i className="ri-customer-service-2-line mr-2"></i>Support</Link>
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

export default UserprivacySetting
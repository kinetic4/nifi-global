import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0");

  const toggleIcon = (eventKey) => {
    return activeKey === eventKey ? "-" : "+";
  };

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <Container fluid id="faqAccordion">
      <Row>
        <Col lg="12">
          <Accordion activeKey={activeKey} onSelect={handleSelect}>
            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingOne">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>It is a long established reader will be?</span>
                    <span className="ms-auto">{toggleIcon("0")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingTwo">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>Distracted by the readable page when?</span>
                    <span className="ms-auto">{toggleIcon("1")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingThree">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>What is user interface kit?</span>
                    <span className="ms-auto">{toggleIcon("2")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingFour">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>The readable content layout?</span>
                    <span className="ms-auto">{toggleIcon("3")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingFive">
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span>The readable content of a page at its layout?</span>
                    <span className="ms-auto">{toggleIcon("4")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingSix">
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span>What is user interface kit?</span>
                    <span className="ms-auto">{toggleIcon("5")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingSeven">
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <span>It is a long established fact reader will be?</span>
                    <span className="ms-auto">{toggleIcon("6")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingEight">
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <span>Distracted by readable content of a page?</span>
                    <span className="ms-auto">{toggleIcon("7")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingNine">
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <span>Distracted by readable content of a page?</span>
                    <span className="ms-auto">{toggleIcon("8")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingTen">
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <span>The readable content and survived?</span>
                    <span className="ms-auto">{toggleIcon("9")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingEleven">
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <span>The readable content of a page layout?</span>
                    <span className="ms-auto">{toggleIcon("10")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingTwelve">
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <span>What is user interface kit?</span>
                    <span className="ms-auto">{toggleIcon("11")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>

            <Card className="iq-accordion-block">
              <div className="active-faq clearfix" id="headingThirteen">
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    <span>It is a long established fact reader will be?</span>
                    <span className="ms-auto">{toggleIcon("12")}</span>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-details">
                    <p className="mb-0">
                      It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;

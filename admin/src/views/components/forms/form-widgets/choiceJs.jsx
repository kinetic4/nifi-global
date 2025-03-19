import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Card from '../../../../components/Card'
import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import ChoicesJs from '../../../../components/Choice';


const default_option = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
]

const singal_select2_option = [
  { value: "java", label: "Java" },
  { value: "javascript", label: "Javascript" },
  { value: "PHP", label: "PHP" },
  { value: "Visual Basic", label: "Visual Basic" },
]

const custom_select = [
  { value: "Open this menu", label: "Open this menu" },
  { value: "IT", label: "IT" },
  { value: "Blade Runner", label: "Blade Runner" },
  { value: "Thor Ragnarok", label: "Thor Ragnarok" }
]
const ChoiceJS = () => {
  return (
    <Container className='iq-custom-choicejs' fluid>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4 className="mb-0">Basic Select Boxes</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <ChoicesJs options={default_option} className="js-choice" select="one" />
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title className="header-title">
                <h4 className="card-title">Mutiple Select</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <ChoicesJs options={default_option} className="js-choice" select="multi" />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4 className="card-title">Basic Select with Input Group</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroupSelect01">Options</InputGroup.Text>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Control>
              </InputGroup>
              <InputGroup>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Control>
                <InputGroup.Text id="inputGroupSelect01">Options</InputGroup.Text>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <Card.Header.Title>
                <h4 className="card-title">Single Select2</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <ChoicesJs options={singal_select2_option} className="js-choice" select="one" />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4 className="card-title">Multiple Select2</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="card-body">
              <select id="multiple" className="js-states form-control" multiple>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Yellow</option>
              </select>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <Card.Header.Title className="header-title">
                <h4 className="card-title">Custom Select</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <ChoicesJs options={custom_select} className="js-choice" select="multi" />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title className="header-title">
                <h4 className="card-title">Disabled Select</h4>
              </Card.Header.Title>

            </Card.Header>
            <Card.Body>
              <ChoicesJs options={custom_select} className="js-choice" select="one" disabled="disabled" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ChoiceJS
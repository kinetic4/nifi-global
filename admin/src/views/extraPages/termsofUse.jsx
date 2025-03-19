import React, { useState } from 'react'
import { Col, Collapse, Row } from 'react-bootstrap'
import Card from '../../components/Card'

const TermsofUse = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className='container-fluid'>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title>
                <p className="card-title"> Lorem ipsum dolor sit</p>
              </Card.Header.Title>
              <div className="header-action" onClick={() => setOpen(!open)}>
                <b>{open ? "-" : "+"}</b>
              </div>
            </Card.Header>
            <Collapse in={open} className="collapse" id="form-basic-checkbox-1">
              <p className='p-4'>
                <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              </p>
            </Collapse>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title>
                <p className="card-title"> consectetur adipiscing elit</p>
              </Card.Header.Title>
              <div className="header-action" onClick={() => setOpen1(!open1)}>
                <b>{open1 ? "-" : "+"}</b>
              </div>
            </Card.Header>
            <Collapse in={open1} className="collapse" id="form-basic-checkbox-1">
              <p className='p-4'>
                <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              </p>
            </Collapse>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title>
                <p className="card-title"> Etiam sit amet justo non</p>
              </Card.Header.Title>
              <div className="header-action" onClick={() => setOpen2(!open2)}>
                <b>{open2 ? "-" : "+"}</b>
              </div>
            </Card.Header>
            <Collapse in={open2} className="collapse" id="form-basic-checkbox-1">
              <p className='p-4'>
                <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              </p>
            </Collapse>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title>
                <p className="card-title"> velit accumsan laoreet</p>
              </Card.Header.Title>
              <div className="header-action" onClick={() => setOpen3(!open3)}>
                <b>{open3 ? "-" : "+"}</b>
              </div>
            </Card.Header>
            <Collapse in={open3} className="collapse" id="form-basic-checkbox-1">
              <p className='p-4'>
                <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              </p>
            </Collapse>
          </Card>
          <Card>
            <Card.Header className=" d-flex justify-content-between">
              <Card.Header.Title>
                <p className="card-title"> Donec volutpat metus in erat</p>
              </Card.Header.Title>
              <div className="header-action" onClick={() => setOpen4(!open4)}>
                <b>{open4 ? "-" : "+"}</b>
              </div>
            </Card.Header>
            <Collapse in={open4} className="collapse" id="form-basic-checkbox-1">
              <p className='p-4'>
                <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              </p>
            </Collapse>
          </Card>
         </Col>
      </Row>
    </div >
  )
}

export default TermsofUse
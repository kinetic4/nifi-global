import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
//img 
import maintenance from '/assets/images/error/maintenance.png'

const Maintenance = () => {
    return (
        <>
          <div className="iq-maintenance vh-100">
            <Container>
               <Row className="d-flex align-items-center align-self-center vh-100">
                  <Col sm="12" className="text-center">
                        <div className="iq-maintenance">
                           <img src={maintenance} className="img-fluid" alt="" />
                           <h3 className="mt-4 mb-2">Site Currently Under Maintenance</h3>
                           <p className="mb-2">Please check back in sometime.</p>
                           <p>Contact with <Link to="/" onClick={e => e.preventDefault()}>dummy@example.com</Link></p>
                        </div>
                  </Col>
               </Row>
            </Container>
         </div>
        </>
    )
}

export default Maintenance;
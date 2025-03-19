import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import  Card from '../../components/Card' 
import Icon from '../../components/icon-component'
import iconsData from '../../assets/js/iconsData'

const Icons = () => {
   return (
     <Container fluid>
       <Row>
         <Col sm="12">
           <Card>
             <Card.Header className="d-flex justify-content-between">
               <Card.Header.Title>
                 <h4 className="card-title">Heroicons Icon</h4>
               </Card.Header.Title>
             </Card.Header>
             <Card.Body>
               <p>
                 Use As <code>&#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;....&#x3C;/svg&#x3E;</code>
               </p>
               <Row className="mt-3">
                 {iconsData.map(iconData => (
                   <Col key={iconData.id} sm="6" md="4" lg="2">
                     <a className="iq-icons-list" href="#">
                       <Icon icon={iconData.icon} label={iconData.label} />
                     </a>
                   </Col> 
                 ))}
                 <div className="col-sm-12 text-center mt-3">
                           <a href="https://heroicons.com/" target="blank" className="btn btn-primary">View All Icon</a>
                        </div>
               </Row>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
   );
 };
 
 export default Icons;
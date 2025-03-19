import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

const FooterStyle = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="mm-footer iq-footer">
                <Container fluid>
                    <Row>
                        <Col lg="6">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><Link to="/privacy-policy">Privacy Policy</Link></li>{" "}
                                <li className="list-inline-item"><Link to="/termsofUse">Terms of Use</Link></li>
                            </ul>
                        </Col>
                        <Col lg="6" className="text-lg-end text-center mt-lg-0 mt-3">
                            <span >© Copyright&nbsp; {currentYear} <a href="#" >Datum</a> | All Rights Reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterStyle
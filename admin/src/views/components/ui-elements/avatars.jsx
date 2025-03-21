import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../../components/Card'

//img
import user1 from '/assets/images/user/1.jpg'
import user5 from '/assets/images/user/5.jpg'
// import user6 from '/assets/images/user/6.jpg'
import user7 from '/assets/images/user/1.jpg'

const avatarSizes = [
  { size: '100', className: 'avatar-100' },
  { size: '90', className: 'avatar-90' },
  { size: '80', className: 'avatar-80' },
  { size: '70', className: 'avatar-70' },
  { size: '60', className: 'avatar-60' },
  { size: '50', className: 'avatar-50' },
  { size: '40', className: 'avatar-40' },
  { size: '30', className: 'avatar-30' },
];

const Avatars = () => { 
  return (
    <>
      <Container fluid >
        <Row>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Avatar Sizing</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body> 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  {avatarSizes.map(({ size, className }) => (
                    <div key={size} className="iq-avatar">
                      <img
                        className={`rounded ${className}`}
                        src={user1}
                        alt={`Avatar size ${size}`}
                        width={size}
                        height={size}
                      />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Shape Rounded</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body> 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  <div className="iq-avatar">
                    <img className="avatar-80 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-70 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-60 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-50 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-40 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-30 rounded" src={user1} alt="#" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Shape Rounded Circle</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body> 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  <div className="iq-avatar">
                    <img className="avatar-80 rounded-small" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-70 rounded-small" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-60 rounded-small" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-50 rounded-small" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-40 rounded-small" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-30 rounded-small" src={user1} alt="#" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Image Initials</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body>
                 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  <div className="iq-avatar">
                    <img className="avatar-100 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-90 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-80 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-70 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-60 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-50 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-40 rounded" src={user1} alt="#" />
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-30 rounded" src={user1} alt="#" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Status Indicator</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body> 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  <div className="iq-avatar">
                    <img className="avatar-80 rounded" src={user1} alt="#" /> <span className="bg-success iq-dots dots-100"></span>
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-70 rounded" src={user1} alt="#" /> <span className="iq-dots dots-90"></span>
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-60 rounded" src={user1} alt="#" /> <span className="bg-success iq-dots dots-80"></span>
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-50 rounded" src={user1} alt="#" /> <span className="iq-dots dots-80"></span>
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-40 rounded" src={user1} alt="#" /> <span className="bg-success iq-dots dots-80"></span>
                  </div>
                  <div className="iq-avatar">
                    <img className="avatar-30 rounded" src={user1} alt="#" /> <span className="iq-dots dots-80"></span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height">
              <Card.Header>
                <Card.Header.Title>
                  <h4 className="card-title">Image Groups</h4>
                </Card.Header.Title> 
              </Card.Header>
              <Card.Body> 
                <div className="iq-avatars d-flex flex-wrap align-items-center">
                  <div className="iq-avatar">
                    <div className="iq-media-group">
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-60 rounded" src={user1} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-60 rounded custom-margin" src={user6} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-60 rounded custom-margin" src={user7} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="iq-avatar ms-3">
                    <div className="iq-media-group">
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-50 rounded custom-margin" src={user1} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-50 rounded custom-margin" src={user6} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-50 rounded custom-margin" src={user7} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="iq-avatar ms-3">
                    <div className="iq-media-group">
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-40 rounded custom-margin" src={user1} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-40 rounded custom-margin" src={user6} alt="" />
                      </Link>
                      <Link to="/" onClick={e => e.preventDefault()} className="iq-media">
                        <img className="img-fluid avatar-40 rounded custom-margin" src={user7} alt="" />
                      </Link>
                    </div>
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

export default Avatars;
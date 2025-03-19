import { Row, Col } from 'react-bootstrap'
import Card from '../../components/Card'


const ChatContent = (props) => {
    const toggleChat = () => {
        document.getElementById('chat-wrapper-left').classList.toggle('chat-left-wrapper')
    }
    return (
        <div className={`chat-content animate__animated animate__fadeIn ${props.active ? 'active' : ''}`} data-toggle-extra="tab-content" id={`user-content-${props.id}`}>
            <Card>
                <div className="right-sidenav" id="first-sidenav">
                    <div className="d-flex">
                        <button type="button" className="btn btn-sm" data-extra-dismiss="right-sidenav">
                            <i className="las la-times"></i>
                        </button>
                    </div>
                    <div className="chat-profile mx-auto">
                        <div className="avatar avatar-70 avatar-borderd avatar-rounded mx-auto" data-toggel-extra="right-sidenav" data-target="#first-sidenav">
                            <img src={`../assets/images/${props.id}`} alt="users" className="img-fluid" />
                        </div>
                        <h4 className="mb-2">{props.name}</h4>
                        <h6 className="mb-2">{props.about}</h6>
                    </div>
                    <div className="chat-detail">
                        <Row>
                            <Col md="6" className="col-6 title">Nick Name:</Col>
                            <Col md="6" className="col-6 text-right">{props.nickName}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md="6" className="col-6 title">Tel:</Col>
                            <Col md="6" className="col-6 text-right">{props.contact}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md="6" className="col-6  title">Date Of Birth:</Col>
                            <Col md="6" className="col-6 text-right">{props.dob}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md="6" className="col-6 title">Gender:</Col>
                            <Col md="6" className="col-6 text-right">{props.gender}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md="6" className="col-6 title">Language:</Col>
                            <Col md="6" className="col-6 text-right">{props.lang}</Col>
                        </Row>
                    </div>
                </div>
                <Card.Header className="chat-content-header">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary btn-sm d-block d-lg-none me-2" onClick={toggleChat} data-toggel-extra="side-nav" data-expand-extra=".chat-left-wrapper">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19.75 11.7256L4.75 11.7256" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                             </svg>
                        </button>
                        <div className="avatar-50 avatar-borderd avatar-rounded" data-toggel-extra="right-sidenav" data-target="#first-sidenav">
                            <img src={props.img} alt="users" className="img-fluid" />
                        </div>
                        <div className="chat-title">
                            <h6>{props.name}</h6>
                            <small>{props.status}</small>
                        </div>
                    </div>
                    <div className="chat-action d-flex align-items-center ">
                        <div className="nav" id={`user-${props.id}-action`} role="tablist">
                            <button className="btn bg-primary btn-sm me-1" id="user-{{id}}-video-call-tab">
                                <svg className="text-white"  width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>{''}
                            <button className="btn bg-primary btn-sm ms-1" id="user-{{id}}-call-tab">
                                <svg className="text-white" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className="msg-content" id={`user-${props.id}-chat-content`}>
                    <div className="msg-list">
                        <div className="single-msg">
                            <div className="triangle-topleft single-msg-shap">
                            </div>
                            <div className="single-msg-content">
                                <div className="msg-detail">
                                    <span>Nos vemos mañana sollicitudin molestie malesuada. Proin eget tortor.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg user">
                            <div className="triangle-topright single-msg-shap">
                            </div>
                            <div className="single-msg-content user">
                                <div className="msg-detail">
                                    <span>Gracias De nada No hay de qué Disculpe Lo siento Me encanta café. ¿Quieres ir a tomar una taza? .</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg">
                            <div className="triangle-topleft single-msg-shap">
                            </div>
                            <div className="single-msg-content">
                                <div className="msg-detail">
                                    <span>Alemania ha registrado este jueves 22.657 cifra de enero, según el Instituto Robert Koch.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg">
                            <div className="triangle-topleft single-msg-shap">
                            </div>
                            <div className="single-msg-content">
                                <div className="msg-detail">
                                    <span>La canciller Angela y ha pedido que la Unión Europea aumente la capacidad de producción de vacunas.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg">
                            <div className="triangle-topleft single-msg-shap">
                            </div>
                            <div className="single-msg-content">
                                <div className="msg-detail">
                                    <span>Este miércoles y el jueves, los materia de vacunación.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg user">
                            <div className="triangle-topright single-msg-shap">
                            </div>
                            <div className="single-msg-content user">
                                <div className="msg-detail">
                                    <span>En el Reino Unido, el primer no haya “un bloqueo” en la exportación de vacunas.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-msg user">
                            <div className="triangle-topright single-msg-shap">
                            </div>
                            <div className="single-msg-content user">
                                <div className="msg-detail">
                                    <span>La farmacéutica AstraZeneca ha actualizado los datos de eficacia de su Reino Unido.</span>
                                </div>
                                <div className="msg-action">
                                    <span>04:15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <div className="card-footer px-3 py-3">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" id={`chat-input${props.id}`} placeholder="Enter here..." aria-label="Recipient's username" aria-describedby={`basic-addon2-${props.id}`} />
                            <div className="input-group-append">
                                <button type="button" className="input-group-text chat-icon" id={`basic-addon${props.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </button>
                                <div className="dropdown-menu p-0 border-0" aria-labelledby={`basic-addon${props.id}`}>
                                    <emoji-picker data-target-input="#chat-input"></emoji-picker>
                                </div>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text chat-icon" id={`basic-addon2-${props.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )

}
export default ChatContent;
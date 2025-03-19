import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown, Button, Form } from 'react-bootstrap'
import Card from '../../Card'
// import { getDarkMode } from '../../../../store/mode'
import { connect } from "react-redux";

//img

import user1 from '/assets/images/user/1.jpg'
import user2 from '/assets/images/user/2.jpg'

// flag
import flag1 from "/assets/images/Flag/flag001.png"
import flag3 from '/assets/images/Flag/flag-03.png'
import flag4 from '/assets/images/Flag/flag-04.png'
import flag2 from '/assets/images/Flag/flag-02.png'
import flag5 from '/assets/images/Flag/flag-05.png'
import flag6 from '/assets/images/Flag/flag-06.png'

//chnage-mode
import ChangeMode from '../../Change-Mode'
import { useEffect, useState } from 'react';
// function mapStateToProps(state) {
//   return {
//     darkMode: getDarkMode(state)
//   };
// }


const HeaderStyle = (props) => {
  const minisidbar = () => {
    document.body.classList.toggle('sidebar-main')
  }

  const [themeColor, setThemeColor] = useState(false)

  const theme = document.querySelector('html')

  const changeMode = () => {
    setThemeColor(!themeColor)
    const getColor = themeColor ? 'light' : 'dark'
    sessionStorage.setItem(`themeColor`, JSON.stringify(getColor))
  }

  if (themeColor) {
    theme.setAttribute('data-bs-theme', 'dark')
  }
  else {
    theme.setAttribute('data-bs-theme', 'light')
  }

  useEffect(() => {
    const getThemeColor = JSON.parse(sessionStorage.getItem('themeColor'))
    if (getThemeColor !== undefined && getThemeColor !== null) {
      theme.setAttribute('data-bs-theme', getThemeColor)
      setThemeColor(getThemeColor === 'light' ? false : true)
    }
  }, [])


  const search = [
    { name: "Jack Ryan", id: "OR-325548" },
    { name: "Matt Damon", id: "OR-223544" },
    { name: "Caitriona Balfe", id: "OR-125623" },
    { name: "Josh Lucas", id: "OR-662210" },
    { name: "Jon Bernthal", id: "OR-901020" },
    { name: "Noah Jupe", id: "OR-902210" },
    { name: "Tracy Letts", id: "OR-902559" },
  ]


  return (
    <>

      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <Navbar expand="lg" className="navbar-light p-0">
            <div className="side-menu-bt-sidebar" onClick={minisidbar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div className="d-flex align-items-center">
              <div className="change-mode">
                <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                  <div className="custom-switch-inner">
                    <p className="mb-0"> </p>
                    <div className="form-check form-switch">
                      <input type="checkbox" className="form-check-input custom-control-input" id="dark-mode" onClick={changeMode} />
                      <label className="form-check-label custom-control-label" htmlFor="dark-mode" data-mode="toggle">
                        <span className="switch-icon-left">
                          <svg className="svg-icon" id="h-sun" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <span className="switch-icon-right">
                          <svg className="svg-icon" id="h-moon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <Navbar.Toggle aria-controls="navbarSupportedContent">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </Navbar.Toggle>
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav as="ul" className="ms-auto navbar-list align-items-center">
                  <Dropdown as="li" className="nav-item nav-icon">
                    <Dropdown.Menu className="iq-sub-dropdown" aria-labelledby="notification-dropdown">
                      <Card
                        className="shadow-none m-0 border-0">
                        <div className="card shadow-none m-0 border-0">
                          <div className=" p-0 ">
                            <div className="create-workform p-4">
                              <div className="form-group mb-0 d-flex position-relative  align-items-center"
                              >
                                <a className="search-link me-1" href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                      strokewidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </a>
                                <input type="text" className="search-bar form-control1" name="search"
                                  placeholder=" Search..." data-kt-search-element="input" />
                              </div>
                              <hr></hr>
                              <div className="d-flex flex-stack  mb-4">
                                <span className="text-muted fs-6 me-2">Recently Searched:</span>
                              </div>
                              <div className=" scroll">
                                <div className="mh-200px mh-lg-325px">

                                  {search.map((item, index) => (
                                    <tr key="index">
                                      <div className="d-flex align-items-center mb-3 ">
                                        <div className="me-4 ">
                                          <a className="search-link me-2" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                              fill="none" viewBox="0 0 24 24"
                                              stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round"
                                                strokewidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                              </path>
                                            </svg>
                                          </a>
                                        </div>
                                        <div className="d-flex flex-column ">
                                          <td>
                                            <a href="#" className="  text-size mb-1">
                                              {item.name}
                                            </a>
                                          </td>
                                          <td>
                                            <span className="text-muted text-size2">{item.id}</span>
                                          </td>
                                        </div>
                                      </div>
                                    </tr>

                                  ))}
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown as="li" className="nav-item nav-icon">
                    <Dropdown.Toggle as={Button} href="#" variant=" search-toggle" id="notification-dropdown" aria-haspopup="true" aria-expanded="false" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <span className="bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="iq-sub-dropdown" aria-labelledby="notification-dropdown">
                      <Card className="shadow-none m-0 border-0">
                        <div className="p-3 border-bottom">
                          <h6 className="text-center">
                            Notifications
                          </h6>
                        </div>
                        <Card.Body className="overflow-auto card-header-border p-0 card-body-list" maxHeight="500px">
                          <ul className="dropdown-menu-1 overflow-auto list-style-1 mb-0">
                            <li className="dropdown-item-1 float-none p-3 border-bottom">
                              <div className="list-item d-flex justify-content-start align-items-start">
                                <div className="avatar">
                                  <div className="avatar-img bg-danger avatar-20">
                                    <span>
                                      <svg className="icon line" width="30" height="30" id="cart-alt1" stroke="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,3H5.32a1,1,0,0,1,.93.63L10,13,8.72,15.55A1,1,0,0,0,9.62,17H19" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline points="10 13 18.2 13 21 6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line x1="20.8" y1="6" x2="7.2" y2="6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><circle cx="10.5" cy="20.5" r="0.5" fill="none" strokemterlimit="10" strokeWidth="2"></circle><circle cx="16.5" cy="20.5" r="0.5" fill="none" strokemterlimit="10" strokeWidth="2"></circle></svg>
                                    </span>
                                  </div>
                                </div>
                                <div className="list-style-detail ms-2 me-2">
                                  <h6 className="fw-bold">Your order is placed</h6>
                                  <p className="m-0">
                                    <small className="text-secondary">If several languages coalesce</small>
                                  </p>
                                  <p className="m-0 pt-1">
                                    <small className="text-secondary d-flex">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary me-2" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>{""}
                                      3 hours ago</small>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li className="dropdown-item-1 float-none p-3 border-bottom">
                              <div className="list-item d-flex justify-content-start align-items-start">
                                <div className="avatar">
                                  <div className="avatar-img avatar-success avatar-20">
                                    <span><img className="avatar is-squared rounded-circle" src={user2} alt="2.jpg" /></span>
                                  </div>
                                </div>
                                <div className="list-style-detail ms-2 me-2">
                                  <h6 className="fw-bold">New message from cate</h6>
                                  <p className="m-0">
                                    <small className="text-secondary">You have 3 unreded messages</small>
                                  </p>
                                  <p className="m-0 pt-1">
                                    <small className="text-secondary d-flex">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary me-2" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>{""}
                                      5 hours ago</small>
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li className="dropdown-item-1 float-none p-3 border-bottom">
                              <div className="list-item d-flex justify-content-start align-items-start">
                                <div className="avatar">
                                  <div className="avatar-img bg-warning avatar-20">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" stroke="white" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }}>
                                        <g>
                                          <g>
                                            <path d="M386.689,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538    c35.593,0,64.538-28.951,64.538-64.538S422.276,304.403,386.689,304.403z M386.689,401.21c-17.796,0-32.269-14.473-32.269-32.269    c0-17.796,14.473-32.269,32.269-32.269c17.796,0,32.269,14.473,32.269,32.269C418.958,386.738,404.485,401.21,386.689,401.21z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M166.185,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538s64.538-28.951,64.538-64.538    S201.772,304.403,166.185,304.403z M166.185,401.21c-17.796,0-32.269-14.473-32.269-32.269c0-17.796,14.473-32.269,32.269-32.269    c17.791,0,32.269,14.473,32.269,32.269C198.454,386.738,183.981,401.21,166.185,401.21z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M430.15,119.675c-2.743-5.448-8.32-8.885-14.419-8.885h-84.975v32.269h75.025l43.934,87.384l28.838-14.5L430.15,119.675z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <rect x="216.202" y="353.345" width="122.084" height="32.269" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M117.781,353.345H61.849c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h55.933    c8.912,0,16.134-7.223,16.134-16.134C133.916,360.567,126.693,353.345,117.781,353.345z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M508.612,254.709l-31.736-40.874c-3.049-3.937-7.755-6.239-12.741-6.239H346.891V94.655    c0-8.912-7.223-16.134-16.134-16.134H61.849c-8.912,0-16.134,7.223-16.134,16.134s7.223,16.134,16.134,16.134h252.773v112.941    c0,8.912,7.223,16.134,16.134,16.134h125.478l23.497,30.268v83.211h-44.639c-8.912,0-16.134,7.223-16.134,16.134    c0,8.912,7.223,16.134,16.134,16.134h60.773c8.912,0,16.134-7.223,16.135-16.134V264.605    C512,261.023,510.806,257.538,508.612,254.709z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M116.706,271.597H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h74.218    c8.912,0,16.134-7.223,16.134-16.134C132.84,278.82,125.617,271.597,116.706,271.597z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M153.815,208.134H16.134C7.223,208.134,0,215.357,0,224.269s7.223,16.134,16.134,16.134h137.681    c8.912,0,16.134-7.223,16.134-16.134S162.727,208.134,153.815,208.134z" />
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <path d="M180.168,144.672H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h137.681    c8.912,0,16.134-7.223,16.134-16.134C196.303,151.895,189.08,144.672,180.168,144.672z" />
                                          </g>
                                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> </svg>
                                    </span>
                                  </div>
                                </div>
                                <div className="list-style-detail ms-2 me-2">
                                  <h6 className="fw-bold">Your item is shipped</h6>
                                  <p className="m-0">
                                    <small className="text-secondary">You got new order of goods</small>
                                  </p>
                                  <p className="m-0 pt-1">
                                    <small className="text-secondary d-flex">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary me-2" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>{""}
                                      5 hours ago</small>
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                        <div className="card-footer text-muted p-3">
                          <p className="mb-0 text-primary text-center font-weight-bold">Show all notifications</p>
                        </div>
                      </Card>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as="li" className="nav-item nav-icon">
                    <Dropdown.Toggle as={Button} href="#" variant=" search-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src={flag1} className="img-fluid rounded-circle " alt="user" style={{ height: "30px", minWidth: "30px", width: "30px" }} />
                      <span className="bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="iq-sub-dropdown" aria-labelledby="dropdownMenuButton2">
                      <Card className="shadow-none m-0 border-0">
                        <div className=" p-0 ">
                          <ul className="dropdown-menu-1 list-group list-group-flush">
                            <li className="dropdown-item-1 list-group-item  px-2"><Link className="p-0" to="#"><img src={flag3} alt="img-flaf" className="img-fluid me-2 header-dropdown-item-icon " width="15px" height="15px" min-width="15px" />Spanish</Link></li>
                            <li className="dropdown-item-1 list-group-item  px-2"><Link className="p-0" to="#"><img src={flag4} alt="img-flaf" className="img-fluid me-2 header-dropdown-item-icon " width="15px" height="15px" min-width="15px" />Italian</Link></li>
                            <li className="dropdown-item-1 list-group-item  px-2"><Link className="p-0" to="#"><img src={flag2} alt="img-flaf" className="img-fluid me-2 header-dropdown-item-icon " width="15px" height="15px" min-width="15px" />French</Link></li>
                            <li className="dropdown-item-1 list-group-item  px-2"><Link className="p-0" to="#"><img src={flag5} alt="img-flaf" className="img-fluid me-2 header-dropdown-item-icon " width="15px" height="15px" min-width="15px" />German</Link></li>
                            <li className="dropdown-item-1 list-group-item  px-2"><Link className="p-0" to="#"><img src={flag6} alt="img-flaf" className="img-fluid me-2 header-dropdown-item-icon " width="15px" height="15px" min-width="15px" />Japanese</Link></li>
                          </ul>
                        </div>
                      </Card>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as="li" bsPrefix="nav-item nav-icon search-content">
                    <Dropdown.Toggle as={Button} href="#" variant=" search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg className="svg-icon text-secondary" id="h-suns" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="iq-search-bar iq-sub-dropdown " aria-labelledby="dropdownSearch">
                      <Form action="#" className="searchbox p-2">
                        <Form.Group className="mb-0 position-relative">
                          <Form.Control type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                          <Link to="#" className="search-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </Link>
                        </Form.Group>
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as="li" className="nav-item nav-icon">
                    <Dropdown.Toggle as={Button} href="#" variant="nav-item nav-icon pe-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      <img src={user1} className="img-fluid avatar-rounded" alt="user" />{" "}
                      <span className="mb-0 ms-2 user-name">John Doe</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul" className="dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                      <Dropdown.Item as="li" className="d-flex svg-icon">
                        <svg className="svg-icon me-0 text-secondary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <Link to="/userProfile">My Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li" className="d-flex svg-icon">
                        <svg className="svg-icon me-0 text-secondary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <Link to="/user-ProfileEdit">Edit Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li" className="d-flex svg-icon">
                        <svg className="svg-icon me-0 text-secondary" id="h-03-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <Link to="/user-AccountSetting">Account Settings</Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li" className="d-flex svg-icon">
                        <svg className="svg-icon me-0 text-secondary" id="h-04-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <Link to="/user-PrivacySetting">Privacy Settings</Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li" className="d-flex svg-icon border-top">
                        <svg className="svg-icon me-0 text-secondary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <Link to="/auth/sign-in">Logout</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </div>


    </>
  )
}

export default HeaderStyle
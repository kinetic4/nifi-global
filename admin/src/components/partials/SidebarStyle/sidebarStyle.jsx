import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'


//img
import logo from '/assets/images/logo.png'
const minisidbar = () => {
  document.body.classList.toggle('sidebar-main')
}

function CustomToggle({ children, eventKey, onClick }) {

  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
      decoratedOnClick(isCurrentEventKey)
    }}>
      {children}
    </Link>
  );
}


const SidebarStyle = () => {
  let location = useLocation()
  // Collapse state
  const [activeMenu, setActiveMenu] = useState(false)
  const [activesubMenu, setSubmenu] = useState(false)

  const [active, setActive] = useState('')
  useEffect(
    () => {
      Scrollbar.init(document.querySelector('#my-scrollbar'))
    }, [])
  return (
    <>
      <div className={`iq-sidebar sidebar-default`}>
        <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
          <Link to="/" className="header-logo">
            <img src={logo} className={`img-fluid rounded-normal light-logo `} style={{height: '72px'}} alt="logo" />
            <span>Nifi Global</span>
          </Link>
          <div className="side-menu-bt-sidebar-1">
            <svg onClick={minisidbar} xmlns="http://www.w3.org/2000/svg" className="text-light wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
          <nav className="iq-sidebar-menu">
            <Accordion as="ul" id="iq-sidebar-toggle" className="side-menu" onSelect={(e) => setActiveMenu(e)}>
              <li className={`${location.pathname === '/' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/app/dashboard" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </i>
                  <span className="ms-2">Dashboard</span>
                  <p className="mb-0 w-10 badge badge-pill text-bg-primary">6</p>

                </Link>
              </li>
              <li className="px-3 pt-3 pb-2 ">
                <span className="text-uppercase small fw-bold">Application</span>
              </li>
              <li className={`${location.pathname === '/app/customer' || location.pathname === '/app/customerAdd' || location.pathname === '/app/customerEdit' ?  'active' : ''}  sidebar-layout`}>
                <Link to="/app/customer" className="svg-icon ">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </i>
                  <span className="ms-2">Customer</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/app/plan' || location.pathname === '/app/planAdd' ? 'active' : ''}  sidebar-layout`} >
                <Link to="/app/plan" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </i>
                  <span className="ms-2">Plan</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/app/transaction' || location.pathname === '/app/transactionNew' || location.pathname === '/app/transactionDetail' ? 'active' : ''}  sidebar-layout`} >
                <Link to="/app/transaction" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </i>
                  <span className="ms-2">Transactions</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/app/withdrawlRequest' || location.pathname === '/app/transactionNew' || location.pathname === '/app/transactionDetail' ? 'active' : ''}  sidebar-layout`} >
                <Link to="/app/withdrawlRequest" className="svg-icon">
                  <i>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='18' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                  </i>

                    <span className="ms-2">Withdrawal Request</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/app/adminCommission' || location.pathname === '/app/transactionNew' || location.pathname === '/app/transactionDetail' ? 'active' : ''}  sidebar-layout`} >
                <Link to="/app/adminCommission" className="svg-icon">
                  <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

                  </i>
                  <span className="ms-2">Admin Commission</span>
                </Link>
              </li>
              {/* <li className={`${location.pathname === '/pages-invoice' || location.pathname === '/invoiceView' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/pages-invoice" className="svg-icon">
                  <i>
                    <svg className="icon line" width="18" id="receipt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17,16V3L13,5,10,3,7,5,3,3V17.83A3.13,3.13,0,0,0,5.84,21,3,3,0,0,0,9,18V17a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1v1a3,3,0,0,1-3,3H6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                      <line x1="8" y1="10" x2="12" y2="10" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" ></line>
                    </svg>
                  </i>
                  <span className="ms-2">Invoice</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/todo' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/todo" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </i><span className="ms-2">Todo</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/calendar' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/calendar" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </i>
                  <span className="ms-2">Calendar</span>
                  <p className="mb-0 px-2 badge badge-pill text-bg-success">New</p>
                </Link>
              </li>
              <li className="px-3 pt-3 pb-2">
                <span className="text-uppercase small fw-bold">Pages</span>
              </li>
              <li className={`${location.pathname === '/chat' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/chat" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </i><span className="ms-2">Chat</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/userProfile' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/userProfile" className="svg-icon">
                  <i>
                    <svg className="svg-icon" id="iq-user-1-1" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </i><span className="ms-2">User Profile</span>
                </Link>
              </li>
              <Accordion.Item as="li" eventKey="sidebar-error" bsPrefix={`nav-item  ${active === 'auth' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('auth')}>
                <CustomToggle eventKey="sidebar-auth" onClick={(activeKey) => setActiveMenu(activeKey)}>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </i>{" "}
                  <span className="ms-2">Authentication</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-auth">
                  <ul className="submenu" data-parent="#iq-sidebar-toggle">
                    <li className={`${location.pathname === '/auth/login' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/auth/login" className="svg-icon">
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        </i><span>Login</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/auth/register' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/auth/register" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </i><span>Register</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/auth/resetPassword' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/auth/resetPassword" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </i><span>Reset Password</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === 'auth/confirmMail' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="auth/confirmMail" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </i><span>Confirm Mail</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/auth/lock-screen' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/auth/lock-screen" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </i><span>Lock Screen</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item as="li" eventKey="sidebar-error" bsPrefix={`nav-item  ${active === 'error' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('error')}>
                <CustomToggle eventKey="sidebar-error" onClick={(activeKey) => setActiveMenu(activeKey)}>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </i>
                  <span className="ms-2">Error</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-error">
                  <ul className="submenu" data-parent="#iq-sidebar-toggle">
                    <li className={`${location.pathname === '/error/error-404"' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/error/error-404" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </i>
                        <span className="ms-2">Error 404</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/error/error-500' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/error/error-500" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                          </svg>
                        </i>
                        <span className="ms-2">Error 500</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <li className={`${location.pathname === 'comingSoon' ? 'active' : ''}  sidebar-layout`}>
                <Link to="comingSoon" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </i><span className="ms-2">Coming Soon</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/Maintenance' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/Maintenance" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </i><span className="ms-2">Maintenance</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/pages-blank-page' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/pages-blank-page" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </i><span className="ms-2">Blank Page</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/faq' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/faq" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </i><span className="ms-2">FAQ</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/Pricing' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/Pricing" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </i><span className="ms-2">Pricing</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/timeline' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/timeline" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </i><span className="ms-2">Timeline</span>
                </Link>
              </li> */}

              {/* Components */}
              {/* <li className="px-3 pt-3 pb-2">
                <span className="text-uppercase small fw-bold">Components</span>
              </li>
              <Accordion.Item as="li" eventKey="sidebar-icons" bsPrefix={`nav-item  ${active === 'icons' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('icons')}>
                <CustomToggle eventKey="sidebar-icons" onClick={(activeKey) => setActiveMenu(activeKey)}>
                  <i>
                    <svg className="svg-icon" id="iq-ui-1" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeDasharray=" 97, 117" strokeDashoffset="0"></path>
                    </svg>
                  </i>
                  <span className="ms-2">UI Elements</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-icons">
                  <ul id="" className="submenu" data-parent="#iq-sidebar-toggle">
                    <li className={`${location.pathname === '/avatars' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/avatars" className="svg-icon">
                        <i>
                          <svg className="svg-icon" id="iq-ui-1-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeDasharray="90, 110" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Avatars</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/alerts' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/alerts" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeDasharray="56, 76" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Alerts</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/badges' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/badges" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeDasharray=" 74, 94" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Badges</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/breadcrumb' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/breadcrumb" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" strokeDasharray="48, 68" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Breadcrumb</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/buttons' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/buttons" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeDasharray="72, 92" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Buttons</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/buttonsGroup' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/buttonsGroup" className="svg-icon">
                        <i>
                          <svg className="svg-icon" id="iq-ui-1-5" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeDasharray="90, 110" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Buttons Group</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/boxShadow' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/boxShadow" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeDasharray=" 84, 104" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Box Shadow</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/colors' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/colors" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeDasharray="97, 117" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Colors</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/cards' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/cards" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeDasharray="79, 99" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Cards</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/carousel' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/carousel" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" strokeDasharray="133, 153" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Carousel</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/grid' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/grid" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeDasharray="83, 103" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Grid</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/images' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/images" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeDasharray="85, 105" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Images</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/listGroup' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/listGroup" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                        </i><span>list Group</span>
                      </Link>
                    </li> 
                    <li className={`${location.pathname === '/modal' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/modal" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" strokeDasharray="87, 107" strokeDashoffset="0">
                            </path>
                          </svg>
                        </i><span>Modal</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/notification' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/notification" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeDasharray="63, 83" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Notifications</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/pagination' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/pagination" className="svg-icon">
                        <i>
                          <svg className="svg-icon" width="18" id="iq-ui-1-17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeDasharray="19, 39" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Pagination</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/popovers' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/popovers" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                          </svg>
                        </i><span>Popovers</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/progressbars' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/progressbars" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </i><span>Progressbars</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/typography' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/typography" className="svg-icon">
                        <i>
                          <svg className="svg-icon" id="iq-ui-1-20" xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" strokeDasharray="67, 87" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Typography</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/tabs' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/tabs" className="svg-icon">
                        <i>
                          <svg className="svg-icon" id="iq-ui-1-21" xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeDasharray="98, 118" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Tabs</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/tooltips' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/tooltips" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </i><span>Tooltips</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/video' ? 'active' : ''} sidebar-layout`}>
                      <Link to="/video" className="svg-icon">
                        <i>
                          <svg className="svg-icon" id="iq-ui-1-23" xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeDasharray="66, 86" strokeDashoffset="0"></path>
                          </svg>
                        </i><span>Video</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion as="ul" className="navbar-nav  sub-nav iq-main-menu">
                <Accordion.Item as="li" eventKey="sidebar-forms" bsPrefix={`nav-item  ${active === 'forms' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('forms')}>
                  <CustomToggle eventKey="sidebar-forms" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i>
                      <svg className="svg-icon" id="iq-form-1" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeDasharray="74, 94" strokeDashoffset="0"></path>
                      </svg>
                    </i>
                    <span className="ms-2">Forms</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="sidebar-forms">
                    <Accordion as="ul" className="navbar-nav  sub-nav iq-main-menu">
                      <Accordion.Item as="li" eventKey="formcontrol" bsPrefix={`nav-item ${active === 'formcontrol' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('formcontrol')}>
                        <CustomToggle eventKey="formcontrol" onClick={(activeKey) => setActiveMenu(activeKey)}>
                          <i>
                            <svg className="svg-icon" width="18" id="iq-form-1-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeDasharray="61, 81" strokeDashoffset="0"></path>
                            </svg>
                          </i>
                          <span>Form Control</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </CustomToggle>
                        <Accordion.Collapse eventKey="formcontrol">
                          <ul id="form1" className="submenu " data-parent="#">
                            <li className={`${location.pathname === '/formElements' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formElements" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                  </svg>
                                </i><span>Form Elements</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/formInput' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formInput" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                  </svg>
                                </i><span>Form Input</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/formValidation' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formValidation" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </i><span>Form Validation</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/formSwitch' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formSwitch" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                  </svg>
                                </i><span>Form Switch</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/formcheckbox' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formcheckbox" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </i><span>Form Checkbox</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/formRadio' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/formRadio" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </i><span>Form Radio</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === 'formTextarea' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="formTextarea" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </i><span>Form Textarea</span>
                              </Link>
                            </li>
                          </ul>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item as="li" eventKey="formwidget" bsPrefix={`nav-item ${active === 'formwidget' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('formwidget')}>
                        <CustomToggle eventKey="formwidget" onClick={(activeKey) => setActiveMenu(activeKey)}>
                          <i>
                            <svg className="svg-icon" width="18" id="iq-user-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </i>
                          <span>Form Widget</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </CustomToggle>
                        <Accordion.Collapse eventKey="formwidget">
                          <ul id="form2" className="submenu" data-parent="#">
                            <li className={`${location.pathname === '/datepickr' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/datepickr" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </i><span>Datepicker</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/choicejs' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/choicejs" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                  </svg>
                                </i><span>ChoiceJS</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/fileUpload' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/fileUpload" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                                </i><span>File Upload</span>
                              </Link>
                            </li>
                            <li className={`${location.pathname === '/form-quill' ? 'active' : ''}  sidebar-layout`}>
                              <Link to="/form-quill" className="svg-icon">
                                <i>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </i><span>Form quill</span>
                              </Link>
                            </li>
                          </ul>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Collapse>
                </Accordion.Item>
              </Accordion>
              <Accordion.Item as="li" eventKey="sidebar-table" bsPrefix={`nav-item  ${active === 'table' ? 'active' : ''} `} className='sidebar-layout' onClick={() => setActive('table')}>
                <CustomToggle eventKey="sidebar-table" onClick={(activeKey) => setActiveMenu(activeKey)}>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </i>
                  <span className="ms-2">Table</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon iq-arrow-right arrow-active" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-table">
                  <ul className="submenu" data-parent="#iq-sidebar-toggle">
                    <li className={`${location.pathname === '/tables-basic' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/tables-basic" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                          </svg>
                        </i>
                        <span className="ms-2">Basic Tables</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/tables-data' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/tables-data" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                        </i>
                        <span className="ms-2">Data Table</span>
                      </Link>
                    </li>
                    <li className={`${location.pathname === '/editableTable' ? 'active' : ''}  sidebar-layout`}>
                      <Link to="/editableTable" className="svg-icon">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                        </i>
                        <span className="ms-2">Editable Table</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <li className={`${location.pathname === '/charts' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/charts" className="svg-icon">
                  <i>
                    <svg className="svg-icon" id="iq-chart-1" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeDasharray="96, 116" strokeDashoffset="0"></path>
                    </svg>
                  </i>
                  <span className="ms-2">Chart</span>
                </Link>
              </li>
              <li className={`${location.pathname === '/icons' ? 'active' : ''}  sidebar-layout`}>
                <Link to="/icons" className="svg-icon">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </i>
                  <span className="ms-2">Icon</span>
                </Link>
              </li> */}
             <div className="mb-5 pb-5"></div>
             <div className="mb-2 pb-2"></div> 
            </Accordion>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SidebarStyle
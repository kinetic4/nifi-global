import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo-2.jpeg";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-email");
  };
  return (
    <div className="auth-wrapper">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-4">
                <Link to={"/"}>
                  <img src={logo} alt="" style={{width: '5rem'}}/>
                </Link>
                <h4 className="card-title mt-3">Create your account</h4>
              </div>
              <div className="auth-form card">
                <div className="card-body">
                  <form
                    name="myform"
                    className="signin_validate row g-3"
                    onSubmit={handleSubmit}
                  >
                    <h5 className="heading-userId" style={{margin: '0 1rem 1rem 3.5px'}}>
                    User ID: 
                    <span className="mx-auto text-primary">GMRC11152540</span>
                    </h5>
                    <div className="col-12">
                      <label htmlFor="referralId" className="form-label">Referral ID</label>
                      <input 
                        type="text"
                        id="referralId"
                        className="form-control"
                        placeholder="Enter referral code (optional)"
                        name="referralId"  
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        className="form-control"
                        placeholder="Enter your full name"
                        name="name"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="hello@example.com"
                        name="email"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        placeholder="+1 (123) 456-7890"
                        name="phone"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Create a strong password"
                        name="password"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          I certify that I am 18 years of age or older, and agree
                          to the{" "}
                          <Link to={"#"} className="text-primary">
                            User Agreement
                          </Link>{" "}
                          and{" "}
                          <Link to={"#"} className="text-primary">
                            Privacy Policy
                          </Link>
                          .
                        </label>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block">
                        Create account
                      </button>
                    </div>
                  </form>
                  <div className="text-center">
                    <p className="mt-3 mb-0">
                      {" "}
                      <Link className="text-primary" to={"/"}>
                        Sign in
                      </Link>{" "}
                      to your account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import Form from 'react-bootstrap/Form';

const Trade = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-step-2");
  };
  
  return (
    <Layout activeMenu={2}>
      {/* Wrap form fields in a container */}
      <div className="card mb-4 mt-4">
        <div className="card-header">
          <h4 className="card-title">Wallet Information</h4>
        </div>
        <div className="card-body">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Wallet amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter wallet amount (minimum $20)"
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Wallet address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter wallet address"
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            
            {/* Button container with proper alignment */}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary save-changes" type="submit">
                Save Changes
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Buy Transaction</h4>
            </div>
          
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Currency</th>
                      <th>Destination</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc BTC"></i> Bitcoin
                      </td>
                      <td>External Wallet ****3f9d</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>
                          Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc LTC"></i> Litecoin
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc XRP"></i> Ripple
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>
                          Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc DASH"></i> Dash
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc BTC"></i> Bitcoin
                      </td>
                      <td>External Wallet ****3f9d</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc BTC"></i> Bitcoin
                      </td>
                      <td>External Wallet ****3f9d</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>
                          Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc LTC"></i> Litecoin
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc XRP"></i> Ripple
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>
                          Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc DASH"></i> Dash
                      </td>
                      <td>External Wallet ****7f2e</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sold
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc BTC"></i> Bitcoin
                      </td>
                      <td>External Wallet ****3f9d</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trade;
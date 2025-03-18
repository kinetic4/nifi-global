import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import PriceAreaDetails from "../charts/price-area-details";
import CopyClipboard from "../element/copy-clipboard";
import Form from 'react-bootstrap/Form'

const PriceDetails = () => {
  const textToCopy = "https://www.nifi.globals/join/12345";

  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-body">
        <div className="container">
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-success text-light">Completed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-success text-light">Completed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-success text-light">Completed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-success text-light">Completed</span>
                          </td>
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
                          <td>
                            <span className="badge bg-danger text-light">failed</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="card">
                <div className="card-body">
                  <Form.Group className="mb-3">
                    <Form.Label>Wallet amount</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter wallet amount (minimum $20)"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Wallet address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter wallet address"
                      required
                    />
                  </Form.Group>
                  <button className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
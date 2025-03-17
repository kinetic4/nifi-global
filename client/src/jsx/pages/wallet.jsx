import React, { useState } from "react";
import qrImg from "../../images/qr.svg";
import DonutChart from "../charts/donut";
import Layout from "../layout/layout";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Wallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");
  const [coinName, setCoinName] = useState("Bitcoin");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log({ coinName, address });
    handleClose();
  };

  return (
    <Layout activeMenu={3}>
      <div className="row">
        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginBottom: '3rem',}}>Wallet</h4>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="wallet-widget card">
            <h5>Estimated Balance</h5>
            <h2>
              <span className="text-primary">0.000</span> <sub>USD</sub>
            </h2>
            <p>= 0.000000 BTC</p>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="wallet-widget card">
            <h5>Available Balance</h5>
            <h2>
              <span className="text-success">0.000</span> <sub>USD</sub>
            </h2>
            <p>= 0.000000 BTC</p>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="wallet-widget card">
            <h5>Pending Balance</h5>
            <h2>
              <span className="text-warning">0.000</span> <sub>USD</sub>
            </h2>
            <p>= 0.000000 BTC</p>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="wallet-widget card">
            <h5>Locked Balance</h5>
            <h2>
              <span className="text-danger">0.000</span> <sub>USD</sub>
            </h2>
            <p>= 0.000000 BTC</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Address</h4>
              <button type="button" className="btn btn-transparent" onClick={handleShow}>
                <svg style={{width: '1.5rem', height: '1.5rem'}} xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"/><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"/><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/></svg>
              </button>

              <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Coin</Form.Label>
                      <Form.Select 
                        value={coinName}
                        onChange={(e) => setCoinName(e.target.value)}
                      >
                        <option value="USDT">USDT</option>
                        <option value="Ethereum">BSC 2.0</option>
                
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Wallet Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter wallet address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer style={{borderTop: 'none'}}>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Coin Name</th>
                      <th>Address</th>
                      <th>QR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="coin-name">
                          <i className="cc BTC"></i>
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                      <td>
                        <img className="qr-img" src={qrImg} alt="" width="40" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="coin-name">
                          <i className="cc BTC"></i>
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                      <td>
                        <img className="qr-img" src={qrImg} alt="" width="40" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="coin-name">
                          <i className="cc BTC"></i>
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                      <td>
                        <img className="qr-img" src={qrImg} alt="" width="40" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="coin-name">
                          <i className="cc BTC"></i>
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                      <td>
                        <img className="qr-img" src={qrImg} alt="" width="40" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Balance</h4>
             
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="balance-chart">
                    <DonutChart />
                    <h4>Total Balance = $ 5360</h4>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <ul className="balance-widget">
                    <li>
                      <div className="icon-title">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </div>
                      <div className="text-right">
                        <h5>0.000242 BTC</h5>
                        <span>0.125 USD</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-title">
                        <i className="cc USDT"></i>
                        <span>Tether</span>
                      </div>
                      <div className="text-right">
                        <h5>0.000242 USDT</h5>
                        <span>0.125 USD</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-title">
                        <i className="cc XTZ"></i>
                        <span>Tezos</span>
                      </div>
                      <div className="text-right">
                        <h5>0.000242 XTZ</h5>
                        <span>0.125 USD</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-title">
                        <i className="cc XMR"></i>
                        <span>Monero</span>
                      </div>
                      <div className="text-right">
                        <h5>0.000242 XMR</h5>
                        <span>0.125 USD</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-title">
                        <i className="cc XMR"></i>
                        <span>Monero</span>
                      </div>
                      <div className="text-right">
                        <h5>0.000242 XMR</h5>
                        <span>0.125 USD</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Available Balance </h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th>Balance</th>
                      <th>Available</th>
                      <th>Locked</th>
                      <th>% Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Usdt</span>
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td className="success-arrow">
                        <strong>0.005%</strong>
                        <i className="icofont-arrow-up ml-2"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td className="success-arrow">
                        <strong>0.005%</strong>
                        <i className="icofont-arrow-up ml-2"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td className="success-arrow">
                        <strong>0.005%</strong>
                        <i className="icofont-arrow-up ml-2"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td className="success-arrow">
                        <strong>0.005%</strong>
                        <i className="icofont-arrow-up ml-2"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Total </h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Hash</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Withdrawals </h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Fee</th>
                      <th>Date</th>
                      <th>Hash</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0.02%</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0.02%</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>12345</td>
                      <td className="coin-name">
                        <i className="cc BTC"></i>
                        <span>Bitcoin</span>
                      </td>
                      <td>0</td>
                      <td>0.02%</td>
                      <td>Jan 01</td>
                      <td>#1236598745565</td>
                      <td>Pending</td>
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

export default Wallet;

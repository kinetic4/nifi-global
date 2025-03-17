import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import Form from 'react-bootstrap/Form'

const Trade = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [show2, setShow2] = useState(false);
  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => {
  //   setShow(false);
  //   setShow2(true);
  // };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-step-2");
  };
  return (
    <Layout activeMenu={2}>
      {/* <div className="row">
        <div className="col-xxl-3 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Buy </h4>
            </div>
            <div className="card-body">
              <form
                method="post"
                name="myform"
                className="currency_validate trade-form row g-3"
              >
                <div className="col-12">
                  <label className="form-label">Send</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">USD</option>
                      <option value="master">Euro</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Receive</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <p className="mb-0">
                  1 USD ~ 0.000088 BTC
                  <Link to={"#"}>
                    Expected rate <br />
                    No extra fees
                  </Link>
                </p>

                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleShow}
                >
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Sell </h4>
            </div>
            <div className="card-body">
              <form
                method="post"
                name="myform"
                className="currency_validate trade-form row g-3"
              >
                <div className="col-12">
                  <label className="form-label">Send</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">USD</option>
                      <option value="master">Euro</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Receive</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <p className="mb-0">
                  1 USD ~ 0.000088 BTC{" "}
                  <Link to={"#"}>
                    Expected rate <br />
                    No extra fees
                  </Link>
                </p>

                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleShow}
                >
                  Sell Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Transfer </h4>
            </div>
            <div className="card-body">
              <form
                name="myform"
                className="currency_validate trade-form row g-3"
              >
                <div className="col-12">
                  <label className="form-label">Send</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">USD</option>
                      <option value="master">Euro</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Receive</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <p className="mb-0">
                  1 USD ~ 0.000088 BTC{" "}
                  <Link to={"#"}>
                    Expected rate <br />
                    No extra fees
                  </Link>
                </p>

                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={handleShow}
                >
                  Transfer Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Convert </h4>
            </div>
            <div className="card-body">
              <form
                method="post"
                name="myform"
                className="currency_validate trade-form row g-3"
              >
                <div className="col-12">
                  <label className="form-label">From</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">USD</option>
                      <option value="master">Euro</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">To</label>
                  <div className="input-group">
                    <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select>
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="0.0214 BTC"
                    />
                  </div>
                </div>

                <p className="mb-0">
                  1 USD ~ 0.000088 BTC{" "}
                  <Link to={"#"}>
                    Expected rate <br />
                    No extra fees
                  </Link>
                </p>

                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={handleShow}
                >
                  Convert Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-success text-light text-center">Completed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-success text-light text-center">Completed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-success text-light text-center">Completed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-success text-light text-center">Completed</span>
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
                      <span style={{margin: '1rem'}} class="badge bg-danger text-light text-center">failed</span>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Sell Transaction</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Coin Name</th>
                      <th>Wallet</th>
                      <th>Amount</th>
                      <th>Balance</th>
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
                      <td>Using - Bank *******5264</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
              <h4 className="card-title">Transfer Transaction</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Coin Name</th>
                      <th>Wallet</th>
                      <th>Amount</th>
                      <th>Balance</th>
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
                      <td>Using - Bank *******5264</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
              <h4 className="card-title">Convert Transaction</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Coin Name</th>
                      <th>Wallet</th>
                      <th>Amount</th>
                      <th>Balance</th>
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
                      <td>Using - Bank *******5264</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******8475</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
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
                      <td>Using - Card *******2321</td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>-0.125 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Form.Group className="mb-3">
                      <Form.Label>Wallet amount</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter wallet amount (minimum $20)"
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Wallet address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter wallet address"
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
  
    </Layout>
  );
};

export default Trade;

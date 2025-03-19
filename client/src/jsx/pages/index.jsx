import React, {useRef, useEffect, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import AreaChart from "../charts/area";
import DonutChart from "../charts/donut";
import PriceArea from "../charts/price-area";
import profile2 from "../../images/profile/2.png";
import Layout from "../layout/layout";
import CopyClipboard from "../element/copy-clipboard";
import CountUp from 'react-countup';
import { Card, Button } from 'react-bootstrap';



const Dashboard = () => {

  const [referralCount, setReferralCount] = useState(0);
  const [btcEarned, setBtcEarned] = useState(0);
  const targetReferrals = 12;
  const targetBtc = 0.025;

  const textToCopy = 'https://www.nifi.globals/join/12345'

  useEffect(() => {
    // Start the animation when component mounts
    setTimeout(() => {
      setReferralCount(targetReferrals);
      setBtcEarned(targetBtc);
    }, 500);
  }, []);


  return (
    <Layout activeMenu={1}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="invite-content">
                <h4>Invite a friend and get $30</h4>
                <p>
                  You will receive up to $30 when they： 1.Buy Crypto 2. Deposit
                  3. Finish Trading Tasks <br />
                  <Link to={"#"}>Learn more</Link>
                </p>

                <div className="copy-link">
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={textToCopy}
                      />
                      <CopyClipboard 
                        text={textToCopy}
                        buttonText="Copy"
                        successMessage='Copied'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-12">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <div className="invite-content">
            <h4 className="mb-4">Your Referral Stats</h4>
            
            <div className="referral-stats d-flex justify-content-around mb-4">
              <div className="stat-item text-center">
                <div className="stat-value display-4 fw-bold text-primary">
                  <CountUp
                    start={0}
                    end={targetReferrals}
                    duration={2.5}
                    separator=","
                  />
                </div>
                <div className="stat-label text-muted">Total Referrals</div>
              </div>
              
              <div className="stat-item text-center">
                <div className="stat-value display-4 fw-bold text-success">
                  <CountUp
                    start={0}
                    end={targetBtc}
                    duration={2.5}
                    decimals={3}
                    prefix="₿ "
                  />
                </div>
                <div className="stat-label text-muted">Earned Rewards</div>
              </div>
            </div>
            
            <p className="text-center mb-4">
              Keep earning! Invite more friends to Nifi Global and get free BTC rewards.{" "}
              <a href="#" className="text-decoration-none">Learn more</a>
            </p>
            
            <div className="referral-actions d-flex justify-content-center gap-2">
              <Button variant="primary" className="px-4">
                Invite Friends
              </Button>
              <Button variant="outline-secondary" className="px-4">
                View History
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6">
          <div className="price-widget position-relative bg-btc">
            <Link to={"#"}>
              <div className="price-content">
                <div className="icon-title">
                <svg style={{width: '3rem', height: '2rem', color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><circle cx="12" cy="12" r="3"/><path d="M2 9a4 4 0 0 0 4-4v0m12 14a4 4 0 0 1 4-4v0"/></g></svg>
                  <span>Total Earning</span>
                </div>
                <h5>$ 11,785.10</h5>
              </div>
              <div className="price-chart">
                {typeof window !== 'undefined' && <PriceArea />}
              </div>
            </Link>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6">
          <div className="price-widget position-relative bg-eth">
            <Link to={"#"}>
              <div className="price-content">
                <div className="icon-title">
                <svg style={{width: '3rem', height: '2rem', color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1.193c0 .52.27 1.002.711 1.275l3.866 2.39a3 3 0 1 0 2.846 0l3.866-2.39A1.5 1.5 0 0 0 14 4.693V3.5A1.5 1.5 0 0 0 12.5 2zM3 3.5a.5.5 0 0 1 .5-.5H5v3.208l-1.763-1.09A.5.5 0 0 1 3 4.693zm3 3.326V3h4v3.826L8.263 7.9a.5.5 0 0 1-.526 0zm5-.618V3h1.5a.5.5 0 0 1 .5.5v1.193a.5.5 0 0 1-.237.425zM6 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0"/></svg>                  <span>Rewards</span>
                </div>
                <h5>$ 11,785.10</h5>
              </div>
              <div className="price-chart">
                {typeof window !== 'undefined' && <PriceArea />}
              </div>
             </Link>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6">
          <div className="price-widget position-relative bg-usdt">
            <Link to={"/price-details"}>
              <div className="price-content">
                <div className="icon-title">
                <svg style={{width: '3rem', height: '2rem', color: 'white', }} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M128 56h-16V16a8 8 0 0 1 16 0Zm64 67.62V72a16 16 0 0 0-16-16h-48v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L112 116.69V56H64a16 16 0 0 0-16 16v128a8 8 0 0 0 8 8h74.7c.32.67.67 1.34 1.05 2l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03"/></svg>                  <span>Available withdrawl amount</span>
                </div>
                <h5>$ 11,785.10</h5>
              </div>
              <div className="price-chart">
                {typeof window !== 'undefined' && <PriceArea />}
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="col-xxl-3 col-xl-6 col-lg-6">
          <div className="card welcome-profile">
            <div className="card-body">
              <img src={profile2} alt="" />
              <h4>Welcome, Jannatul Maowa!</h4>
              <p>
                Looks like you are not verified yet. Verify yourself to use the
                full potential of Qash.
              </p>

              <ul>
                <li>
                  <Link to={"#"}>
                    <span className="verified">
                      <i className="icofont-check-alt"></i>
                    </span>
                    Verify account
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <span className="not-verified">
                      <i className="icofont-close-line"></i>
                    </span>
                    Two-factor authentication (2FA)
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <span className="not-verified">
                      <i className="icofont-close-line"></i>
                    </span>
                    Deposit money
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xxl-3 col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Quick Trade </h4>
            </div>
            <div className="card-body">
              <form
                method="post"
                name="myform"
                className="currency_validate trade-form row g-3"
              >
                <div className="col-12">
                  <label className="form-label">You Send</label>
                  <div className="input-group">
                    <select className="form-select" name="method">
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
                  <label className="form-label">You get</label>
                  <div className="input-group">
                    <select className="form-select" name="method">
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
                  type="submit"
                  name="submit"
                  className="btn btn-success btn-block"
                >
                  Exchange Now
                </button>
              </form>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xxl-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Balance</h4>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="balance-chart">
                   {typeof window !== 'undefined' && <DonutChart />}
                    <h4>Total Balance = $ 5360</h4>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-xxl-8 col-xl-8">
          <div className="card home-chart">
            <div className="card-header">
              <h4 className="card-title home-chart">Analytics</h4>
              <select
                className="form-select"
                name="report-type"
                id="report-select"
              >
                <option value="1">Bitcoin</option>
                <option value="2">Litecoin</option>
              </select>
            </div>
            <div className="card-body">
              <div className=" home-chart-height">
                {typeof window !== 'undefined' && <AreaChart />}
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="chart-price-value">
                      <span>24hr Volume</span>
                      <h5>$236,368.00</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="chart-price-value">
                      <span>Marketcap</span>
                      <h5>$236.025B USD</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="chart-price-value">
                      <span>24hr Volume</span>
                      <h5>56.3 BTC</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="chart-price-value">
                      <span>All Time High</span>
                      <h5>$236,368.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Investment</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar className="balance-widget trade-balance">
                <li>
                  <h5>Investment</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Total margin currency balance.</span>
                  </div>
                </li>
                <li>
                  <h5>Equity</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>
                      Investment combined with unrealized profit/loss
                    </span>
                  </div>
                </li>
                <li>
                  <h5>Used Margin</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Total margin amount used in open positions.</span>
                  </div>
                </li>
                <li>
                  <h5>Free Margin</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Usable margin balance. Equal to equity minus.</span>
                  </div>
                </li>
                <li>
                  <h5>Margin Level</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Percentage ratio of equity to used margin.</span>
                  </div>
                </li>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        {/* <div className="col-xxl-4 col-xl-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Position Valuation</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar className="balance-widget position-value">
                <li>
                  <h5>Opening Cost</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Original cost of all open positions.</span>
                  </div>
                </li>
                <li>
                  <h5>Current Valuation</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Paper valuation of all open positions.</span>
                  </div>
                </li>
                <li>
                  <h5>Profit</h5>
                  <div className="text-right">
                    <h5>$0.0000 (0,00%)</h5>
                    <span>Paper profit of all open positions..</span>
                  </div>
                </li>
                <li>
                  <h5>Loss</h5>
                  <div className="text-right">
                    <h5>$0.0000 (0,00%)</h5>
                    <span>Paper loss of all open positions.</span>
                  </div>
                </li>
                <li>
                  <h5>Fees</h5>
                  <div className="text-right">
                    <h5>$0.0000</h5>
                    <span>Current Fee</span>
                  </div>
                </li>
              </PerfectScrollbar>
            </div>
          </div>
        </div> */}
        <div className="col-xxl-8 col-xl-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">My Transaction</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive transaction-table">
                <table className="table table-striped responsive-table">
                  <thead>
                    <tr>
                      <th>Ledger ID</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Currency</th>
                      <th>Amount</th>
                      <th>Fee</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>523640</td>
                      <td>January 15</td>
                      <td>
                        <span className="danger-arrow">
                          <i className="icofont-arrow-down"></i>
                          Sell
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc BTC"></i> Bitcoin
                      </td>
                      <td className="text-danger">-0.000242 BTC</td>
                      <td>0.02%</td>
                      <td>
                        <strong>0.25484 BTC</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>523640</td>
                      <td>January 15</td>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc LTC"></i> Litecoin
                      </td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>0.02%</td>
                      <td>
                        <strong> 0.25484 LTC</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>523640</td>
                      <td>January 15</td>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc XRP"></i> Ripple
                      </td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>0.02%</td>
                      <td>
                        <strong> 0.25484 LTC</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>523640</td>
                      <td>January 15</td>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc DASH"></i> Dash
                      </td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>0.02%</td>
                      <td>
                        <strong> 0.25484 LTC</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>523640</td>
                      <td>January 15</td>
                      <td>
                        <span className="success-arrow">
                          <i className="icofont-arrow-up"></i>Buy
                        </span>
                      </td>
                      <td className="coin-name">
                        <i className="cc LTC"></i> Litecoin
                      </td>
                      <td className="text-success">-0.000242 BTC</td>
                      <td>0.02%</td>
                      <td>
                        <strong> 0.25484 LTC</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Products</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar className="balance-widget trade-balance">
                <li>
                  <h5>Bitcoin</h5>
                  <div className="text-right">
                   <button className="btn btn-primary">
                    Buy Now
                   </button>
                  </div>
                </li>
                <li>
                  <h5>Usdt</h5>
                  <div className="text-right">
                  <button className="btn btn-primary">
                    Buy Now
                   </button>
                  </div>
                </li>
                <li>
                  <h5>BSC 2.0</h5>
                  <div className="text-right">
                  <button className="btn btn-primary">
                    Buy Now
                   </button>
                   </div>
                </li>
               
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

import React, { useState } from "react";

const Pricing = () => {
  // Define SVG paths for each feature per tab
  const tabIcons = {
    Basic: {
      "Feature 1": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 2": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 3": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 4": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 5": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    Standard: {
      "Feature 1": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 2": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 3": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 4": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 5": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    Platinum: {
      "Feature 1": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 2": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 3": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 4": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 5": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    Premium: {
      "Feature 1": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 2": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 3": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 4": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "Feature 5": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  };

  // Define tabs with their associated icons
  const tabs = [
    { name: "Basic", price: "$19", icons: tabIcons.Basic },
    { name: "Standard", price: "$39", icons: tabIcons.Standard },
    { name: "Platinum", price: "$119", icons: tabIcons.Platinum },
    { name: "Premium", price: "$219", icons: tabIcons.Premium },
  ];

  const features = [
    { name: "Feature 1" },
    { name: "Feature 2" },
    { name: "Feature 3" },
    { name: "Feature 4" },
    { name: "Feature 5" },
  ];

  const [activeTab, setActiveTab] = useState(1); // Default to Basic tab

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive pricing pt-2 mb-0">
                <table id="my-table" className="table mb-3">
                  <thead>
                    <tr>
                      <th className="text-center prc-wrap"></th>
                      {tabs.map((tab, index) => (
                        <th
                          key={tab.name}
                          className="text-center prc-wrap"
                          onClick={() => setActiveTab(index)}
                        >
                          <div
                            className={`prc-box ${
                              activeTab === index ? "active" : ""
                            }`}
                          >
                            <div className="h3 pt-4">
                              {tab.price}
                              <small> / Per month</small>
                            </div>
                            <span className="type">{tab.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature) => (
                      <tr key={feature.name}>
                        <th className="text-center" scope="row">
                          {feature.name}
                        </th>
                        {tabs.map((tab) => (
                          <td
                            key={tab.name}
                            className="text-center child-cell"
                          >
                            {tab.icons[feature.name] && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-primary"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  d={tab.icons[feature.name]}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="30"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </td>
                      {tabs.map((tab) => (
                        <td key={tab.name + "btn"} className="text-center">
                          <a href="#" className="btn btn-primary mt-3">
                            Purchase
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

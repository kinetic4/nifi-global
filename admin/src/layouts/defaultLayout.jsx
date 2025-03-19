import React from "react";

// react-router
import { Outlet } from "react-router-dom";

// Partials
import HeaderStyle from "../components/partials/headerStyle/headerStyle";
import SidebarStyle from "../components/partials/SidebarStyle/sidebarStyle";
import FooterStyle from "../components/partials/footerStyle/footerStyle";

// Router Component
// import Layout1Route from "../../router/layout1-route";

const defaultLayout = () => {
  return (
    <>
      <div className="wrapper">
        <HeaderStyle />
        <SidebarStyle />
        <div className="content-page">
          <Outlet />
        </div>
      </div>
      <FooterStyle />
    </>
  );
};

export default defaultLayout;

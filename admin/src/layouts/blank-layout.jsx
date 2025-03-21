import React from "react";

// react-router
import { Outlet } from "react-router-dom";
import Login from "../views/pages/auth/login";

const BlankLayout = () => {
    return (
        <>
            <div className="wrapper">
                <Outlet />
                <Login />
            </div>
        </>
    );
};

export default BlankLayout

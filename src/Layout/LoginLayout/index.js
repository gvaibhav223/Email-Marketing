import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Box
        className="home-landing-layout"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Box className="set-height" component="main">
          <Outlet />
        </Box>

        <Box className="footer-comp" component="footer">
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomeLayout;

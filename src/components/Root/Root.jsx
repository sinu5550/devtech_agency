import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import ScrollToTop from "../Scroll/ScrollToTop";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

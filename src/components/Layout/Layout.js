import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Nabvar from "../Navbar/Nabvar";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Nabvar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;

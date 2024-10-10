import React from "react";
import "./Header.css";
import logo from "../../images/layout_set_logo2.png";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header-logo" src={logo} alt="" />
        <h1 className="header-title">Header</h1>
      </div>
    </>
  );
}

export default Header;

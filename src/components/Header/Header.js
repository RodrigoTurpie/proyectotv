import React from "react";
import "./Header.css";
import logo from "../../images/layout_set_logo2.png";
import { Link } from "react-router-dom";

function Header() {

  const handleClickSearch=(e) => {
    e.preventDefault();
    console.log(e.target.value)

  }

  return (
    <>
      <div className="header">
        <img className="header-logo" src={logo} alt="" />
        <h1 className="header-title">Header</h1>
        <div>
          <form className="header-buscar" action="">
       

            <input onChange={handleClickSearch} className="header-buscar-input" type="text" name="" id="" placeholder="Buscar por nombre o número"/>
  
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;

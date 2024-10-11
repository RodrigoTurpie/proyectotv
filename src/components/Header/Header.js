import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/layout_set_logo2.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate();

  const handleClickSearch = (e) => {
    e.preventDefault();
    setKeyword("")
    e.target.reset("")
    navigate(`/search/?keyword=${keyword}`);
  };


  return (
    <>
      <div className="header">
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />
          <h1 className="header-title">Header</h1>
          <div>
            <form
              onSubmit={handleClickSearch}
              className="header-buscar"
              action=""
            >
              <input
                className="header-buscar-input"
                type="text"
                name=""
                id=""
                placeholder="Buscar por nombre o número"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

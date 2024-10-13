import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <>
      <div className="navbar">
     <ul className="navbar-links">
       <li><Link className="navbar-links-item" to="/">Home</Link></li>
       <li><Link className="navbar-links-item" to="/admin">Admin</Link></li>
     </ul>
      </div>
     
    </>
  );
};

export default Nabvar;

import React from "react";
import "./Navbar.css";
import Logo from "../assets/brand4.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <Link to={"/aboutUs"}>
          <p>About us</p>
        </Link>
        <Link to ={"/add"}>
        <p>Add New Recipe</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

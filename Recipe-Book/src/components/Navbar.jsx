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
        <p>Contact us</p>
      </div>
    </div>
  );
}

export default Navbar;

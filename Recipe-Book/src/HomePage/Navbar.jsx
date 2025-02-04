import React from "react";
import "./Navbar.css"
import Logo from "../assets/brand4.svg"


function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} />
        <p>Home Page</p>
        <p>About us</p>
        <p>Contact us</p>
      </div>
    </div>
  );
}

export default Navbar;

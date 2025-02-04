import React from "react";
import Logo from "../assets/brand4.svg";
import "./Footer.css"


function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} />
        <p>Welcome to our page</p>
      </div>
      <div className="footer-1">
        <h3>Tastebite</h3>
        <p>About us</p>
        <p>Careers</p>
        <p>Contact us</p>
        <p>Feedback</p>
      </div>
      <div className="footer-2">
        <h3>Follow</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./AboutUs.css";
import Profile from "../assets/profile.webp"
function AboutUs() {
  return (
    <div className="about-container">
      <div className="user1">
        <img src={Profile} />
        <p>Name: Leen Zein</p>
        <p>Age:28</p>
      </div>
      <div className="user1">
        <img src={Profile} />
        <p>Name: Jihan Shamas</p>
        <p>Age:28</p>
      </div>
    </div>
  );
}

export default AboutUs;

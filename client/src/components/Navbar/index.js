import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <li id="home-nav">Home</li>
      <li id="about-nav">About</li>
      <li id="services-nav">Services</li>
      <li id="contact-nav">Contact</li>
    </nav>
  );
}

export default Navbar;

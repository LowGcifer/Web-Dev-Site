import React from "react";
import "./navbar.css";
import $ from "jquery";

function Navbar() {
  return (
    <nav className="navbar">
      <li id="home-nav">
        <a className="navlink" href="/">
          Home
        </a>
      </li>
      <li id="about-nav">
        <a className="navlink" href="/about">
          About
        </a>
      </li>
      <li id="services-nav">
        <a className="navlink" href="/services">
          Services
        </a>
      </li>
      <li id="contact-nav">
        <a className="navlink" href="/contact">
          Contact
        </a>
      </li>
    </nav>
  );
}

export default Navbar;

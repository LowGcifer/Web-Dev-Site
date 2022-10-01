import "../../fonts.css";
import React from "react";
import "./navbar.css";
import $ from "jquery";

function Navbar() {
  return (
    <nav className="navbar">
      <li id="logan-home">
        <a className="navlink" href="/">
          Logan Isley
        </a>
      </li>
      <li id="home-nav">
        <a className="navlink" href="/">
          HOME
        </a>
      </li>
      <li id="about-nav">
        <a className="navlink" href="/about">
          ABOUT
        </a>
      </li>
      <li id="services-nav">
        <a className="navlink" href="/services">
          SERVICES
        </a>
      </li>
      <li id="contact-nav">
        <a className="navlink" href="/contact">
          CONTACT
        </a>
      </li>
    </nav>
  );
}

export default Navbar;

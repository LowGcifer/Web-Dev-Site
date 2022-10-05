import "../../fonts.css";
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const classNameState = ({ isActive }) =>
    isActive ? "highlighted" : "navlink";
  return (
    <nav className="navbar">
      <li id="logan-home">
        <a className="navlink" href="/">
          Logan Isley
        </a>
      </li>
      <li id="home-nav">
        <NavLink to="/" className={classNameState}>
          HOME
        </NavLink>
      </li>
      <li id="about-nav">
        <NavLink className={classNameState} to="/about">
          ABOUT
        </NavLink>
      </li>
      <li id="services-nav">
        <NavLink className={classNameState} to="/services">
          SERVICES
        </NavLink>
      </li>
      <li id="contact-nav">
        <NavLink className={classNameState} to="/contact">
          CONTACT
        </NavLink>
      </li>
    </nav>
  );
}

export default Navbar;

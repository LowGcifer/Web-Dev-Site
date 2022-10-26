import "../../fonts.css";
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Hamburger from "../../components/Hamburger";
import { useState } from "react";

function Navbar() {
  const classNameState = ({ isActive }) =>
    isActive ? "highlighted" : "navlink-custom";
  return (
    <nav className="navbar-custom">
      <li id="logan-home">
        <NavLink className="navlink-custom" to="/">
          Logan Isley
        </NavLink>
      </li>

      <li id="hamburger">
        <Hamburger></Hamburger>
      </li>

      <div id="main-buttons">
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
      </div>
    </nav>
  );
}

export default Navbar;

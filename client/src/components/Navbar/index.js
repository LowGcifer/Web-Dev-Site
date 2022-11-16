import "../../fonts.css";
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Hamburger from "../../components/Hamburger";
import { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log("Button Pressed");
  };

  const classNameState = ({ isActive }) =>
    isActive ? "highlighted" : "navlink-custom";
  return (
    <nav className="navbar-custom">
      <li id="logan-home">
        <NavLink className="navlink-custom" to="/">
          Logan Isley
        </NavLink>
      </li>

      <ul>
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
      </ul>
      <div className="navbar-mobile">
        <button id="hamburger" onClick={toggleNavExpanded}>
          <Hamburger />
        </button>

        {/* <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div> */}
      </div>

      <style jsx>
        {`
          @media (max-width: 1024px) {
            .navbar-custom ul {
              display: ${isNavExpanded ? "inline" : "none"};
              position: absolute;
              top: 43px;
              left: 0px;
              flex-direction: column;
              width: 100vw;
              height: 100vh;
              background-color: black;
              border-top: 2px solid #3f58ac;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;

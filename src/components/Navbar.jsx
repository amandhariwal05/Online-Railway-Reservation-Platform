import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar-container">
      <a href="" id="logo-container">
        <img id="Animated-logo" src="/Animated-Icon.gif" alt="Logo" />
      </a>
      <div id="navbar-links">
        <a href="" className="navbar-link">
          Bookings
        </a>
        <a href="" className="navbar-link">
          Charts
        </a>
        <a href="" className="navbar-link">
          Offers
        </a>
        <a href="" className="navbar-link">
          PNR Status
        </a>
        <a href="" className="navbar-link">
          Help
        </a>
      </div>
      <div id="navbar-login-section">
        <div id="signup-button">
          <a href="">Sign up</a>
        </div>
        <div>
          <button id="login-button" href="">
            <a href="">Log In</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

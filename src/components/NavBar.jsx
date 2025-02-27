import { MdOutlineFilterList } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar-container">
      <div id="navbar-left-section">
        <a href="" id="logo-container">
          <img id="navbar-logo" src="/Animated-Icon.gif" alt="Logo" />
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
      </div>
      <div id="navbar-right-section">
        <div id="signup-button">
          <a href="">Sign up</a>
        </div>
        <div id="login-button">
          <a href="">Log In</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

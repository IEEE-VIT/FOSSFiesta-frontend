import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";
import NavLogo from "../../assets/svg/navbar-svg/navbar-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={NavLogo} alt="" className="nav-logo" />
      </Link>

      <div className="nav-links">
        <div>
          <Link to="">Home</Link>
        </div>
        <div>
          <Link to="">About</Link>
        </div>
        <div>
          <Link to="">Timeline</Link>
        </div>
        <div>
          <Link to="">Code Sprint</Link>
        </div>
        <div>
          <Link to="">FAQs</Link>
        </div>
      </div>
      <Link to="/register">
        <button className="nav-btn">REGISTER</button>
      </Link>
    </nav>
  );
};

export default Navbar;

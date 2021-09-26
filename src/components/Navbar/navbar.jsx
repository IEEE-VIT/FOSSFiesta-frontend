import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";
import NavLogo from "../../assets/svg/navbar-svg/navbar-logo.svg";


const Navbar = () => {
  return (
    <nav>
      <img src={NavLogo} alt="" className="nav-logo"/>
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
      <a href="https://ieeevit.typeform.com/to/IHmhmcDk" target="_blank"><button className="nav-btn">REGISTER</button></a>
    </nav>
  );
};

export default Navbar;

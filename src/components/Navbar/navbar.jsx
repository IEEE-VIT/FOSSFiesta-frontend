import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>FOSSFiesta</h1>
      <div className="navs">
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
      <button>Register</button>
    </nav>
  );
};

export default Navbar;

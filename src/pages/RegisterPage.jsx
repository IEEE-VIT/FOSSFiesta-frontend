import React from "react";

import NavbarRG from "../components/Navbar/navbar-rg";
import Register from "../components/Register/register";

const RegisterPage = () => {
  return (
    <div className="App">
      <div className="navbar">
        <NavbarRG />
      </div >
      <div className="content"></div>
      <Register />
    </div>
  );
};

export default RegisterPage;

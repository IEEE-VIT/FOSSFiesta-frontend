import { useMediaQuery } from "@material-ui/core";
import React from "react";

import NavbarRG from "../components/Navbar/navbar-rg";
import Register from "../components/Register/register";

const RegisterPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="App">
      <div className="navbar">
        <NavbarRG />
      </div >
      <div className="content">
      <Register />
      </div>
    
    </div>
  );
};

export default RegisterPage;

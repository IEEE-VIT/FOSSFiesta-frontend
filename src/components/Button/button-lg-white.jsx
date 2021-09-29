import React from "react";
import "./button-lg-white.css";

const ButtonLgWhite = ({ children }) => {
  return (
    <div>
      <button className="custom-btn-lg-white">{children}</button>
    </div>
  );
};

export default ButtonLgWhite;
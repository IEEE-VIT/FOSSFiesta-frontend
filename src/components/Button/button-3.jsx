import React from "react";
import "./button-3.css";

const Button3 = ({ children }) => {
  return (
    <div>
      <button className="custom-btn-3">{children}</button>
    </div>
  );
};

export default Button3;
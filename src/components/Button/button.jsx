import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className="custom-btn">{children}</button>
    </div>
  );
};

export default Button;

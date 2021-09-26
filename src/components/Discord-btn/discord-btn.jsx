import React from "react";

import "./discord-btn.styles.css";
import DiscordBtnLogo from "../../assets/discord-btn-without-dropsh.svg";


const DiscordBtn = () => {
    return ( 
      <div className="discord-btn">
        <img src={DiscordBtnLogo} alt="" />
      </div>
    );
  };
  
  export default DiscordBtn;
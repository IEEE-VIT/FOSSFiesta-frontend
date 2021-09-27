import React from "react";

import "./discord-btn.styles.css";
import DiscordBtnLogo from "../../assets/svg/discordbtn-svg/discord-btn.svg";


const DiscordBtn = () => {
    return ( 
      <div className="discord-btn">
        <img src={DiscordBtnLogo} alt="" />
      </div>
    );
  };
  
  export default DiscordBtn;
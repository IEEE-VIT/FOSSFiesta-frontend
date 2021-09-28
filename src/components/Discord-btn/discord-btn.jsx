import React from "react";

import "./discord-btn.styles.css";
import DiscordBtnLogo from "../../assets/svg/discordbtn-svg/discord-btn.svg";

const DiscordBtn = () => {
  return (
    <div className="discord-btn">
      <a
        href="https://discord.com/invite/dPUFEGdqPH"
        target="_blank"
        rel="noreferrer"
      >
        <img src={DiscordBtnLogo} alt="" />
      </a>
    </div>
  );
};

export default DiscordBtn;

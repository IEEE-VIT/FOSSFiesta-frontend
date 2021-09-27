import React from "react";
import "./sessions.css";

import Session1 from "../../assets/svg/sessions-svg/sessions-1.svg";
import Session2 from "../../assets/svg/sessions-svg/sessions-2.svg";

const Sessions = () => {
  return (
    <div className="session-container">
      <div className="session-1">
        <div className="session-1-text">
          <div className="session-1-heading-container">
            <h1 className="session-1-heading">Coffee with Open Source</h1>
            <hr className="session-1-hr" />
          </div>

          <p className="session-1-subtext">
            Are you unsure what Hacktoberfest is? You won't be after Coffee with
            Open Source since we've got you covered from the beginning of open
            source contribution through your incredible journey of cracking
            programmes like GSoC and Summer of Bitcoin. We'll wrap up Coffee
            with Open Source with a beginner-friendly Introduction to Github, in
            which you'll learn everything and more about GitHub than your peers.
          </p>
        </div>
        <div className="session-1-img">
          <img src={Session1} alt="" />
        </div>
      </div>
      <div className="session-2">
        <div className="session-2-img session-2-img-lg">
          <img src={Session2} alt="" />
        </div>
        <div className="session-2-text">
          <div className="session-2-heading-container">
            <h1 className="session-2-heading">Git. Set. Go!</h1>
            <hr className="session-2-hr" align="right" />
          </div>

          <p className="session-2-subtext">
            After you have the fine knowledge imparted from Coffee with Open
            Source, Git. Set. Go will help you cover the topics of Git and we
            will help you find your very first contribution to open source with
            a PR. This will indeed give you a kickstart on how to apply your
            wonderful programming language skills on real time applications like
            Django and Flask or Node.js and React.
          </p>
        </div>
        <div className="session-2-img session-2-img-sm">
          <img src={Session2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sessions;

import React from "react";
import "./codesprint.styles.css";

import codesprint2 from "../../assets/svg/codesprint-svg/codesprint-left.svg";
import codesprint1 from "../../assets/svg/codesprint-svg/codesprint-right.svg";

const CodeSprint = () => {
  return (
    <div>
      <div className="codesprint-container">
      <div className="codesprint-1">
        <div className="codesprint-1-text">
        <div className="codesprint-1-heading">Code Sprint</div>
        <hr className="codesprint-1-hr" />
        <div className="codesprint-1-subtext">
          <p>
            What good is knowledge until it is put to the test? Well, code
            sprint is one of the most eagerly anticipated competitions from us
            during Hacktober, as you will be competing in a 24-hour sprint. The
            goal is to merge as many PRs as possible into the main branch in the
            allotted period. Every merging PR will have its own set of points,
            and the person with the most wins.
          </p>
        </div>
        </div>
        <img src={codesprint1} alt="" className="codesprint-1-img"/>
      </div>


      {/* <div className="codesprint-2">
        <div className="codesprint-2-img">
          <img src={codesprint2} alt=""/>
        </div>
        <div className="codesprint-2-text">
          <div className="codesprint-2-heading codesprint-2-heading1"><h1>SPRINT</h1> </div>    
          <div className="codesprint-2-heading codesprint-2-heading2"><h1>CONTRIBUTE. SOLVE. WIN.</h1></div>          
        </div>
      </div>*/}
    </div> 
    </div>
  );
};

export default CodeSprint;

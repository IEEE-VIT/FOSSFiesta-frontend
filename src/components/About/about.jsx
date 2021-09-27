import React from "react";
import "./about.styles.css";
import smLeaf1 from "../../assets/svg/about-svg/about-sm-leaf1.svg";
import smLeaf2 from "../../assets/svg/about-svg/about-sm-leaf2.svg";
import lgLeaf1 from "../../assets/svg/about-svg/about-lg-leaf1.svg";
import lgLeaf2 from "../../assets/svg/about-svg/about-lg-leaf2.svg"; 

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text-container">
          <h1 className="about-text-heading">About FOSSFiesta</h1>
          <hr className="about-hr"/>
          <div className="about-text-subtext">
            <p className="about-text-subtext1">
              IEEE-VIT brings to you FOSSFiesta also called the party of free
              and open source softwares, consisting of 2 sessions namely Coffee
              with Open Source and Git Set Go, where we would be
              inclined to help you solve all you doubts on open source,
              Hacktoberfest, GitHub, Git and have an amazing competition filled
              with fabulous swags at the end. So what are you waiting for?
            </p>
            <p className="about-text-subtext2">
              Sign Up now for this is an opportunity you would not want to miss!
            </p>
          </div>
        </div>
        <div className="about-leaves">
          <div className="about-leaves-item1 about-leaves-item">
            <img src={lgLeaf1} alt="" className="about-leaves-item1-lg"/>
            <img src={smLeaf1} alt="" className="about-leaves-item1-sm"/>
          </div>
          <div className="about-leaves-item2 about-leaves-item">
            <img src={lgLeaf2} alt="" className="about-leaves-item2-lg"/>
            <img src={smLeaf2} alt="" className="about-leaves-item2-sm"/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;

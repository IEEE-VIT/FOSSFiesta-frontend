import React from "react";
import "./about.styles.css";
import smLeaf1 from "../../assets/svg/about-svg/about-sm-leaf1.svg";
import smLeaf2 from "../../assets/svg/about-svg/about-sm-lear2.svg";
import lgLeaf1 from "../../assets/svg/about-svg/about-lg-leaf1.svg";
import lgLeaf2 from "../../assets/svg/about-svg/about-lg-leaf2.svg";
import HactoberfestLogo from "../../assets/svg/about-svg/about-hactoberfest.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-1-container">
        <div className="about-1-text-container">
          <div className="about-1-text-heading-container">
          <h1 className="about-1-text-heading">About FOSSFiesta</h1>
          <hr className="about-1-hr" />
          </div>
          
          <div className="about-1-text-subtext">
            <p className="about-1-text-subtext1">
              IEEE-VIT brings to you FOSSFiesta also called the party of free
              and open source softwares, consisting of 2 sessions namely Open
              Source Takeover and Git.Set.Go, where we would be inclined to help
              you solve all you doubts on open source, Hacktoberfest, GitHub,
              Git and have an amazing competition filled with fabulous swags at
              the end. So what are you waiting for?
            </p>
            <p className="about-1-text-subtext2">
              Sign Up now, for this is an opportunity you do not want to miss!
            </p>
          </div>
        </div>
        <div className="about-1-leaves">
          <div className="about-1-leaves-item1 about-leaves-item">
            <img src={lgLeaf1} alt="" className="about-1-leaves-item1-lg" />
            <img src={smLeaf1} alt="" className="about-1-leaves-item1-sm" />
          </div>
          <div className="about-1-leaves-item2 about-leaves-item">
            <img src={lgLeaf2} alt="" className="about-1-leaves-item2-lg" />
            <img src={smLeaf2} alt="" className="about-1-leaves-item2-sm" />
          </div>
        </div>
      </div>

      <div className="about-2-container">

        <div className="about-2-hacto-lg">
          <img src={HactoberfestLogo} alt="" className="about-2-hacto-img-lg" />
        </div>

        <div className="about-2-text-container">
          <div className="about-2-text-heading-container">
          <h1 className="about-2-text-heading">What is Hacktoberfest’21?</h1>
          <hr className="about-2-hr" />
          </div>
        
          <div className="about-2-text-subtext">
            <p className="about-2-text-subtext1">
              Hosted by DigitalOcean in partnership with Intel, AppWrite, and
              DeepSource, for the 8th year in a row, Hacktoberfest encourages
              participation in giving back to the open source community by
              completing pull requests, participating in events, and donating to
              open source projects.
            </p>
            <p className="about-2-text-subtext2">
              All backgrounds and skills levels are encouraged to complete the
              challenge.
            </p>
          </div>
        </div>
        <div className="about-2-hacto-sm">
          <img src={HactoberfestLogo} alt="" className="about-2-hacto-img-sm" />
        </div>
      </div>
    </div>
  );
};

export default About;

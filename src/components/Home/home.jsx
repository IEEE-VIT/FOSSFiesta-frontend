import React from "react";

import "./home.styles.css";
import ButtonLgWhite from "../Button/button-lg-white";

import Leftflower from "../../assets/svg/home-svg/home-leftflower.svg";
import Rightflower from "../../assets/svg/home-svg/home-rightflower.svg";
import BrandFont from "../../assets/svg/home-svg/home-brandfont.svg";
import Date from "../../assets/svg/home-svg/home-date.svg";
import IEEELogo from "../../assets/svg/home-svg/home-IEEELogo.svg";
import HactoberFestLogo from "../../assets/svg/home-svg/home-hactoberfestLogo.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left home-item1">
        <a href="#">
          <img src={Leftflower} alt="" />
        </a>
      </div>
      <div className="home-middle home-item2">
        <div className="home-middle-brandfont">
          <img src={BrandFont} alt="" />
        </div>
        <div className="home-middle-subtext">
          Code your way through Open Source
        </div>
        <hr />
        <div className="home-middle-date">
          <img src={Date} alt="" />
        </div>
        <div className="home-middle-btn">
          <a href="/register">
            <ButtonLgWhite>REGISTER</ButtonLgWhite>
          </a>
        </div>
        <div className="home-middle-logos">
          <a href="https://ieeevit.org/" target="_blank" rel="noreferrer" className="ieee-link">
            <img src={IEEELogo} alt="" className="home-middle-logo1" />
          </a>
          <a
            href="https://hacktoberfest.digitalocean.com/"
            target="_blank"
            rel="noreferrer"
          >
           
            <img src={HactoberFestLogo} alt="" className="home-middle-logo2" />
          </a>
        </div>
      </div>
      <div className="home-right home-item3">
        <img src={Rightflower} alt="" />
      </div>
    </div>
  );
};

export default Home;

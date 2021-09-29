import React from "react";

import "./home.styles.css";
import ButtonLgWhite from "../Button/button-lg-white";
import LinkImage from "../Linkimage/linkimage";

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
        <LinkImage link={"https://ieeevit.org/"} img={IEEELogo} link_class={"ieee-link"} img_class={"home-middle-logo1"}/>
        <LinkImage link={"https://hacktoberfest.digitalocean.com/"} img={HactoberFestLogo} link_class={"ieee-link"} img_class={"home-middle-logo2"}/>
        </div>
      </div>
      <div className="home-right home-item3">
        <img src={Rightflower} alt="" />
      </div>
    </div>
  );
};

export default Home;

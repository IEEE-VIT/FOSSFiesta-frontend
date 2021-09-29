import React from "react";


import Navbar from "../components/Navbar/navbar";
import Home from "../components/Home/home";
import DiscordBtn from "../components/Discord-btn/discord-btn";
import About from "../components/About/about";
import Sessions from "../components/Sessions/sessions";
import Timeline from "../components/Timeline/timeline";
import CodeSprint from "../components/CodeSprint/codesprint";
// import FAQ from "../components/FAQ/faq";
import Footer from "../components/Footer/footer";

const HomePage = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
        <DiscordBtn />
        <About />
        <Timeline />
        <Sessions />
        <CodeSprint />
        {/* <FAQ /> */}
        <Footer/>
      </div>
    </div>
  );
};
export default HomePage;

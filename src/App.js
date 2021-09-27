import React from "react";
// import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import DiscordBtn from "./components/Discord-btn/discord-btn";
import About from "./components/About/about";
// import Timeline from "./components/Timeline/timeline";
// import CodeSprint from "./components/CodeSprint/codesprint";
// import FAQ from "./components/FAQ/faq";

const App = () => {
  return (
    <div className="App">
      <div className="navbar"><Navbar /></div>
      <div className="content">
        <Home />
        <DiscordBtn/>
        <About />
        {/* <Timeline />
        <CodeSprint />
        <FAQ /> */}
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Timeline from "./components/Timeline/timeline";
import CodeSprint from "./components/CodeSprint/codesprint";
import FAQ from "./components/FAQ/faq";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <CodeSprint />
      <FAQ />
    </div>
  );
};

export default App;

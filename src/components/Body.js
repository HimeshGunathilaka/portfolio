import React from "react";
import "../css/Body.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

function Body() {
  return (
    <>
      <div className="body-container container-fluid d-flex flex-column">
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default Body;

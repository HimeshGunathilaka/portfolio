import React from "react";
import "../css/Body.css";
import Header from "./Header";
import Home from "./Home";

function Body() {
  return (
    <>
      <div className="body-container container-fluid d-flex flex-column justify-content-start">
        <Home />
      </div>
    </>
  );
}

export default Body;

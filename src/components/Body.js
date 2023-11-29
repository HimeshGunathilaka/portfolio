import React from "react";
import "../css/Body.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Home from "./Home";

function Body() {
  return (
    <>
      <div className="body-container container-fluid d-flex flex-column justify-content-start">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default Body;

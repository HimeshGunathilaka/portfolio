import React from "react";
import "../css/Home.css";
import Man from "../images/man.png";

function Home() {
  return (
    <>
      <div className="container-fluid mx-0 home-container row d-flex container-fluid">
        <div className="home-left home-wrapper py-5">
          <p className="h5 mt-5">Welcome to my portfolio !</p>
          <h1 className="fs-1 text-light my-2">
            👋 Hey, I'm Himesh
            <br />
            Full-Stack Developer.
          </h1>
          <p className="text-light my-3">
            Meet a tech virtuoso hailing from the vibrant landscapes of Sri
            Lanka! <br />
            As a wizard of code, this Full Stack maestro crafts seamless web and
            mobile experiences, weaving digital wonders with a touch of Sri
            Lankan charm.
          </p>
          <div className="d-flex column column-gap-3 m-0">
            <a href="https://drive.google.com/uc?export=download&id=1wssENEL90tCFIpdIUAbdfqE7I2UmpuEN">
              <button className="btn button-87 my-4" type="button">
                Download cv
              </button>
            </a>
            <a href="#projects">
              <button className="btn button-88 my-4" type="button">
                See projects
              </button>
            </a>
          </div>
        </div>
        <div className="home-right  home-wrapper  py-5 px-5">
          {/* <img src={Man} className="img-fluid position-relative" /> */}
        </div>
      </div>
    </>
  );
}

export default Home;

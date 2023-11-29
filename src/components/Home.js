import React from "react";
import "../css/Home.css";
import Man from "../images/himesh_2.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      '" Full-Stack Developer "',
      '" Mobile Developer "',
      '" Freelancer "',
      '" Web Developer "',
      '" Back-end Developer "',
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="container-fluid mx-0 home-container row d-flex container-fluid">
        <div className="home-left home-wrapper py-5">
          <p className="h5 mt-5">Welcome to my portfolio !</p>
          <h1 className="fs-1 text-light my-3">
            👋 Hey, I'm <span style={{ color: "#03C988" }}>Himesh</span>.
            <br />
            <span style={{ color: "white" }}>{text}</span>
            <span style={{ color: "white" }}>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="text-light my-3">
            Crafting digital symphonies from Sri Lanka, I am a visionary
            full-stack maestro, sculpting seamless web and mobile experiences.
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
        <div className="home-right  home-wrapper  py-5 px-5 d-flex flex-row">
          <img
            src={Man}
            className="img-fluid position-relative img-container shadow-lg mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

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
      <div className="home-container row d-flex container mx-5 px-3 align-items-center">
        <div className="col d-flex container home-left home-wrapper">
          <div className="d-flex flex-column">
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
            <div className="d-flex flex-row m-0 p-0">
              <a
                className="mt-1"
                href="https://drive.google.com/uc?export=download&id=1wssENEL90tCFIpdIUAbdfqE7I2UmpuEN"
              >
                <button className="btn button-87" type="button">
                  Download cv
                </button>
              </a>
              <a className="mt-1 ms-3 " href="#projects">
                <button className="btn button-88" type="button">
                  See projects
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col d-flex home-right home-wrapper mx-auto">
          <div className="rounded d-flex flex-row mx-auto">
            <div className="img-border d-flex mx-auto p-2">
              <img
                src={Man}
                className="img-fluid img-container shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

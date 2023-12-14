import React from "react";
import "../css/About.css";

function About() {
  return (
    <>
      <div
        id="about"
        className="about-container row d-flex container px-3 align-items-start"
      >
        <h5 className="h5 text-light text-center mb-5 "># ABOUT ME</h5>
        <div className="container d-flex row my-3">
          <div className="container d-flex col about-left justify-content-center align-items-center mt-5 me-5">
            <div className="about-left-backdrop">
              <div className="about-left-image"></div>
            </div>
          </div>
          <div className="container col d-flex row about-right mt-5 ms-3 me-2">
            <h3 className="h3 mb-5">PERSONAL DETAILS</h3>
            <p className="text-light text-start">
              I am Kavinda Himesh, a dedicated software developer hailing from
              Sri Lanka. Currently pursuing a BSc (Hons) in Computing at the
              National Institute of Business Management, I bring over one year
              of invaluable experience in web and mobile application
              development.
              <br />
              <br />
              My commitment to precision and innovation sets me apart in the
              ever-evolving landscape of technology. With a meticulous approach
              to coding, I craft solutions that seamlessly blend functionality
              and sophistication. My professional journey reflects a continuous
              dedication to staying at the forefront of technological
              advancements.
              <br />
              <br />
              As an undergraduate with a nuanced understanding of computing, I
              am poised to contribute significantly to the realm of software
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

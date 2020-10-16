import React, { useState, useRef } from "react";
import "./App.scss";
import useIntersect from "./useIntersect";
import Obfuscate from "react-obfuscate";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";

const arrows = (
  <div className="arrows">
    <BsChevronCompactDown className="arrow" /> <BsChevronCompactDown className="arrow" />{" "}
    <BsChevronCompactDown className="arrow" />
  </div>
);

function App() {

  const ref = useRef();
  const isIntersecting = useIntersect(ref, "-50%")



  return (
    <div className="App">
      {/* --------------------------------------------------  PAGE 1  */}
      <div id="page-1" className="page">
        <div id="page-1-cover" className="slide-right">
        </div>
        <div className="main-text" id="page-1-main-text">
          <p id="page-1-block-1">Hello.</p>
          <p id="page-1-block-2">My name is Mackenzie.</p>
          <p id="page-1-block-3">I'm a web developer.</p>
        </div>
        <p className="bottom-text" id="page-1-block-4">
          Scroll down to learn more
        </p>
        {arrows}
        
        
      </div>
      {/* ------------------------------------------------  PAGE 2  */}
      {/* <div id="page-2" className="page" ref={ref} >
        {isIntersecting ? ( <div id="page-2-text-wrap" className="slide-animation">
          <p className="main-text" id="page-2-block-1">
            I specialize in front-end web development.
          </p>
          <p className="main-text" id="page-2-block-2">
            (I make websites.)
          </p>
          <p className="main-text" id="page-2-block-3">
            Like this one!
          </p>
        </div> ) : null } */}

        <div id="page-2" className="page"  >
        <div id="page-2-text-wrap" ref={ref} className={isIntersecting ?"slide-animation" : null}>
          <p className="main-text" id="page-2-block-1">
            I specialize in front-end web development.
          </p>
          <p className="main-text" id="page-2-block-2">
            (I make websites.)
          </p>
          <p className="main-text" id="page-2-block-3">
            Like this one!
          </p>
        </div>
        
        <p className="bottom-text" id="page-2-block-4">
            check out some of my recent projects
          </p>
        {arrows}
      </div>
      {/* ------------------------------------------------  PAGE 3  */}
      <div id="page-3" className="page">
        <h2 id="page-3-title">Projects</h2>
        <div id="project-wrap">
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              <img alt=""></img>
            </a>
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              This is a description about the project.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              <img alt=""></img>
            </a>
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              This is a description about the project.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              <img alt=""></img>
            </a>
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              This is a description about the project.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              <img alt=""></img>
            </a>
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              This is a description about the project.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <a
              className="project-img-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              <img alt=""></img>
            </a>
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              This is a description about the project.
            </p>
            <a
              className="project-link"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              Visit
            </a>
            <a
              className="project-github"
              href="http://www.sunkenworld.com/"
              alt=""
            >
              GitHub
            </a>
          </div>
        </div>
        {arrows}
      </div>
      {/* ------------------------------------------------  PAGE 4  */}
      <div id="page-4" className="page">
        <p className="main-text" id="page-4-block-1">
          You can see all the code for each project, along with detailed
          descriptions, on my{" "}
          <a href="http://www.sunkenworld.com/" alt="">
            GitHub
          </a>
          .
        </p>
        <p className="main-text" id="page-4-block-2">
          Need a web developer? I'd love to help!
        </p>
        <p className="main-text" id="page-4-block-3">
          Get in touch:
        </p>
        <div id="contact-wrap">
          <Obfuscate email="mackenzie.charlton@gmail.com" aria-label="Email">
            <div className="contact-circle" id="contact-email">
              <MdEmail className="contact-icon" />
            </div>
          </Obfuscate>
          <a
            href="https://www.linkedin.com/in/mackenzie-charlton-702517169/"
            alt=""
          >
            <div className="contact-circle" id="contact-linkedin">
              <FaLinkedin className="contact-icon" />
            </div>
          </a>
        </div>
        <footer>
          <p>
            This site was made by{" "}
            <a className="footer-link" href="http://www.sunkenworld.com/">
              Mackenzie Charlton
            </a>{" "}
            in 2020 with{" "}
            <a className="footer-link" href="https://reactjs.org">
              React
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

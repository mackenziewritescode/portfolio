import React, { useRef } from "react";
import "./App.scss";
// import useIntersect from "./useIntersect";
import Obfuscate from "react-obfuscate";
import { gsap } from "gsap";
import { useIntersection } from "react-use"
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

  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  })
  const divRef = useRef(null);
  const divIntersection = useIntersection(divRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })
  const bottomRef = useRef(null);
  const bottomIntersection = useIntersection(bottomRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  })

  const slideIn = (e) => {
    gsap.to(e, {
      duration: 2,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 1
    })
  }
  const slideOut = (e) => {
    gsap.to(e, {
      duration: 1,
      x: "-100vw",
      opacity: 0,
      ease: "power4.out",
    })
  }

  const fadeIn = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 1,
      ease: "power4.out"
    })
  }
  const fadeOut = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    })
  }

  const fadeDown = (e) => {
    gsap.to(e, {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 3.5,
      ease: "power4.out",
      stagger: 0.5
    })
  }
  const fadeUp = (e) => {
    gsap.to(e, {
      duration: 1,
      y: 0,
      opacity: 0,
      ease: "power4.out",
    })
  }
  
  // has the intersection threshold been met yet? if so, animate.
  intersection && intersection.intersectionRatio > 0.7
  ? slideIn(".slide")
  : slideOut(".slide")

  if (intersection && intersection.intersectionRatio > 0.7) {
    slideIn(".slide");
    fadeDown(".fade-down");
  } else {
    slideOut(".slide");
    fadeUp(".fade-down");
  }

  divIntersection && divIntersection.intersectionRatio > 0.3
  ? fadeIn(".fade")
  : fadeOut(".fade")

  bottomIntersection && bottomIntersection.intersectionRatio > 0.1
  ? fadeDown(".fade-down")
  : fadeUp(".fade-down")

  return (
    <div className="App">
      {/* --------------------------------------------------  PAGE 1  */}
      <div id="page-1" className="page">
        <div id="page-1-cover">
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

      <div id="page-2" className="page" ref={divRef} >
          <div id="page-2-text-wrap" ref={ref} className="fade" >
            <p className="main-text slide" id="page-2-block-1">
              I specialize in front-end web development.
            </p>
            <p className="main-text slide" id="page-2-block-2" >
              (I make websites.)
            </p>
            <p className="main-text slide" id="page-2-block-3">
              Like this one!
            </p>
          </div>
        
        
          <p className="bottom-text fade-down" id="page-2-block-4" ref={bottomRef}>
              check out some of my recent projects
          </p>
          <div className="arrows fade-down">
            <BsChevronCompactDown className="arrow" /> 
            <BsChevronCompactDown className="arrow" /> 
            <BsChevronCompactDown className="arrow" />
          </div>
        
        
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

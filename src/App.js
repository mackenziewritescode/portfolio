import React, { useRef, useState } from "react";
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
  const [page2Animation, setPage2Animation] = useState(0)

  const page2Ref = useRef(null);
  const page2Intersection = useIntersection(page2Ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
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
      ease: "power2.out",
    })
  }

  const fadeIn = (e) => {
    gsap.to(e, {
      duration: 1,
      opacity: 1,
      x: 0,
      y: 0,
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
      y: "-20",
      opacity: 0,
      ease: "power4.out",
    })
    console.log("fading away~")
  }

    if (page2Animation === 0) {
      if (page2Intersection && page2Intersection.intersectionRatio > 0.7) {
        fadeIn("#page-2-text-wrap")
        slideIn(".page-2-text");
        fadeDown(".page-2-bottom");
        setPage2Animation(1)
      }
    }

    if (page2Animation === 1) {
      if (page2Intersection && page2Intersection.intersectionRatio < 0.7) {
        fadeOut("#page-2-text-wrap")
        slideOut(".page-2-text");
        fadeUp(".page-2-bottom");
        setPage2Animation(2)
      }
    }

    if(page2Animation >= 2) {
      if (page2Intersection && page2Intersection.intersectionRatio > 0.7) {
      fadeIn("#page-2-text-wrap")
      fadeIn(".page-2-text");
      fadeIn(".page-2-bottom");
      } 
      else {
      fadeOut("#page-2-text-wrap")
      slideOut(".page-2-text");
      fadeUp(".page-2-bottom");
      } 
    }

  

  // bottomIntersection && bottomIntersection.intersectionRatio > 0.1
  // ? fadeDown(".page-2-bottom")
  // : fadeUp(".page-2-bottom")

  return (
    <div className="App">
      {/* --------------------------------------------------  PAGE 1  */}
      <div id="page-1" className="page">
        {/* <div id="page-1-cover">
        </div>
        <div className="main-text" id="page-1-main-text">
          <p id="page-1-block-1">Hello.</p>
          <p id="page-1-block-2">My name is Mackenzie.</p>
          <p id="page-1-block-3">I'm a web developer.</p>
        </div>
        <p className="bottom-text" id="page-1-block-4">
          Scroll down to learn more
        </p>
        {arrows} */}
        
        
      </div>
      {/* ------------------------------------------------  PAGE 2  */}

      <div id="page-2" className="page" ref={page2Ref} >

          <div id="page-2-text-wrap" >
            <p className="main-text page-2-text" id="page-2-block-1">
              I specialize in front-end web development.
            </p>
            <p className="main-text page-2-text" id="page-2-block-2" >
              (I make websites.)
            </p>
            <p className="main-text page-2-text" id="page-2-block-3">
              Like this one!
            </p>
          </div>
        
          <p className="bottom-text page-2-bottom" >
              check out some of my recent projects
          </p>
          <div className="arrows page-2-bottom">
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

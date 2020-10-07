import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div id="page-1" className="page">
        <p className="main-text" id="page-1-block-1">
          Hello.
        </p>
        <p className="main-text" id="page-1-block-2">
          My name is Mackenzie Charlton.
        </p>
        <p className="main-text" id="page-1-block-3">
          I'm a web developer.
        </p>
        <p className="bottom-text" id="page-1-block-4">
          Scroll down to learn more
        </p>
      </div>
      <div id="page-2" className="page">
        <p className="main-text" id="page-2-block-1">
          I specialize in front-end web development.
        </p>
        <p className="main-text" id="page-2-block-2">
          (I make websites.)
        </p>
        <p className="main-text" id="page-2-block-3">
          Like this one!
        </p>
        <p className="bottom-text" id="page-2-block-4">
          check out some of my recent projects
        </p>
      </div>
      <div id="page-1" className="page">
        <div className="project">
          <a className="project-img-link" href="" alt="">
            <img></img>
          </a>
          <h3 className="project-title">Project Title</h3>
          <p className="-project-description">
            This is a description about the project.
          </p>
          <a className="project-link" href="" alt="">
            Visit
          </a>
          <a className="project-github" href="" alt="">
            Github
          </a>
        </div>
        <div className="project">
          <a className="project-img-link" href="" alt="">
            <img></img>
          </a>
          <h3 className="project-title">Project Title</h3>
          <p className="-project-description">
            This is a description about the project.
          </p>
          <a className="project-link" href="" alt="">
            Visit
          </a>
          <a className="project-github" href="" alt="">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

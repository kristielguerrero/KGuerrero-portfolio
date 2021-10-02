import React from "react";

function Projects() {
  return (
    <>
      <h2 id="projects" className="aboutMe">
        Projects
      </h2>

      <div class="container">
        <div class="row">
          <div class="col">
            Explore Mars
            <div>
              <a href="https://kristielguerrero.github.io/ExploreMars/">
                <img
                  src="./assets/ExploreMars.png"
                  id="explore-mars"
                  alt="explore-mars"
                />
              </a>
            </div>
          </div>

          <div class="col">
            Work Day Planner
            <div>
              <a href="https://kristielguerrero.github.io/planner-project/">
                <img
                  src="./assets/Work-planner.png"
                  id="planner"
                  alt="planner"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col">
            Horiseon Code Refactor
            <a href="https://kristielguerrero.github.io/Horiseon-project/">
              <img src="./assets/Horiseon.PNG" id="horiseon" alt="horiseon" />{" "}
            </a>
          </div>

          <div class="col">
            Community Sidekicks - Humanitarian Project
            <a href="https://community-sidekicks.herokuapp.com/">
              <img
                src="assets/community-sidekicks.PNG"
                id="community-sidekicks"
                alt="community-sidekicks"
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col">
            README Generator
            <a href="https://github.com/kristielguerrero/readme-generator">
              <img
                src="assets/read-me-generator.PNG"
                id="read-me"
                alt="readme"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

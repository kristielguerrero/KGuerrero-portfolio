import React from "react";

function Header() {
  return (
    <header>
      <a href="header" id="top">
        <h1>Kristiel Guerrero</h1>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">ABOUT ME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

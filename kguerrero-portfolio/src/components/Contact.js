import React from "react";

function Contact() {
  return (
    <>
      <section>
        <h2 id="contact" style="font-size: 50px;">
          Contact
        </h2>

        <div class="container">
          <div class="row">
            <div class="col">
              Email
              <a href="mailto:kristyguerrero20@gmail.com">
                <img
                  src="assets/email icon.png"
                  id="contact-icon"
                  alt="email"
                />
              </a>
            </div>
            <div class="col">
              Github
              <a href="https://github.com/kristielguerrero">
                <img src="assets/github.png" id="contact-icon" alt="github" />
              </a>
            </div>
            <div class="col">
              LinkedIn
              <a href="https://www.linkedin.com/in/kristiel-guerrero-093170207/">
                <img
                  src="assets/Linkedin_icon.svg"
                  id="contact-icon"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

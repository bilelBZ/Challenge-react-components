import React from "react";
import img1 from "../images/John-Doe.jpg";
function About() {
  return (
    <div>
      <section id="about-me">
        <h1>
          Hello, my name is
          <span class="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img class="avatar" src={img1} alt="jhon-doe" />
      </section>
    </div>
  );
}

export default About;

import React from "react";
import "../about/about.css";
import ME from "../../assets/me-about.jpg";
import { BiAward } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="about me" className="about_me-image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>

            <article className="about_card">
              <AiOutlineProject className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            odio ad fugiat vel suscipit fuga accusamus, impedit aperiam quod
            sequi officia totam deleniti. Qui a deserunt ab corrupti, quas
            expedita.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

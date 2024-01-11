import React from "react";
import Skills from "../Skills";
import "./About.css";
import { FaBusinessTime, FaGraduationCap } from "react-icons/fa";
import TimeLine from "../timeline/TimeLine";

export default function About({ active, data }) {
  return (
    <article className={active ? "about active" : "about"} data-page="about">
      <header>
        <h1 className="article-title">
          <span></span>About me
        </h1>
      </header>

      <section className="about-text">
        <p>{data.about_me}</p>
        <button
          className="cv-button"
          onClick={() => window.open(data.cv, "_blank")}
        >
          see my resume
        </button>
      </section>

      <header>
        <h1 className="article-title">
          <span></span>Resume
        </h1>
      </header>

      <TimeLine
        title="education"
        data={data}
        category="education"
        icon={<FaGraduationCap />}
      />
      <TimeLine
        data={data}
        category="experience"
        title="Experience"
        icon={<FaBusinessTime />}
      />
      <header>
        <h1 className="article-title">
          <span></span>My skills
        </h1>
      </header>
      <section className="skill ">
        <Skills />
        <div className="separator"></div>
      </section>
    </article>
  );
}

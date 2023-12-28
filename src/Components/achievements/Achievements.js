import React from "react";
import TimeLine from "../timeline/TimeLine";
import { FaCertificate, FaAward } from "react-icons/fa";
import projectData from "../../data/portfolioData.json";

const data = projectData.achievements;

export default function Achievements() {
  return (
    <>
      <article className="resume active" data-page="resume">
        <header>
          <h1 className="article-title">
            <span></span>My achievements
          </h1>
        </header>
        <TimeLine
          data={data}
          category="certificates"
          title="Certificates"
          icon={<FaCertificate />}
        />
        <TimeLine
          data={data}
          category="badges"
          title="Badges"
          icon={<FaAward />}
        />
      </article>
    </>
  );
}

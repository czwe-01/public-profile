import React from "react";
import TimeLine from "../TimeLine";
import { FaCertificate, FaAward } from "react-icons/fa";
import projectData from "../../data/portfolioData.json";

const data = projectData.achievements;

export default function Achievements() {
  return (
    <>
      <article className="resume active" data-page="resume">
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

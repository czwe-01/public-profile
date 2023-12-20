import React from "react";
import Project from "../project/Project";

import "./Projects.css";
function Projects({ data }) {
  return (
    <div className="project-list">
      {data.map((item, index) => {
        return <Project item={item} key={index} />;
      })}
    </div>
  );
}

export default Projects;

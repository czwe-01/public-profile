import React, { useState } from "react";
import Project from "../project/Project";

import "./Projects.css";
import { useSelector } from "react-redux";

function Projects() {
  const data = useSelector((state) => state.appSlice.data.projects);

  return (
    <div className="project-list">
      {data.map((item, index) => {
        return <Project item={item} key={index} />;
      })}
    </div>
  );
}

export default Projects;

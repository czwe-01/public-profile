import React, { useEffect, useState } from "react";
import Project from "../project/Project";

import "./Projects.css";
import { useSelector } from "react-redux";

function Projects({ filter }) {
  const projects = useSelector((state) => state.appSlice.data.projects);
  const [data, setData] = useState(projects);

  useEffect(() => {
    if (filter === "all") {
      setData(projects);
    } else
      setData(projects.filter((project) => project.stack.includes(filter)));
  }, [filter, projects]);

  return (
    <div className="project-list">
      {data.map((project, index) => {
        return <Project project={project} key={index} />;
      })}
    </div>
  );
}

export default Projects;

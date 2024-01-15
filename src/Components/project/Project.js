import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";
import "./Project.css";
import ProjectModal from "../project-modal/ProjectModal";
import IconButton from "../icon-button/IconButton";

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="project-item  active">
      <ProjectModal project={project} open={open} setOpen={setOpen} />

      <figure className="project-img">
        <div className="project-item-icon-box">
          <IconButton handleClick={handleOpen} icon={<FaExpand />} />
        </div>

        {project.image ? (
          <img
            className="img"
            src={require(`../../images/projects/${project.image}`)}
            alt={project.name}
            loading="lazy"
          />
        ) : (
          <div className="description">{project.description}</div>
        )}
      </figure>

      <h2 className="project-title">{project.name}</h2>
    </div>
  );
}

export default Project;

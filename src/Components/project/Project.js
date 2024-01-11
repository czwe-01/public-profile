import { Button, Chip } from "@mui/material";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import IconBox from "../IconBox/IconBox";
import "./Project.css";
import ProjectModal from "../project-modal/ProjectModal";

function Project({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="project-item  active">
      <ProjectModal project={item} open={open} setOpen={setOpen} />

      <figure className="project-img">
        <div className="project-item-icon-box">
          <a href={item.url} target="_blank" rel="noreferrer">
            <IconBox icon={<FaLink />} />
          </a>
        </div>

        {item.image ? (
          <img
            src={require(`../../images/projects/${item.image}`)}
            alt={item.name}
            loading="lazy"
          />
        ) : (
          <div className="description">{item.description}</div>
        )}
      </figure>

      <h2 className="project-title">{item.name}</h2>
      <button className="cv-button" onClick={() => handleOpen()}>
        see more
      </button>
    </div>
  );
}

export default Project;

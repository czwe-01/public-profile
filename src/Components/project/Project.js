import { Chip } from "@mui/material";
import React from "react";
import { FaLink } from "react-icons/fa";
import IconBox from "../IconBox/IconBox";
import "./Project.css";

function Project({ item }) {
  return (
    <div className="project-item  active">
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
        <div className="stacks">
          {item.stack.map(function (stack) {
            return <Chip label={stack} key={stack} />;
          })}
        </div>
      </figure>

      <h2 className="project-title">{item.name}</h2>
    </div>
  );
}

export default Project;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Modal.css";
import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import { useEffect } from "react";
import IconBox from "../IconBox/IconBox";
import { FaTimes } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  borderRadius: "1em",
  boxShadow: 24,
  maxHeight: "500px",
  overflow: "scroll",
  overflowX: "hidden",
  p: 4,
};

export default function ProjectModal({ setOpen, open, project }) {
  const handleClose = () => {
    setOpen(false);
    console.log(project);
  };

  return (
    <div className="project-modal-container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="button-container">
            <button
              style={{
                border: "none",
                background: "transparent",
              }}
              onClick={handleClose}
            >
              <IconBox icon={<FaTimes />} />
            </button>
          </div>

          <h2>{project.name}</h2>
          <div className="content-container">
            <div className="img-container">
              <img
                src={require(`../../images/projects/${project.image}`)}
                alt={project.name}
                loading="lazy"
                className="modal-img"
              />
            </div>

            <div className="content">
              <h3>Description</h3>
              {project.description}
            </div>
            <div className="content">
              <h3>Description</h3>
              {project.description}
            </div>
            <div className="content">
              <h3>Description</h3>
              {project.description}
            </div>
            <div className="content">
              <h3>Languages and Technologies used</h3>
              <div className="stack">
                {project.stack.map(function (stack, i) {
                  return <Chip label={stack} key={stack + i} />;
                })}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

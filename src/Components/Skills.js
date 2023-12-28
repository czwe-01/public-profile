import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGalacticRepublic,
  FaDocker,
} from "react-icons/fa";

import Skill from "./skill/Skill";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "javascript", icon: <FaJsSquare /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Node", icon: <FaNodeJs /> },
  { name: "SQL", icon: "SQL" },
  { name: "React", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "jasmine", icon: <FaGalacticRepublic /> },
];

export default function Skills() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((_, index) => (
          <Skill skill={_} index={index} />
        ))}
      </Grid>
    </Box>
  );
}

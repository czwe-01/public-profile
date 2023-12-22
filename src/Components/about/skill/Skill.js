import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Skill.css";
import IconBox from "../../IconBox/IconBox";

function Skill({ skill, index }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: "flex",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item className="skill">
        <IconBox icon={skill.icon} />
        <div>
          <p className="skill-title">{skill.name}</p>
        </div>
      </Item>
    </Grid>
  );
}

export default Skill;

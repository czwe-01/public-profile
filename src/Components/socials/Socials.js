import React from "react";
import "./Socials.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp,
  FaHackerrank,
  FaQuestion,
} from "react-icons/fa";
import portfolioData from "../../data/portfolioData.json";
import IconBox from "../IconBox/IconBox";

function Socials() {
  const { socials } = portfolioData;

  return (
    <div className="socials">
      {socials.map((social, index) => {
        const name = Object.keys(social)[0];
        const link = Object.values(social)[0];
        const icon = {
          linkedin: <FaLinkedinIn />,
          github: <FaGithub />,
          freeCodeCamp: <FaFreeCodeCamp />,
          hackerrank: <FaHackerrank />,
        }[name] || <FaQuestion />;

        return (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            <IconBox icon={icon} />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;

import React from "react";
import "./Socials.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp,
  FaHackerrank,
} from "react-icons/fa";
import portfolioData from "../../data/portfolioData.json";

const iconStyles = { color: "black", fontSize: "2em", margin: ".62em" };

function Socials() {
  const { socials } = portfolioData;

  console.log(socials);
  return (
    <div className="socials">
      {Object.keys(socials).map((social, index) => {
        const link = Object.values(socials)[index];
        const component = social === ""
        return (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            
          </a>
        );
      })}
    </div>
  );
}

export default Socials;

import React, { useEffect, useState } from "react";
import "../../styles/Portfolio.css";
import portfolioData from "../../data/portfolioData.json";
import Projects from "./projects/Projects";

const projectData = portfolioData.projects;

export default function Portfolio() {
  const projects = projectData.slice().reverse();
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(projects);

  const handleChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (filter === "all") {
      setData(projects);
    } else setData(projects.filter((item) => item.stack.includes(filter)));
  }, [filter, projects]);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <div>
          {/* <FilterList handleChange={handleChange} /> */}
          {/* <FilterSelect handleChange={handleChange} /> */}
        </div>
        <Projects data={data} />
      </section>
    </article>
  );
}

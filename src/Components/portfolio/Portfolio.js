import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import portfolioData from "../../data/portfolioData.json";
import Projects from "../projects/Projects";
import FilterList from "../filter-item/FilterList";
import FilterSelect from "../filter-select/FilterSelect";

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
        <h1 className="article-title">
          <span></span>Portfolio
        </h1>
      </header>

      <section className="projects">
        <div>
          <FilterList handleChange={handleChange} filter={filter} />
          <FilterSelect handleChange={handleChange} filter={filter} />
        </div>
        <Projects data={data} />
      </section>
    </article>
  );
}

import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import Projects from "../projects/Projects";
import FilterList from "../filter-item/FilterList";
import FilterSelect from "../filter-select/FilterSelect";
import { useSelector } from "react-redux";

function Portfolio({ active }) {
  const filters = useSelector((state) => state.appSlice.data.techStacks);
  const [filter, setFilter] = useState("all");

  return (
    <article
      className={active ? "portfolio active" : "portfolio"}
      data-page="portfolio"
    >
      <header>
        <h1 className="article-title">
          <span></span>Portfolio
        </h1>
      </header>

      <section className="projects">
        <div>
          <FilterList
            handleChange={setFilter}
            filter={filter}
            filters={filters}
          />
          <FilterSelect
            handleChange={setFilter}
            filter={filter}
            filters={filters}
          />
        </div>
        <Projects filter={filter} />
      </section>
    </article>
  );
}

export default Portfolio;

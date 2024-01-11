import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import Projects from "../projects/Projects";
import FilterList from "../filter-item/FilterList";
import FilterSelect from "../filter-select/FilterSelect";
import { resetProject, setProject } from "../../redux/appSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, useSelector } from "react-redux";

function Portfolio({ active, projectData, resetProject, setProject, store }) {
  const filters = useSelector((state) => state.appSlice.data.techStacks);

  const projects = useSelector((state) => state.appSlice.data.projects)
    .slice()
    .reverse();
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(projects);

  const handleChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (filter === "all") {
      setData(projects);
    } else setData(projects.filter((item) => item.stack.includes(filter)));
  }, [filter]);

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
            handleChange={handleChange}
            filter={filter}
            filters={filters}
          />
          <FilterSelect
            handleChange={handleChange}
            filter={filter}
            filters={filters}
          />
        </div>
        <Projects
          data={data}
          resetProject={resetProject}
          setProject={setProject}
        />
      </section>
    </article>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setProject: setProject,
      resetProject: resetProject,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    store: state,
    projectData: state.projects,
    filters: state.techStacks,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

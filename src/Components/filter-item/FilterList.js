import React from "react";
import portfolioData from "../../data/portfolioData.json";
import "./FilterItem.css";
const filters = portfolioData.techStacks;

function FilterList(props) {
  return (
    <ul className="filter-list">
      {filters.map((item, index) => {
        const active = props.filter === item;

        return (
          <li
            className={active ? "filter-item active" : "filter-item"}
            key={index}
          >
            <button value={item} onClick={props.handleChange}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterList;

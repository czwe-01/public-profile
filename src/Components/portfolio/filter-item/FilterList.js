import React from "react";
import portfolioData from "../../../data/portfolioData.json";

const filters = portfolioData.techStacks;

function FilterList(props) {
  return (
    <ul className="filter-list">
      {filters.map((item, index) => {
        return (
          <li className="filter-item" key={index}>
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

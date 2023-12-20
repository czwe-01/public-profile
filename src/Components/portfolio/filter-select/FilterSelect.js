import React from "react";
import portfolioData from "../../../data/portfolioData.json";

const filters = portfolioData.techStacks;

function FilterSelect(props) {
  return (
    <div className="filter-select-box">
      <select className="filter-select" onChange={props.handleChange}>
        {filters.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterSelect;

import React from "react";

import "./FilterSelect.css";

function FilterSelect(props) {
  return (
    <div className="filter-select-box">
      <select className="filter-select" onChange={props.handleChange}>
        {props.filters.map((item) => {
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

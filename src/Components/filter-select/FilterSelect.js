import React from "react";

import "./FilterSelect.css";

function FilterSelect(props) {
  return (
    <div className="filter-select-box">
      <select className="filter-select" onChange={(e)=> props.handleChange(e.target.value)}>
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

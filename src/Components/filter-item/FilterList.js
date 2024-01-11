import React from "react";

import "./FilterItem.css";

function FilterList({ filter, filters, handleChange }) {
  return (
    <ul className="filter-list">
      {filters.map((item, index) => {
        const active = filter === item;

        return (
          <li
            className={active ? "filter-item active" : "filter-item"}
            key={index}
          >
            <button value={item} onClick={(e) => handleChange(e.target.value)}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterList;

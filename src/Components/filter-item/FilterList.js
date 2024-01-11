import React from "react";

import "./FilterItem.css";

function FilterList(props) {
  return (
    <ul className="filter-list">
      {props.filters.map((item, index) => {
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

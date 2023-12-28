import React from "react";
import TimelineListItem from "../timeline-list-item/TimelineListItem";

import "./TimelineList.css";

function TimeLineList(props) {
  const data = props.data;
  return (
    <ol className="timeline-list">
      {data[props.category].reverse().map((item, index) => {
        return (
          <TimelineListItem
            url={item.url}
            name={item.name}
            year={item.year}
            comment={item.comment}
            index={index}
          />
        );
      })}
    </ol>
  );
}

export default TimeLineList;

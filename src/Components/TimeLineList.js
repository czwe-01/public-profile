import React from "react";
import ResumeListItems from "./about/ResumeListItems";
function TimeLineList(props) {
  const data = props.data;
  return (
    <ol className="timeline-list">
      {data[props.category].reverse().map((item, index) => {
        return (
          <div key={index}>
            <ResumeListItems
              url={item.url}
              name={item.name}
              year={item.year}
              comment={item.comment}
              index={index}
            />
            <div className="separator"></div>
          </div>
        );
      })}
    </ol>
  );
}

export default TimeLineList;

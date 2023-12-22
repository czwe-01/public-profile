import React from "react";
import TimeLineList from "./TimeLineList";
import "../styles/TimeLine.css";
import IconBox from "./IconBox/IconBox";
function TimeLine(props) {
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <IconBox icon={props.icon} />
          <h4 className="h4">{props.title}</h4>
        </div>
        <TimeLineList data={props.data} category={props.category} />
      </section>
    </div>
  );
}

export default TimeLine;

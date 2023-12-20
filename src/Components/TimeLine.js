import React from "react";
import TimeLineList from "./TimeLineList";
import "../styles/TimeLine.css";
function TimeLine(props) {
  console.log(props);
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">{props.icon}</div>

          <h4 className="h4">{props.title}</h4>
        </div>

        <TimeLineList data={props.data} category={props.category} />
      </section>
    </div>
  );
}

export default TimeLine;

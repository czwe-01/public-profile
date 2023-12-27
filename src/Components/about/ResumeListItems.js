import Separator from "../separator/Separator"
import React from "react";

function ResumeListItems(props) {
  if (props.url !== undefined) {
    return (
      <li className="timeline-item" key={props.index}>
        <a href={props.url} target="_blank" rel="noreferrer">
          <h4 className="h4 timeline-item-title">{props.name}</h4>
          <span>{props.year}</span>
          <p className="timeline-text">{props.comment}</p>{" "}
        </a>
        <Separator />
      </li>
    );
  } else
    return (
      <li className="timeline-item" key={props.index}>
        <h4 className="h4 timeline-item-title">{props.name}</h4>
        <span>{props.year}</span>
        <p className="timeline-text">{props.comment}</p>
        <Separator />
      </li>
    );
}

export default ResumeListItems;

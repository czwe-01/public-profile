import React from "react";

function ResumeListItems(props) {
  if (props.url !== undefined) {
    return (
      <a href={props.url} target="_blank" rel="noreferrer">
        <li className="timeline-item" key={props.index}>
          <h4 className="h4 timeline-item-title">{props.name}</h4>
          <span>{props.year}</span>
          <p className="timeline-text">{props.comment}</p>
        </li>
      </a>
    );
  } else
    return (
      <li className="timeline-item" key={props.index}>
        <h4 className="h4 timeline-item-title">{props.name}</h4>
        <span>{props.year}</span>
        <p className="timeline-text">{props.comment}</p>
      </li>
    );
}

export default ResumeListItems;

import React from "react";
import "./SidebarHeader.css";
import ToggleButton from "../toggle-button/ToggleButton";

function SidebarHeader({ toggle, personalInfo }) {
  return (
    <div className="sidebar-info">
      <img
        src={require("../../images/" + personalInfo.picture)}
        alt="Thulasizwe"
        width="80"
      />

      <div className="info-content">
        <h1 className="name" title="Thulasizwe Nkambule">
          {personalInfo.name}
        </h1>

        <p className="title">{personalInfo.field}</p>
      </div>
      <ToggleButton toggle={toggle} />
    </div>
  );
}

export default SidebarHeader;

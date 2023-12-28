import React from "react";

import portfolioData from "../../data/portfolioData.json";
import "./SidebarHeader.css";

const personalInfo = portfolioData.personalInfo;
function SidebarHeader() {
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
    </div>
  );
}

export default SidebarHeader;

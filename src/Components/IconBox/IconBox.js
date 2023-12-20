import React from "react";

import "./IconBox.css";
function IconBox({ detail }) {
  return <div className="icon-box">{detail.icon}</div>;
}

export default IconBox;

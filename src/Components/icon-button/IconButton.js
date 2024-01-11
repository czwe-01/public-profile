import React from "react";
import IconBox from "../IconBox/IconBox";

import "./IconButton.css";
function IconButton({ handleClick, icon }) {
  return (
    <button className="iconButton" onClick={handleClick}>
      <IconBox icon={icon} />
    </button>
  );
}

export default IconButton;

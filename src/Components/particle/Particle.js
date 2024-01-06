import React from "react";

function Particle(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: props.left,
        top: props.top,
        width: "100px",
        height: "100px",
        zIndex: -1,
        backgroundColor: "rebeccapurple",
      }}
    ></div>
  );
}

export default Particle;

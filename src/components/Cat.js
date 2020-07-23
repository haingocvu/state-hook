import React from "react";
import useMousePosition from "uses/useMousePosition";
import Pig from "assets/images/pig.png";

function Cat(props) {
  const mousePosition = useMousePosition();
  return (
    <img
      src={Pig}
      alt="pig"
      style={{
        position: "absolute",
        top: mousePosition.top,
        left: mousePosition.left,
      }}
    />
  );
}

export default Cat;

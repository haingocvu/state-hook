import { useState, useEffect } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  function handleMouseEvent(e) {
    setPosition({
      left: e.pageX,
      top: e.pageY,
    });
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseEvent);
    return () => document.removeEventListener("mousemove", handleMouseEvent);
  }, []);

  return position;
}

export default useMousePosition;

import React from "react";
import "./BoxColor.css";

export const BoxColor = ({ r, g, b }) => {
  const color = `rgb(${r} ${g} ${b})`;
  console.log(color);
  function toHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return (
    <div className="colorBox" style={{ backgroundColor: color }}>
      <p>{color}</p>
      <p>#{toHex(r) + toHex(g) + toHex(b)}</p>
    </div>
  );
};

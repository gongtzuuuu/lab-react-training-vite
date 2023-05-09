import React from "react";
import "./Random.css";

export const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("min: ", min, "max: ", max, "randomNumber: ", randomNumber);

  return (
    <p className="random">
      Random valur between {min} and {max} => {randomNumber}
    </p>
  );
};

import React from "react";
import "./Greetings.css";

export const Greetings = ({ lang, children }) => {
  console.log(lang, children);

  return (
    <p className="greetings">
      {lang === "de" ? "Hallo" : "Bonjour"} {children}
    </p>
  );
};

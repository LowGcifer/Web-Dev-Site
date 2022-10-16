import "../../fonts.css";
import "./pathsaccordion.css";
import { useState } from "react";

function PathsAccordion() {
  const pathsSections = [
    {
      title: "You already have a design:",
      content:
        "This means either you or a web designer have already created a web design, now you just need someone to turn that design into a real website.",
    },
    {
      title: "You're starting from scratch:",
      content: "This means you have nothing.",
    },
  ];

  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default PathsAccordion;

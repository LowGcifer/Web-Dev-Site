import "../../fonts.css";
import "./pathsaccordion.css";
import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const PathsAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-container">
      <div className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default PathsAccordion;

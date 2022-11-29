import "../../fonts.css";
import "./pathsaccordion.css";
import React from "react";
import { useSpring, animated } from "react-spring";
// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const PathsAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "75px" },
    to: { opacity: "1", maxHeight: isActive ? "500px" : "75px" },
    config: { duration: "300" },
  });

  return (
    <div className="accordion-container">
      <animated.div className="accordion" style={openAnimation}>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div id="active-sign">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className="accordion-content" aria-expanded={!isActive}>
            {content}
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default PathsAccordion;

import "../../pages/contact/contact.css";
import React from "react";
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div id="calendly-container">
      <InlineWidget
        style="position: relative;min-width: 750px;height:750px"
        url="https://calendly.com/loganisley"
      ></InlineWidget>
    </div>
  );
}

export default Calendly;

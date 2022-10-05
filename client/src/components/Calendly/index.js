import "../../pages/contact/contact.css";
import React from "react";
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div>
      <InlineWidget url="https://calendly.com/loganisley"></InlineWidget>
    </div>
  );
}

export default Calendly;

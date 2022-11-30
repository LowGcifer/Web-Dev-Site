import React from "react";
import "../../style.css";

function HomeHeader() {
  return (
    <div id="header-container">
      <div id="desktop-header">
        {/* <img
          src="../../images/My-Website-Home-Header.jpg"
          alt="An open laptop lays on a black surface"
          style="height:952px;"
        ></img> */}
        <p id="header-header-text">Logan Isley</p>
        <p id="header-subheader-text">Full-Stack Web Developer</p>
      </div>
    </div>
  );
}

export default HomeHeader;

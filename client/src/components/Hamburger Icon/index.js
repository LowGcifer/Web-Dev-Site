import * as React from "react";
import "./hamburger.css";

const Hamburger = (props) => (
  <div>
    <div className="hamburger-icon">
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>

    {/* <svg
        alt="Hamburger Menu"
        xmlns="http://www.w3.org/2000/svg"
        width={310}
        height={259.344}
        {...props}
      >
        <title>{"Hamburger (Menu) Icon"}</title>
        <path
          d="M19.668 1032.694h250.646M19.668 932.694h250.646M19.668 832.694h250.646"
          style={{
            fill: "none",
            stroke: "#000",
            strokeWidth: 49.33635712,
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeOpacity: 1,
            strokeDasharray: "none",
          }}
          transform="translate(10.016 -803.031)"
        />
      </svg> */}

    <style jsx>
      {`
        .hamburger-icon {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }

        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: white;
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
      `}
    </style>
  </div>
);

export default Hamburger;

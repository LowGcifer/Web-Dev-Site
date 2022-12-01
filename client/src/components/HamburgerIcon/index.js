import * as React from "react";

const Hamburger = ({ isOpen }) => (
  <div>
    <div className="hamburger-icon">
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>

    {/* Hi */}

    <style jsx>
      {`
        button {
          background-color: black;
          border: none;
        }

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

        .burger1 {
          transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
        }

        .burger2 {
          transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
          opacity: ${isOpen ? 0 : 1};
        }

        .burger3 {
          transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}
    </style>
  </div>
);

export default Hamburger;
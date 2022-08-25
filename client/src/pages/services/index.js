import Navbar from "../../components/Navbar";
import "./style.css";

function Services() {
  return (
    <div className="default-color">
      <Navbar></Navbar>
      <div className="services-body">
        <div>
          <div id="services-header-image"></div>
          <h1 id="services-header-text">Services</h1>
        </div>
        <div id="services-paths">
          <div id="services-paths-head">
            <p>
              There are two starting points<br></br>for building your website:
            </p>
          </div>
          <div id="services-paths-top-line">
            <hr></hr>
          </div>
        </div>
        <div id="services-cost"></div>
        <div id="services-question-section"></div>
      </div>
    </div>
  );
}

export default Services;

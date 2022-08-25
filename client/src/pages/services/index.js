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
        <div id="services-paths"></div>
      </div>
    </div>
  );
}

export default Services;

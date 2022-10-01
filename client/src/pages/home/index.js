import "../../fonts.css";
import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import "../../style.css";
// import { Link } from "react-router-dom";
// import Services from "../../pages/services";
// import App from "../../App";

function Home() {
  return (
    <div class="default-color">
      <Navbar></Navbar>
      <div class="home-body">
        <HomeHeader></HomeHeader>
        <div className="home-lead">
          <p id="home-lead-head">
            {" "}
            <span class="lead-span">
              It's time to up your web presence to compete <br></br> in the 21st
              Century
            </span>
          </p>
          <p id="home-lead-subhead">
            <span class="lead-span">
              A custom-coded website just for <br></br> your business is a
              necessity <br></br>to make your brand stand out.
            </span>
          </p>
        </div>
        <div id="home-image-area">
          <div>
            <div id="home-image-one"></div>
            <p id="home-image-paragraph-one">
              <span>
                {" "}
                Work with me to bring Web <br></br>Designs to life and establish{" "}
                <br></br>a unique, custom web presence <br></br>that'll be above
                your competition
              </span>
            </p>
          </div>
          <div>
            <div id="home-image-two"></div>
            <p id="home-image-paragraph-two">
              <span>
                Or start from scratch and work<br></br>with highly qualified web
                designers<br></br>who can create the design of your<br></br>
                brand's dreams.
              </span>
            </p>
          </div>
        </div>
        <div id="callout-home">
          <p id="callout-text">
            Anyone can use the same WordPress theme that 1000 other<br></br>
            businesses are using. In the age of the internet, having a<br></br>
            unique, standout web presence is essential in crafting a brand
            <br></br>that stands apart from your competitors.
          </p>
        </div>
        <div id="home-final-section">
          <p id="home-final-text">
            Hi, I'm Logan Isley, I'm a Columbia-Certified Full-Stack Web
            Developer,<br></br>and I'm going to bring your website to the 21st
            Century.
          </p>
        </div>
        <div id="final-button-section">
          <a id="learn-more-button" className="button-style" href="/services">
            Learn More
          </a>
          <a id="contact-button" className="button-style" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

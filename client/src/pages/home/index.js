import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import "../../style.css";
// import App from "../../App";

function Home() {
  return (
    <div class="default-color">
      <Navbar></Navbar>
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
            designers<br></br>who can create the design of your<br></br>brand's
            dreams.
          </span>
        </p>
      </div>

      <div id="callout-home"></div>
      <div id="home-final-section"></div>
    </div>
  );
}

export default Home;

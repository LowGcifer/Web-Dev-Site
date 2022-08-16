import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import "../../style.css";
// import App from "../../App";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      <div className="home-lead">
        <p id="home-lead-head">
          It's time to up your web presence to compete <br></br> in the 21st
          Century
        </p>
        <p id="home-lead-subhead">
          A custom-coded website just for <br></br> your business is a necessity{" "}
          <br></br>to make your brand stand out.
        </p>
      </div>
      <div>
        <div id="home-image-one"></div>
        <p></p>
      </div>
      <div>
        <div id="home-image-two"></div>
      </div>
    </div>
  );
}

export default Home;

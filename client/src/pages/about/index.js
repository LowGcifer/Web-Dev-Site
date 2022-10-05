import "../../fonts.css";
import Navbar from "../../components/Navbar";
import "./about.css";

function About() {
  return (
    <div className="default-color">
      <Navbar></Navbar>
      <div id="about-body">
        <div id="about-header-section">
          <h1 id="about-header">About Me</h1>
        </div>
        <div id="about-row-one">
          <p id="about-paragraph-one">
            Hi! I'm Logan Isley. I'm a web developer <br></br>and a passionate
            guitarist! In 2021, I got <br></br>my certification in Full Stack
            Web <br></br>Development from Columbia University.
          </p>
          <div id="about-image-one"></div>
        </div>
        <div id="about-row-two">
          <p id="about-paragraph-two">
            Outside of web development, you'll <br></br>find me making music,
            hanging out with <br></br>friends, and playing video games! I've
            always <br></br>had a knack for all things computer, so <br></br>
            coding was a very obvious path for me to <br></br>go down, and here
            I am today! Making <br></br>websites for people!
          </p>
        </div>
        <div id="about-button-section">
          <a id="work-with-button" className="button-style" href="/services">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

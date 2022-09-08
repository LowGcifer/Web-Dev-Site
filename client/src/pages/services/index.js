import Navbar from "../../components/Navbar";
import "./services.css";

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
          <div id="services-paths-top-line"></div>
          <div id="services-paths-left">
            <p id="services-left-head">You already have a design:</p>
            <p id="services-left-one">
              This means either you or a <br></br>web designer have already{" "}
              <br></br>created a web design, now you <br></br>just need someone
              to turn <br></br> that design into a real <br></br> website.
            </p>
            <p id="services-left-two">
              Great! We'll take a look at <br></br> your design and talk
              details. <br></br> We'll come up with a quote <br></br> and a
              turnaround date, and <br></br> I'll be ready to go.
            </p>
          </div>
          <div id="services-paths-right">
            <p id="services-right-head">You're starting from scratch</p>
            <p id="services-right-one">
              This means you have nothing. <br></br> You don't have a design for{" "}
              <br></br> your new website. This <br></br> means you'll not only
              have <br></br> a new website developed, <br></br> but also have
              one designed.
            </p>
            <p id="services-right-two">
              Luckily for you, I have connections <br></br> to superb web
              designers at <br></br> 929 Studios. I'll connect you <br></br>{" "}
              with them and they can design <br></br> you a website that'll fit
              your <br></br> brand.
            </p>
            <p id="services-right-three">
              After you have a web design from <br></br> 929 Studios, you'll
              come back here <br></br> to work out a quote and turnaround{" "}
              <br></br> date for your finished website!
            </p>
          </div>
        </div>
        <div id="services-cost"></div>
        <div id="services-question-section"></div>
      </div>
    </div>
  );
}

export default Services;

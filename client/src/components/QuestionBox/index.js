import "../../fonts.css";
import "../../pages/services/services.css";
import { useState } from "react";

function QuestionBox() {
  const [isActive, setIsActive] = useState(1);
  const [boxText, setBoxText] = useState(
    "It depends on the scope of the project. Design usually takes a week or less, but the development phase can take 2-4 weeks for a basic website to several months for an expansive application. I can determine specific dates during our Zoom calls."
  );
  const handleClick = (index) => {
    setIsActive(index);
  };

  return (
    <div>
      <article className="services-questions-container">
        <div id="question-boxes-area">
          <button
            onClick={() => {
              setBoxText(
                "It depends on the scope of the project. Design usually takes a week or less, but the development phase can take 2-4 weeks for a basic website to several months for an expansive application. I can determine specific dates during our Zoom calls."
              );
              handleClick(1);
            }}
            className={
              isActive === 1 ? "selected-question" : "unselected-question"
            }
          >
            <h2>
              <p>
                What is project turnaround <br></br>like?
              </p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
          <button
            onClick={() => {
              setBoxText(
                "I am a web developer and designer. While I personally limit my work to this area, I do have connections to people who work with other areas of brand design, marketing, etc."
              );
              handleClick(2);
            }}
            className={
              isActive === 2 ? "selected-question" : "unselected-question"
            }
          >
            <h2>
              <p>
                I think I need more <br></br>than a website
              </p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
          <button
            onClick={() => {
              setBoxText(
                "This depends on whether I host your website or not. If I host your website, I will be personally in charge of making sure your website is up and running 24/7. If you decide to host your website elsewhere, then I will not be in charge of making sure your website is up and running at all times. I can be contacted about performing maintenance on your website anyway, but it will not be automatically covered by a monthly hosting rate."
              );
              handleClick(3);
            }}
            className={
              isActive === 3 ? "selected-question" : "unselected-question"
            }
          >
            <h2>
              <p>
                What does long-term <br></br>support look like?
              </p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
          <button
            onClick={() => {
              setBoxText(
                "Yes! I work with anyone who needs a website. Business owners, designers looking to hire a developer for a project, or even developers looking for a designer."
              );
              handleClick(4);
            }}
            className={
              isActive === 4 ? "selected-question" : "unselected-question"
            }
          >
            <h2>
              <p>
                I'm a designer in <br></br>need of a developer <br></br>for a
                project, can I hire you?
              </p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
          <button
            onClick={() => {
              setBoxText(
                "On my contact page you will find my email as well as a window to schedule a Zoom meeting on my Calendly. I am always down to discuss potential projects! "
              );
              handleClick(5);
            }}
            className={
              isActive === 5 ? "selected-question" : "unselected-question"
            }
          >
            <h2>
              <p>When can we start?</p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
        </div>
      </article>
      <div id="answer-box">
        <p id="answer-box-text">{boxText}</p>
      </div>
    </div>
  );
}

export default QuestionBox;

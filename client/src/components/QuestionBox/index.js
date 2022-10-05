import "../../fonts.css";
import "../../pages/services/services.css";
import { useState } from "react";

function QuestionBox() {
  const [isActive, setIsActive] = useState(false);
  const [boxText, setBoxText] = useState("1 Lorem Ipsum");
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div>
      <article className="services-questions-container">
        <div id="question-boxes-area">
          <button
            onClick={() => {
              setBoxText("1 Lorem Ipsum");
              handleClick();
            }}
            className={isActive ? "selected-question" : "unselected-question"}
          >
            <h2>
              <p>
                Do you design websites <br></br>directly?
              </p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
          <button
            onClick={() => {
              setBoxText("2 Lorem Ipsum");
              handleClick();
            }}
            className={isActive ? "selected-question" : "unselected-question"}
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
              setBoxText("3 Lorem Ipsum");
              handleClick();
            }}
            className={isActive ? "selected-question" : "unselected-question"}
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
              setBoxText("4 Lorem Ipsum");
              handleClick();
            }}
            className={isActive ? "selected-question" : "unselected-question"}
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
              setBoxText("5 Lorem Ipsum");
              handleClick();
            }}
            className={isActive ? "selected-question" : "unselected-question"}
          >
            <h2>
              <p>When can we start?</p>
            </h2>
            {/* <p>Lorem ipsum</p> */}
          </button>
        </div>
      </article>
      <div id="answer-box">
        <p>{boxText}</p>
      </div>
    </div>
  );
}

export default QuestionBox;

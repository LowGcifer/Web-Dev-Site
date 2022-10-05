import "../../fonts.css";
import "../../pages/services/services.css";
import { useState } from "react";

function QuestionBox() {
  const [isActive, setIsActive] = useState(1);
  const [boxText, setBoxText] = useState("1 Lorem Ipsum");
  const handleClick = (index) => {
    setIsActive(index);
  };

  return (
    <div>
      <article className="services-questions-container">
        <div id="question-boxes-area">
          <button
            onClick={() => {
              setBoxText("Opus Eponymous");
              handleClick(1);
            }}
            className={
              isActive === 1 ? "selected-question" : "unselected-question"
            }
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
              setBoxText("Infestissumam");
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
              setBoxText("Meliora");
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
              setBoxText("Prequelle");
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
              setBoxText("Impera");
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
        <p>{boxText}</p>
      </div>
    </div>
  );
}

export default QuestionBox;

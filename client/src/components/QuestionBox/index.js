import "../../fonts.css";
import "../../pages/services/services.css";
import { useState } from "react";

function QuestionBox() {
  const [boxText, setBoxText] = useState("1 Lorem Ipsum");
  return (
    <div>
      <article className="services-questions-container">
        <button
          onClick={() => setBoxText("1 Lorem Ipsum")}
          className="unselected-question"
        >
          <h2>
            <p>
              Do you design websites <br></br>directly?
            </p>
          </h2>
          {/* <p>Lorem ipsum</p> */}
        </button>
        <button
          onClick={() => setBoxText("2 Lorem Ipsum")}
          className="unselected-question"
        >
          <h2>
            <p>
              I think I need more <br></br>than a website
            </p>
          </h2>
          {/* <p>Lorem ipsum</p> */}
        </button>
        <button
          onClick={() => setBoxText("3 Lorem Ipsum")}
          className="unselected-question"
        >
          <h2>
            <p>
              What does long-term <br></br>support look like?
            </p>
          </h2>
          {/* <p>Lorem ipsum</p> */}
        </button>
        <button
          onClick={() => setBoxText("4 Lorem Ipsum")}
          className="unselected-question"
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
          onClick={() => setBoxText("5 Lorem Ipsum")}
          className="unselected-question"
        >
          <h2>
            <p>When can we start?</p>
          </h2>
          {/* <p>Lorem ipsum</p> */}
        </button>
      </article>
      <div id="answer-box">
        <p>{boxText}</p>
      </div>
    </div>
  );
}

export default QuestionBox;

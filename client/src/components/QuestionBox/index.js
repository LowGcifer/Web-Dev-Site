import "../../fonts.css";
import "../../pages/services/services.css";

function QuestionBox() {
  return (
    <div>
      <article className="services-questions-container">
        <button onClick="setQuestionOne()" id="question-1">
          <h2>
            <a href="#question-1">
              Do you design websites <br></br>directly?
            </a>
          </h2>
          <p>Lorem ipsum</p>
        </button>
        <button onClick="setQuestionTwo()" id="question-2">
          <h2>
            <a href="question-2">
              I think I need more <br></br>than a website
            </a>
          </h2>
          <p>Lorem ipsum</p>
        </button>
        <button onClick="setQuestionThree()" id="question-3">
          <h2>
            <a href="question-3">
              What does long-term <br></br>support look like?
            </a>
          </h2>
          <p>Lorem ipsum</p>
        </button>
        <button onClick="setQuestionFour()" id="question-4">
          <h2>
            <a href="question-4">
              I'm a designer in <br></br>need of a developer <br></br>for a
              project, can I hire you?
            </a>
          </h2>
          <p>Lorem ipsum</p>
        </button>
        <button onClick="setQuestionFive()" id="question-5">
          <h2>
            <a href="question-5">When can we start?</a>
          </h2>
          <p>Lorem ipsum</p>
        </button>
      </article>
      <div id="answer-box"></div>
    </div>
  );
}

export default QuestionBox;

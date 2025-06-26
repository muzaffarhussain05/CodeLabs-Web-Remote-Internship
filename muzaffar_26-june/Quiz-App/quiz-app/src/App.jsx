import { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import questions from "./data";

const App = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="app">
      <h1>React Quiz App</h1>
      {isFinished ? (
        <Score score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <Question questionData={questions[current]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default App;

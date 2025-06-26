const Question = ({ questionData, handleAnswer }) => {
    return (
      <div className="question-box">
        <h2>{questionData.question}</h2>
        <div className="options">
          {questionData.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Question;
  
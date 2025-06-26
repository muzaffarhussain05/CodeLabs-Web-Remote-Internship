const Score = ({ score, total, onRestart }) => {
    return (
      <div className="score-box">
        <h2>Your Score: {score} / {total}</h2>
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    );
  };
  
  export default Score;
  
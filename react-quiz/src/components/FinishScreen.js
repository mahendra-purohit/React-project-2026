function FinishScreen({ points, totalpoints, highscore, dispatch }) {
  return (
    <div>
      <p className="result">
        you scored <strong>{points}</strong> points out of {totalpoints}
      </p>
      <p className="highscore">(High Score : {highscore})</p>
      <button
        className="btn btn ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}
export default FinishScreen;

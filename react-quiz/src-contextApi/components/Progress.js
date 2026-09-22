import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, totalpoints } = useQuiz();
  return (
    <div className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalpoints}
      </p>
    </div>
  );
}

export default Progress;

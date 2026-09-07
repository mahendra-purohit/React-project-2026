function Progress({ index, numQuestions, points, totalpoints }) {
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

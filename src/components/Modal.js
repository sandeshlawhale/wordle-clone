export default function Modal({
  solution,
  turn,
  isCorrect,
  resetGame,
  setShowModal,
}) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You Found the solution in {turn} guesses :)</p>
          <button
            className="btn"
            onClick={() => {
              setShowModal(false);
              resetGame();
            }}
          >
            Play Again
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className="solution">{solution}</p>
          <p>Better Luck Next Time :)</p>
          <button
            className="btn"
            onClick={() => {
              setShowModal(false);
              resetGame();
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

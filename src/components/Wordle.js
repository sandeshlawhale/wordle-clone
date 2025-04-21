import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const {
    resetGame,
    currentGuess,
    handleKeyup,
    guesses,
    turn,
    isCorrect,
    usedKey,
    handleMouseClick,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    document.addEventListener("click", handleMouseClick);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
      document.removeEventListener("click", handleMouseClick);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
      document.removeEventListener("click", handleMouseClick);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
      document.removeEventListener("click", handleMouseClick);
    };
  }, [handleKeyup, handleMouseClick, isCorrect, turn]);

  return (
    <div className="wordle">
      {showModal && (
        <Modal
          solution={solution}
          turn={turn}
          isCorrect={isCorrect}
          resetGame={resetGame}
          setShowModal={setShowModal}
        />
      )}
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keyboard usedKey={usedKey} />
    </div>
  );
}

import { useState } from "react";

function useWordle(solution) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKey, setUsedKey] = useState({});

  // reset the game
  const resetGame = () => {
    setTurn(0);
    setCurrentGuess("");
    setGuesses([...Array(6)]);
    setHistory([]);
    setIsCorrect(false);
    setUsedKey({});
  };

  // format a guess {key: a, color: yellow}
  const formatGuess = () => {
    const solutionArrray = [...solution];
    const formattedArray = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // if word is in correct place
    formattedArray.forEach((l, i) => {
      if (solutionArrray[i] === l.key) {
        formattedArray[i].color = "green";
      }
    });

    // if word is in not in correct place
    formattedArray.forEach((l, i) => {
      if (solutionArrray.includes(l.key) && l.color !== "green") {
        formattedArray[i].color = "yellow";
      }
    });
    return formattedArray;
  };

  //add a new guess
  // add one to turn state
  //check is correct
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuess) => {
      let newGuess = [...prevGuess];
      newGuess[turn] = formattedGuess;
      return newGuess;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKey((prevUsedKey) => {
      let newKey = { ...prevUsedKey };
      formattedGuess.forEach((l) => {
        let currentColor = newKey[l.key];

        if (l.color === "green") {
          newKey[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          newKey[l.key] = "yellow";
          return;
        }
        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKey[l.key] = "grey";
          return;
        }
      });
      return newKey;
    });
    setCurrentGuess("");
  };

  // track current guess
  // check if enter presses
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      //   let msg = "";
      // if turn over 6
      if (turn > 5) {
        // setTimeout(() => setPopup(true), 1000)
        // msg = 'out of moves'
        return;
      }
      // if duplicates the word
      if (history.includes(currentGuess)) {
        // setTimeout(() => setPopup(true), 1000)
        // msg = 'you have already tried that word'
        return;
      }
      // length not equal to 5
      if (currentGuess.length !== 5) {
        // setTimeout(() => setPopup(true), 1000)
        // msg = 'word must be 5 letter long'
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  const handleMouseClick = (e) => {
    if (e.target.innerHTML === "Enter") {
      if (turn > 5) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (e.target.innerHTML === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[a-z]$/.test(e.target.innerHTML)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + e.target.innerHTML;
        });
      }
    }
  };

  return {
    currentGuess,
    handleKeyup,
    guesses,
    turn,
    isCorrect,
    usedKey,
    handleMouseClick,
    resetGame,
  };
}

export default useWordle;

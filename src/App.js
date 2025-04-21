import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Wordle from "./components/Wordle";
import { Routes, Route } from "react-router-dom";
import AboutWordle from "./components/AboutWordle";
import Contact from "./components/Contact";
import { data } from "./constants/data";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:3001/solutions')
    //   .then(res => res.json())
    //   .then(json => {
    //     let randomSolution = json[Math.floor(Math.random()*json.length)]
    //     setSolution(randomSolution.word)
    //   })
    if (data) {
      const randomIndex = Math.floor(Math.random() * data.solutions.length);
      const randomSolution = data.solutions[randomIndex].word;
      setSolution(randomSolution);
    }
  }, [setSolution]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={solution && <Wordle solution={solution} />}
        ></Route>
        <Route path="/about-worlde" element={<AboutWordle />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;

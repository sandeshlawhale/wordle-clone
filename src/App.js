import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Wordle from "./components/Wordle";
import { Routes, Route } from "react-router-dom";
import AboutWordle from "./components/AboutWordle";
import Contact from "./components/Contact";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        let randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return ( 
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={solution && <Wordle solution={solution} />} ></Route>
          <Route path='/about-worlde' element={<AboutWordle />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </div>
  );
}

export default App;

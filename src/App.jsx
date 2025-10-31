import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  function clickTarget(event) {
    event.stopPropagation(); // Prevents triggering parent clicks
    setScore(score + 1);
  }

  function missTarget() {
  setLives(lives - 1)
}

  return (
    <>
      <div>
        <h1>Apple Clicker Game</h1>
      </div>
      <div className="stats">Score: {score}</div>
      <div className="orchard-background" onClick={missTarget}>
        <div className="apple-target" onClick={clickTarget}></div>
      </div>
    </>
  );
}

export default App;

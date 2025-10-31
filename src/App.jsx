import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [appleSize, setAppleSize] = useState(100);

  function clickTarget(event) {
    event.stopPropagation(); // Prevents triggering parent clicks
    setScore(score + 1);
    randomeSize();
  }

  function missTarget() {
    setLives(lives - 1);
    randomeSize();
  }

  function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  function randomeSize() {
    const randomSize = randomNumber(20, 100);
    setAppleSize(randomSize);
  }

  const appleStyle = {
    width: appleSize + "px",
    height: appleSize + "px",
  };

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

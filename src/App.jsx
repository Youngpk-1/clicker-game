import { useState } from "react";
import "./App.css";

function Stats({ score, lives, style }) {
  return (
    <div className="stats" style={style}>
      Score: {score} Lives: {lives}
    </div>
  );
}

function GameBoard({ onMiss, children }) {
  return (
    <div className="orchard-background" onClick={onMiss}>
      {children}
    </div>
  );
}

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [appleSize, setAppleSize] = useState(100);
  const [appleX, setAppleX] = useState(0);
  const [appleY, setAppleY] = useState(0);

  function clickTarget(event) {
    event.stopPropagation();
    setScore(score + 1);
    randomSize();
    randomSpot();
  }

  function randomSpot() {
    setAppleX(randomNumber(0, 400));
    setAppleY(randomNumber(0, 400));
  }

  function missTarget() {
    setLives(lives - 1);
    randomSize();
  }

  function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  function randomSize() {
    setAppleSize(randomNumber(20, 100));
  }

  const appleStyle = {
    width: appleSize + "px",
    height: appleSize + "px",
    left: appleX + "px",
    top: appleY + "px",
  };

  const statsStyle = {
    backgroundColor: "brown",
    color: "white",
  };

  if (score <= 9) {
    statsStyle.backgroundColor = "brown";
    statsStyle.color = "white";
  } else if (score >= 10 && score <= 19) {
    statsStyle.backgroundColor = "darkgreen";
    statsStyle.color = "white";
  } else if (score >= 10 && score <= 29) {
    statsStyle.backgroundColor = "blue";
    statsStyle.color = "white";
  } else if (score >= 30) {
    statsStyle.backgroundColor = "purple";
    statsStyle.color = "black";

    function GameOverScreen({ score, onRestart }) {
      return (
        <div className="game-over-screen">
          <h1>Game Over! Play Again?</h1>
          <p>Your Final Score: {score}</p>
          <button className="restart-btn" onClick={onRestart}>
            Restart
          </button>
        </div>
      );
    }

    function restartGame() {
      setScore(0);
      setLives(3);
      randomeSize();
      randomSpot();
    }

    console.log("testing");
    if (lives <= 0) {
      console.log("lives <=0");
      return <GameOverScreen score={score} onRestart={restartGame} />;
    }
  }
  console.log("hello again");
  return (
    <>
      <div>
        <h1>Apple Clicker Game</h1>
      </div>
      <Stats score={score} lives={lives} style={statsStyle} />
      {/* <div className="stats">Score: {score}</div> */}
      {/* <div className="orchard-background" onClick={missTarget}></div> */}
      <GameBoard onMiss={missTarget}>
        {score < 35 ? (
          <div
            className="apple-target"
            onClick={clickTarget}
            style={appleStyle}
          ></div>
        ) : (
          <h1 className="win">You Win!!!</h1>
        )}
      </GameBoard>
    </>
  );
}

export default App;

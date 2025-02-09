import React, { useState, useEffect } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorGuessingGame = () => {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Guess the correct color!");

  const generateColors = () => {
    const newColors = Array.from({ length: 6 }, getRandomColor);
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
    setMessage("Guess the correct color!");
  };
  useEffect(() => {
    generateColors();
  }, []);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore((prev) => prev + 1);
      setMessage("✅ Correct! Generating new colors...");
      setTimeout(generateColors, 1000);
    } else {
      setMessage("❌ Wrong guess! Try again.");
    }
  };

  const handleReset = () => {
    setScore(0);
    setMessage("Guess the correct color!");
    generateColors();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1> 🌈 Color Guessing Game 🌈</h1>

      <h2 data-testid="score">Score: {score}</h2>

      <div
        data-testid="colorBox"
        style={{
          backgroundColor: targetColor,
          width: "150px",
          height: "150px",
          margin: "10px auto",
          borderRadius: "8px",
          border: "2px solid black",
        }}
      ></div>
      <h3 data-testid="gameInstructions">{message}</h3>

      <div
        data-testid="colorOption"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => handleGuess(color)}
          ></div>
        ))}
      </div>
      <button
        data-testid="newGameButton"
        onClick={handleReset}
        style={{
          marginTop: "2em",
          padding: ".5em",
          backgroundColor: "rgb(211, 190, 190)",
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default ColorGuessingGame;

import React, { useState } from "react";

export default function GenerateHexColor() {
  const [hexColor, setHexColor] = useState("#ffffff");

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    setHexColor(newColor);
    document.body.style.backgroundColor = newColor;
  };
}

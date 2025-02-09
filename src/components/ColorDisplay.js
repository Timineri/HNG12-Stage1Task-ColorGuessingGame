import React, { useState } from "react";

export default function ColorDisplay() {
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
    // document.body.style.backgroundColor = newColor;
    document.getElementsByClassName("Box0")[0].style.backgroundColor = newColor;
  };
  return (
    <div className="color-display">
      <div className="Box0" onClick={changeBackgroundColor}>
        {hexColor}
      </div>
    </div>
  );
}

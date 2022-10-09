import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const createColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: Date.now().toString(),
        rating: 0,
        title,
        color,
      },
    ];
    setColors(newColors);
  };
  return (
    <ColorContext.Provider
      value={{
        colors,
        createColor,
        rateColor,
        removeColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

'use client';
// src/components/ToggleTheme.tsx
import { useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("corporate");

  const handleToggleTheme = () => {
    const themes = ["retro", "corporate", "black"];
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="fixed bottom-5 right-5 p-4 bg-primary text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      <span>🌗</span>
    </button>
  );
};

export default ToggleTheme;

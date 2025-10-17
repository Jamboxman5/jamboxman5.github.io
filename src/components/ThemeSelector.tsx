import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeSelector: React.FC = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="space-x-2 w-1/8 py-3 flex mx-auto flex-row items-center justify-center">
      {availableThemes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 rounded mx-auto ${
            theme === t
              ? "bg-primary text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;

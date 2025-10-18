import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeSelector: React.FC = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  const format = (x: String) => {
    return x.charAt(0).toUpperCase() + x.substring(1);
  }

  return (
    <div className="space-x-2 w-1/8 py-3 flex mx-auto flex-row items-center justify-center text-white font-normal">
      <div>
        Theme:
      </div>
      <div className="flex flex-row space-x-2">
        {availableThemes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 rounded-lg ml-2 ${
            theme === t
              ? "bg-primary text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {format(t)}
        </button>
      ))}
      </div>
      
    </div>
  );
};

export default ThemeSelector;

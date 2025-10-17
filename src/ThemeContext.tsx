import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "night" | "day" | "sunrise" | "sunset";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = "app-theme";
const THEMES: Theme[] = ["night", "day", "sunrise", "sunset"];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("sunset");

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const initial =
      storedTheme && THEMES.includes(storedTheme) ? storedTheme : "sunset";
    applyTheme(initial);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: applyTheme, availableThemes: THEMES }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

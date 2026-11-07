import { useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./ThemeContext";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const savedTheme = window.localStorage.getItem("dwarkamai-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch (error) {
    if (!(error instanceof DOMException && error.name === "SecurityError")) throw error;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#151c2d" : "#fbf8f3";
    try {
      window.localStorage.setItem("dwarkamai-theme", theme);
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "SecurityError")) throw error;
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => current === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

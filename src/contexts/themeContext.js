import { createContext, useContext, useState } from "react";

const ThemeToggleContext = createContext();

export function useTheme() {
  return useContext(ThemeToggleContext);
}

export function ThemeProviderWrapper({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeToggleContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeToggleContext.Provider>
  );
}

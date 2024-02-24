import React, { useState, createContext, useContext } from "react";
import { light, dark } from '../constants/colors';

type TThemeContext = {
  theme: { [key: string]: string };
  setTheme: (theme: { primary: string; secondary: string }) => void;
  colors: { [key: string]: string };
};

interface TThemeProvider {
  initialTheme?: string | { primary: string; secondary: string }; 
  children: React.ReactNode;
}

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<TThemeProvider> = ({ initialTheme = 'light', children }) => {
  const [theme, setTheme] = useState(typeof initialTheme === 'string' ? initialTheme === 'light' ? light : dark : initialTheme);
  const colors = theme === light ? light : dark;

  const contextValue: TThemeContext = {
    theme,
    setTheme,
    colors
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme(){
    console.log('from context...')
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return(
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
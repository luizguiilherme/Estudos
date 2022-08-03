import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: 'dark',
  };

  handleToggleTheme = () => {
    console.log('from context...')
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
      }));
  }
  render(){
    return(
      <ThemeContext.Provider 
        value={{
          theme: this.state.theme, 
          handleToggleTheme: this.handleToggleTheme 
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

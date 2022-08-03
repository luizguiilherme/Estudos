import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props){
    super(props);

    let theme = 'dark';

    try{
      theme = JSON.parse(localStorage.getItem('theme'));
    }catch(err){
      console.log(err)
    }

    this.state = {
      theme,
      batatinha: false,
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.theme !== this.state.theme){
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
      }), () => {
        localStorage.setItem('theme', JSON.stringify(this.state.theme))
      });
    
    
  }
  
  
  render(){
    return(
      <ThemeContext.Provider 
        value={{
          theme: this.state.theme, 
          handleToggleTheme: this.handleToggleTheme 
        }}
      >
        <button onClick={() => this.setState({ batatinha: 123})}>BATATINHA</button>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

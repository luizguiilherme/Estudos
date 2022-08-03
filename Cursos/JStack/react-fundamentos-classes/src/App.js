import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

import themes from './styles/themes';

class App extends Component {
  state = {
    changed: false,
  }
  componentDidMount() {
    console.log('componentDidMout')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      prevState,
      prevProps,
    })
  }

  // componentDidCatch(error, info){
  //   console.log({ error, info})
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdat', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return false;
  }

  render() {
    console.log('rendered')
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <button onClick={handleToggleTheme}>Change State</button>
              {theme === 'dark' && <Layout />}
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>

    );
  }
}

export default App;
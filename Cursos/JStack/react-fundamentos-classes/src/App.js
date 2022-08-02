import React, { useState, useMemo, useEffect, Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}



// function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme(){
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   //Função de efeito
//   // useLayoutEffect só é executado depois que a função termina de ser executada 
//   useEffect(() => {
//     console.debug('useEffect')
//   }, [theme]);

//   return (

//   );
// };
export default App;
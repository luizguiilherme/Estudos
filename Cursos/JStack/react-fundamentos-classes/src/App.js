import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

import themes from './styles/themes';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout/>
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
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
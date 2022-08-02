import React, { useState, useMemo, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';


function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  //Função de efeito
  // useLayoutEffect só é executado depois que a função termina de ser executada 
  useEffect(() => {
    for(let i = 0; i<= 10000; i++){
      console.debug(i);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
       onToggleTheme={handleToggleTheme}
       selectedTheme={theme}
       />
    </ThemeProvider>
  );
};
export default App;
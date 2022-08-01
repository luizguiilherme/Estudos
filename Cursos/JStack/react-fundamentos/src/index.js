import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import GlobalStyle from './styles/global'

// "function" Functional Comonent (Componente Funcional)

// "class" Class Component (Componente de Classe)

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
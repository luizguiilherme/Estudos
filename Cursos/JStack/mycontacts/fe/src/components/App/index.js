import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assests/styles/global';
import defaultTheme from '../../assests/styles/themes/dafualt';

import Header from '../Header';
import ContactsList from '../ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;

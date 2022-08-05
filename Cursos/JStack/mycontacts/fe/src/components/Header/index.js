import { Container, InputSearchContainer } from './styles';

import logo from '../../assests/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
    </Container>
  );
}

import { Container } from './styles';

import logo from '../../assests/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" width="201" />

    </Container>
  );
}

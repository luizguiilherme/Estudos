import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assests/images/icons/arrow.svg';
import edit from '../../assests/images/icons/edit.svg';
import trash from '../../assests/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Guilherme</strong>
              <small>instagram</small>
            </div>
            <span>luiz@jstack.com</span>
            <span>(11)99999-9999</span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Guilherme</strong>
              <small>instagram</small>
            </div>
            <span>luiz@jstack.com</span>
            <span>(11)99999-9999</span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Guilherme</strong>
              <small>instagram</small>
            </div>
            <span>luiz@jstack.com</span>
            <span>(11)99999-9999</span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

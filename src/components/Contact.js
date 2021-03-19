/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import ContactItem from './ContactItem';

const contactCss = css`
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 100px;
  h1 {
    font-weight: 800;
    font-size: 60px;
    color: #5e5e5e;
    padding-bottom: 60px;
  }
`;
const contactContainerCss = css``;

const contactWrapperCss = css`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 80px;
  justify-content: center;

  & > div {
    margin: 30px;
  }
`;

const Contact = () => {
  return (
    <section css={contactCss}>
      <Container css={contactContainerCss}>
        <h1>Kontakt</h1>
        <Container css={contactWrapperCss}>
          <ContactItem text='Obecný kontakt' email='info@petr-im.cz' />
          <ContactItem text='Objednávky' email='objednavky@petr-im.cz' />
          <ContactItem text='Fakturace' email='fakturace@petr-im.cz' />
          <ContactItem text='Drahomír Petr' email='jednatel společnosti' phone='+420 605 123 477' />
          <ContactItem text='Tomáš Foldyna' email='telefonista' phone='+420 605 723 451' />
        </Container>
      </Container>
    </section>
  );
};

export default Contact;

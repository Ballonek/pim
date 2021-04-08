/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import ContactItem from './ContactItem';

import parse from 'html-react-parser';

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
  @media screen and (max-width: 769px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 481px) {
    margin-top: 70px;
    h1 {
      font-size: 40px;
      padding-bottom: 20px;
    }
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
  @media screen and (max-width: 481px) {
    padding-bottom: 50px;
    & > div {
      margin: 20px;
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section css={contactCss} id='contact'>
      <Container css={contactContainerCss}>
        <h1>{t('ContactHeading')}</h1>
        <Container css={contactWrapperCss}>
          <ContactItem text={t('Contact1')} email='info@petr-im.cz' />
          <ContactItem text={t('Contact2')} email='objednavky@petr-im.cz' />
          <ContactItem text={t('Contact3')} email='fakturace@petr-im.cz' />
          <ContactItem text='Drahomír Petr' email={parse(t('Contact4Info'))} phone='+420 605 123 477' />
          <ContactItem text='Tomáš Foldyna' email={parse(t('Contact5Info'))} phone='+420 605 723 451' />
        </Container>
      </Container>
    </section>
  );
};

export default Contact;

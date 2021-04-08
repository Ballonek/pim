/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import FlipCard from './FlipCard';

import parse from 'html-react-parser';

const servicesCss = css``;

const servicesContainerCss = css`
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 60px;
    color: #505050;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 769px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 481px) {
    h1 {
      font-size: 40px;
    }
  }
`;

const cardsCss = css`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;

  & > div {
    margin: 15px;
  }

  @media screen and (max-width: 769px) {
    padding-bottom: 60px;
  }
`;

const servicesButtonWrapperCss = css`
  padding-bottom: 120px;
  button {
    padding: 20px 30px;
    color: white;
    background-color: #a2a2a2;
    border: none;
    -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    transition: all 200ms linear;
    &:hover  {
      background-color: rgb(25,67, 186);
      scale: 1.1;
    }
  }
  @media screen and (max-width: 769px) {
    padding-bottom: 100px;
  }
`;

const Services = () => {
  const { t } = useTranslation();

  return (
    <section css={servicesCss}>
      <Container css={servicesContainerCss}>
        <h1>{parse(t('ServicesHeading'))}</h1>
        <div css={cardsCss}>
          <FlipCard frontText={parse(t('Service1Front'))} backText={parse(t('Service1Back'))} />
          <FlipCard frontText={parse(t('Service2Front'))} backText={parse(t('Service2Back'))} />
          <FlipCard frontText={parse(t('Service3Front'))} backText={parse(t('Service3Back'))} />
          <FlipCard frontText={parse(t('Service4Front'))} backText={parse(t('Service4Back'))} />
          <FlipCard frontText={parse(t('Service5Front'))} backText={parse(t('Service5Back'))} />
          <FlipCard frontText={parse(t('Service6Front'))} backText={parse(t('Service6Back'))} />
        </div>
        <div css={servicesButtonWrapperCss}>
          <a href='#contact'>
            <button>{t('ServiceButton')}</button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;

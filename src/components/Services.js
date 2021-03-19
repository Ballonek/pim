/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import FlipCard from './FlipCard';

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
`;

const cardsCss = css`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;

  & > div {
    margin: 15px;
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
      background-color: #888888;
      scale: 1.1;
    }
  }
`;

const Services = () => {
  return (
    <section css={servicesCss}>
      <Container css={servicesContainerCss}>
        <h1>Naše služby</h1>
        <div css={cardsCss}>
          <FlipCard
            frontText='Zámečnické a svářečské práce'
            backText='Všestranné zakázkové práce s běžně užívanými materiály přesně na míru Vašim potřebám'
          />
          <FlipCard
            frontText='Průmyslová údržba'
            backText='Spolehlivá prevence proti zkomplikování či neplánované odstávce Vašeho provozu'
          />
          <FlipCard
            frontText='Montážní práce'
            backText='Profesionální instalace nových výrobních zařízení, strojů či průmyslových regálů'
          />
          <FlipCard
            frontText='Kovovýroba a výroba ocelových konstrukcí'
            backText='Zakázková výroba menších i rozměrnějších a složitějších konstrukcí'
          />
          <FlipCard
            frontText='Jeřábnické práce'
            backText='Neocenitelná pomoc při montážích, přemísťování materiálu nebo havárijích'
          />
          <FlipCard frontText='Autodoprava nad 3,5 t' backText='o	Transport libovolného nákladu o větší hmotnosti a rozměrech' />
        </div>
        <div css={servicesButtonWrapperCss}>
          <button>Kontaktujte nás</button>
        </div>
      </Container>
    </section>
  );
};

export default Services;

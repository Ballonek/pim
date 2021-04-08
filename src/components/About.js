/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import parse from 'html-react-parser';
import { ReactComponent as Icon } from '../images/ikona_01-01.svg';

const aboutCss = css``;

const aboutContainerCss = css`
  position: relative;
`;

const aboutTopCss = css`
  letter-spacing: 1px;
  color: white;
  background-color: rgba(23, 61, 172, 0.98);
  position: relative;
  top: -120px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 481px) {
    flex-direction: column;
    align-items: center;
  }
`;

const aboutIconWrapperCss = css`
  width: 300px;
  padding: 80px 0 80px 80px;
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    padding: 40px 0 40px 40px;
  }
  @media screen and (max-width: 481px) {
    width: 100px;
    font-size: 14px;
    padding: 40px 0 0 0;
  }
`;

const aboutTextWrapperCss = css`
  font-size: 18px;
  padding: 60px 200px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin-bottom: 20px;
    font-family: 'Cabin', sans-serif;
  }
  @media screen and (max-width: 769px) {
    font-size: 16px;
    padding: 60px 60px 60px 40px;
  }
  @media screen and (max-width: 481px) {
    font-size: 14px;
    padding: 10px 30px 30px 30px;
    text-align: center;
  }
`;

const aboutMidCss = css`
  margin-top: -40px;
  font-family: 'Cabin', sans-serif;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  padding: 60px 0 120px;
  span {
    color: #868686;
  }

  @media screen and (max-width: 769px) {
    font-size: 20px;
  }
  @media screen and (max-width: 481px) {
    font-size: 14px;
    padding-bottom: 90px;
  }
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <section css={aboutCss} id='about'>
      <Container css={aboutContainerCss}>
        <div css={aboutTopCss}>
          <div css={aboutIconWrapperCss}>
            <Icon fill='#97a7da' />
          </div>
          <div css={aboutTextWrapperCss}>{parse(t('AboutTop'))}</div>
        </div>
        <div css={aboutMidCss}>{parse(t('About'))}</div>
      </Container>
    </section>
  );
};

export default About;

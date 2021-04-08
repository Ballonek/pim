/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import { ReactComponent as Logo } from '../images/pim_logo-01.svg';

import parse from 'html-react-parser';

const footerCss = css`
  background-color: #1a1a1a;
`;

const footerContainerCss = css`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 481px) {
    flex-direction: column;
  }
`;

const footerLeftCss = css`
  font-family: 'Roboto Mono', monospace;
  color: rgb(187, 187, 187);
  padding: 40px 0;
  letter-spacing: 1px;
  h3 {
    margin-top: 40px;
  }
  div  {
    margin-top: 3px;
  }
  @media screen and (max-width: 769px) {
    font-size: 14px;
    h3 {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 481px) {
    font-size: 12px;
    padding: 40px 0;
    h3 {
      font-size: 14px;
      margin-top: 20px;
    }
  }
`;

const footerRightCss = css`
  padding-top: 80px;
  color: white;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  .content {
    letter-spacing: 1px;
    height: 100%;
    padding: 40px;
    background-color: #1940b5;
    color: white;
    position: relative;
    -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);

    div {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 769px) {
    font-size: 14px;
    h3 {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 481px) {
    align-items: start;
    text-align: left;
    font-size: 12px;
    padding: 0;
    position: relative;
    h3 {
      font-size: 14px;
    }
    .content {
      padding: 30px 30px 30px 0;
      &:before {
        height: 100%;
        width: 100%;
        content: '';
        position: absolute;
        background-color: #1940b5;
        left: -100%;
        top: 0;
      }
    }
  }
`;

const logoWrapperCss = css`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  div {
    width: 100px;
    margin: 0;
  }
  svg {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 61px;
    width: 110px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 481px) {
    margin: 0;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer css={footerCss}>
      <Container css={footerContainerCss}>
        <div css={footerLeftCss}>{parse(t('FooterL'))}</div>
        <div css={footerRightCss}>
          <div css={logoWrapperCss}>
            <div>
              <Logo fill='#b4b4b4' />
            </div>
          </div>
          <div className='content'>{parse(t('FooterR'))}</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

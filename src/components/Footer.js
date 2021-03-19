/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import { ReactComponent as Logo } from '../images/pim_logo-01.svg';

const footerCss = css`
  background-color: #1a1a1a;
`;

const footerContainerCss = css`
  display: flex;
  justify-content: space-between;
`;

const footerLeftCss = css`
  font-family: 'Roboto Mono', monospace;
  color: white;
  padding: 40px 0;
  letter-spacing: 1px;
  h3 {
    margin-top: 40px;
  }
  div  {
    margin-top: 3px;
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
`;

const logoWrapperCss = css`
  width: 100px;
  height: 100px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <footer css={footerCss}>
      <Container css={footerContainerCss}>
        <div css={footerLeftCss}>
          <h3>Fakturační adresa:</h3>
          <div>PETR INDUSTRIE MONTAGE s.r.o.</div>
          <div>Javorová 265/8, 58812</div>
          <div>Dobronín, Česká Republika</div>
          <div>IČO: 07647158</div>
          <div>DIČ: CZ07647158</div>
          <h3>Provozovna</h3>
          <div>Prostor bývalých kasáren</div>
          <div>Pístov u Jihlavy, Česká Republika</div>
        </div>
        <div css={footerRightCss}>
          <div css={logoWrapperCss}>
            <Logo fill='#b4b4b4' />
          </div>
          <div className='content'>
            <h3>Číslo účtu:</h3>
            <div>
              EUR: 288455257/0300
              <br />
              IBAN CZ02 03000000 0002 8845 5257
            </div>
            <div>
              CZK: 288455257/0300
              <br />
              IBAN CZ79 0300 0000 0002 9130 0045
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

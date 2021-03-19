/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import bg from '../images/uvodka_01.jpg';

const headerCss = css`
  min-height: 70vh;
  background-color: #3f3f3f;
  position: relative;
  font-family: 'Roboto Mono', monospace;
  background-image: url(${bg});
  backgroud-size: cover;
  backgroud-position: center;
`;

const headerWrapperCss = css`
  height: 60px;
  width: 100%;
  top: 40px;
  position: absolute;
`;

const headerContainerCss = css`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const languageSelectorCss = css`
  color: white;
  background-color: black;
  -webkit-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 30px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const pageHeagindCss = css`
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #132b6b;
  padding: 0 20px 0 0;
  position: relative;
  -webkit-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);

  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: #132b6b;
    width: 1000%;
    left: -1000%;
    height: 100%;
    -webkit-box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
    box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
  }

  h1 {
    font-size: 20px;
    color: white;
    margin: 0;
    letter-spacing: 3px;
  }
`;

const navWrapperCss = css`
  height: 60px;
  width: 100%;
  top: 100px;
  position: absolute;
`;

const navContainerCss = css`
  ul {
    list-style: none;
    margin: 30px 0 0 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    li {
      padding: 2px;
      a {
        letter-spacing: 1px;
        color: white;
        transition: color 200ms linear;
        &:hover  {
          text-decoration: none;
          color: #868686;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <header css={headerCss}>
      <div css={headerWrapperCss}>
        <Container css={headerContainerCss}>
          <div css={pageHeagindCss}>
            <h1>PETR INDUSTRIE MONTAGE s.r.o.</h1>
          </div>
          <div css={languageSelectorCss}>
            <ul>
              <li>CZ</li>
            </ul>
          </div>
        </Container>
      </div>
      <div css={navWrapperCss}>
        <Container css={navContainerCss}>
          <nav>
            <ul>
              <li>
                <a href='#about'>O nás</a>
              </li>
              <li>
                <a href='#our-work'>Naše práce</a>
              </li>
              <li>
                <a href='#partners'>Partneři</a>
              </li>
              <li>
                <a href='#contact'>Kontakt</a>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;

/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import bg from '../images/uvodka_01.jpg';
import { useTranslation } from 'react-i18next';

const headerCss = css`
  min-height: 70vh;
  background-color: #3f3f3f;
  position: relative;
  font-family: 'Roboto Mono', monospace;
  background-image: url(${bg});
  background-size: cover;
  background-position: top;
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
  -webkit-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);

  ul {
    padding: 0;
    display: flex;
    list-style: none;
    margin: 0;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 100%;
    li {
      background-color: black;
      cursor: pointer;
      padding: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
    .active {
      color: rgba(255, 255, 255, 1);
    }
  }
  @media screen and (max-width: 481px) {
    ul  {
      li {
        height: 100%;
      }
      .active {
        display: block;
      }
    }
    .opend {
      li {
        display: block;
      }
    }
    .closed {
      li {
        display: none;
      }
      .active {
        display: block;
      }
    }
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
  @media screen and (max-width: 481px) {
    width: 65%;
    padding-right: 20px;
    h1  {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 375px) {
    h1  {
      font-size: 15px;
    }
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
    margin: 30px 0 0 20px;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    li {
      padding: 2px 0;
      a {
        letter-spacing: 2px;
        color: white;
        transition: color 200ms linear;
        &:hover  {
          text-decoration: none;
          color: #868686;
        }
      }
    }
  }
  @media screen and (max-width: 481px) {
    ul {
      li {
        padding: 3px 0;
      }
    }
  }
`;

const Header = () => {
  const [language, setLanguage] = useState(false);
  const { i18n, t } = useTranslation();

  const activeLanguage = i18n.language;

  console.log(activeLanguage);

  return (
    <header css={headerCss}>
      <div css={headerWrapperCss}>
        <Container css={headerContainerCss}>
          <div css={pageHeagindCss}>
            <h1>PETR INDUSTRIE MONTAGE s.r.o.</h1>
          </div>
          <div css={languageSelectorCss}>
            <ul className={language ? 'opend' : 'closed'} onClick={() => setLanguage(!language)}>
              <li onClick={() => i18n.changeLanguage('cs')} className={activeLanguage === 'cs' ? 'active' : 'closed'}>
                CZ
              </li>
              <li onClick={() => i18n.changeLanguage('en')} className={activeLanguage === 'en' ? 'active' : 'closed'}>
                EN
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div css={navWrapperCss}>
        <Container css={navContainerCss}>
          <nav>
            <ul>
              <li>
                <a href='/#about'>{t('Menu1')}</a>
              </li>
              <li>
                <a href='/#our-work'>{t('Menu2')}</a>
              </li>
              <li>
                <a href='/#partners'>{t('Menu3')}</a>
              </li>
              <li>
                <a href='/#contact'>{t('Menu4')}</a>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;

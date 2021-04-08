/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import AppSlider from './AppSlider';
import PageHeading from './PageHeading';
import { useTranslation } from 'react-i18next';

import parse from 'html-react-parser';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import KS1 from '../images/KS2018/foto01.jpg';
import KS2 from '../images/KS2018/foto02.jpg';
import KS3 from '../images/KS2018/foto03.jpg';
import DC1 from '../images/DC/foto01.jpg';
import DC2 from '../images/DC/foto02.jpg';
import DC3 from '../images/DC/foto03.jpg';
import DC4 from '../images/DC/foto04.jpg';
import DC5 from '../images/DC/foto05.jpg';
import KSLux2 from '../images/KSLux/02.jpg';
import KSLux3 from '../images/KSLux/03.jpg';
import KSLux4 from '../images/KSLux/04.jpg';
import KSLux5 from '../images/KSLux/05.jpg';
import KSLux9 from '../images/KSLux/09.jpg';
import KSLux11 from '../images/KSLux/11.jpg';
import KSLux12 from '../images/KSLux/12.jpg';
import WIL1 from '../images/Wilburgstetten/01.jpg';
import WIL2 from '../images/Wilburgstetten/02.jpg';
import WIL3 from '../images/Wilburgstetten/03.jpg';
import WIL4 from '../images/Wilburgstetten/04.jpg';
import WIL5 from '../images/Wilburgstetten/05.jpg';
import WIL6 from '../images/Wilburgstetten/06.jpg';
import WIL7 from '../images/Wilburgstetten/07.jpg';
import WIL8 from '../images/Wilburgstetten/08.jpg';
import WIL9 from '../images/Wilburgstetten/09.jpg';
import WIL10 from '../images/Wilburgstetten/10.jpg';
import WIL11 from '../images/Wilburgstetten/11.jpg';
import WIL12 from '../images/Wilburgstetten/12.jpg';
import WIL13 from '../images/Wilburgstetten/13.jpg';
import KSCR1 from '../images/KSCR/01.jpg';
import KSCR2 from '../images/KSCR/02.jpg';
import KSCR3 from '../images/KSCR/03.jpg';

const worksContainerCss = css`
  position: relative;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 60px;
    color: #4f4f4f;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 769px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 481px) {
    h1 {
      font-size: 40px;
      padding-bottom: 30px;
    }
  }
`;

const worksContentCss = css`
  margin: 40px 0;
  text-align: left;
  color: #505050;
  letter-spacing: 1px;
  ul {
    padding-left: 15px;
  }
  @media screen and (max-width: 481px) {
    margin: 20px 0;
  }
`;

const backHomeButtonCss = css`
  margin: 0;
  padding: 20px 30px;
  z-index: 1000;
  color: white;
  position: absolute;
  left: 15px;
  top: 0;
  background-color: #a2a2a2;
  border: none;
  -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
  transition: all 200ms linear;
  letter-spacing: 1px;
  font-weight: bold;
  &:hover  {
    background-color: #888888;
    scale: 1.1;
  }
`;

const topButton = css`
  top: -80px;
`;

const worksButtonCss = css`
  padding-bottom: 120px;
  display: flex;
  justify-content: flex-end;
  button {
    letter-spacing: 1px;
    font-weight: bold;
    margin: 20px 0;
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

  @media screen and (max-width: 481px) {
    padding-bottom: 60px;
  }
`;
const appSliderCss = css`
  padding-bottom: 60px;
  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 481px) {
    padding-bottom: 40px;
  }
`;

const Works = ({ isComponent }) => {
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isComponent) {
      const workSection = document.getElementById('our-work').getBoundingClientRect();
      window.scrollTo({ top: workSection.top, behavior: 'smooth' });
    }
  }, [isComponent]);

  return (
    <section css={worksContainerCss}>
      <Container
        css={css`
          position: relative;
        `}
      >
        {!isComponent && (
          <button css={[backHomeButtonCss, topButton]} onClick={() => history.push('/#our-work')}>
            {t('Back')}
          </button>
        )}
        <h1
          css={
            !isComponent &&
            css`
              margin-top: 100px;
            `
          }
          id='work-heading'
        >
          {parse(t('WorksHeading'))}
        </h1>
      </Container>
      <PageHeading text='Kronospan Sandebeck r. 2018' />
      <Container id='our-work'>
        <div css={worksContentCss}>
          <ul>
            <li>{parse(t('Work1Item1'))}</li>
            <li>{parse(t('Work1Item2'))}</li>
          </ul>
        </div>
        <div css={appSliderCss}>
          <AppSlider
            items={[
              { src: KS1, alt: 'Kronospan Sandebeck r. 2018' },
              { src: KS2, alt: 'Kronospan Sandebeck r. 2018' },
              { src: KS3, alt: 'Kronospan Sandebeck r. 2018' },
              { src: KS1, alt: 'Kronospan Sandebeck r. 2018' },
              { src: KS2, alt: 'Kronospan Sandebeck r. 2018' },
              { src: KS3, alt: 'Kronospan Sandebeck r. 2018' },
            ]}
          />
        </div>
      </Container>
      <PageHeading text='Kronospan Sanem (Luxembourg) r. 2019-2020' />
      <Container>
        <div css={worksContentCss}>
          <ul>
            <li>{parse(t('Work2Item1'))}</li>
            <li>{parse(t('Work2Item2'))}</li>
            <li>{parse(t('Work2Item3'))}</li>
            <li>{parse(t('Work2Item4'))}</li>
          </ul>
        </div>
        <div css={appSliderCss}>
          <AppSlider
            items={[
              { src: KSLux2, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux3, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux4, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux5, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux9, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux11, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
              { src: KSLux12, alt: 'Kronospan Sanem (Luxembourg) r. 2019-2020' },
            ]}
          />
        </div>
      </Container>
      {!isComponent && (
        <>
          <PageHeading text='Kronospan ČR' />
          <Container>
            <div css={worksContentCss}>
              <ul>
                <li>{parse(t('Work3Item1'))}</li>
              </ul>
            </div>
            <div css={appSliderCss}>
              <AppSlider
                items={[
                  { src: KSCR1, alt: 'Kronospan ČR' },
                  { src: KSCR2, alt: 'Kronospan ČR' },
                  { src: KSCR3, alt: 'Kronospan ČR' },
                  { src: KSCR1, alt: 'Kronospan ČR' },
                  { src: KSCR2, alt: 'Kronospan ČR' },
                  { src: KSCR3, alt: 'Kronospan ČR' },
                ]}
              />
            </div>
          </Container>
          <PageHeading text='Dřevostroj Čkyně, a.s.' />
          <Container>
            <div css={worksContentCss}>
              <ul>
                <li>{parse(t('Work4Item1'))}</li>
                <li>{parse(t('Work4Item2'))}</li>
              </ul>
            </div>
            <div css={appSliderCss}>
              <AppSlider
                items={[
                  { src: DC1, alt: 'Dřevostroj Čkyně, a.s.' },
                  { src: DC2, alt: 'Dřevostroj Čkyně, a.s.' },
                  { src: DC3, alt: 'Dřevostroj Čkyně, a.s.' },
                  { src: DC4, alt: 'Dřevostroj Čkyně, a.s.' },
                  { src: DC5, alt: 'Dřevostroj Čkyně, a.s.' },
                ]}
              />
            </div>
          </Container>
          <PageHeading text='HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' />
          <Container>
            <div css={worksContentCss}>
              <ul>
                <li>{parse(t('Work5Item1'))}</li>
                <li>{parse(t('Work5Item2'))}</li>
                <li>{parse(t('Work5Item3'))}</li>
              </ul>
            </div>
            <div css={appSliderCss}>
              <AppSlider
                items={[
                  { src: WIL1, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL2, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL3, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL4, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL5, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL6, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL7, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL8, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL9, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL10, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL11, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL12, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                  { src: WIL13, alt: 'HK service industry, s.r.o. - Rettenmeier Holz, Wilburgstetten' },
                ]}
              />
            </div>
          </Container>
        </>
      )}
      {isComponent ? (
        <Container css={worksButtonCss}>
          <Container>
            <button onClick={() => history.push('/works')}>{parse(t('WorkButton'))}</button>
          </Container>
        </Container>
      ) : (
        <Container
          css={css`
            position: relative;
            padding: 100px 0;
          `}
        >
          {!isComponent && (
            <button css={backHomeButtonCss} onClick={() => history.push('/#our-work')}>
              {t('Back')}
            </button>
          )}
        </Container>
      )}
    </section>
  );
};

export default Works;

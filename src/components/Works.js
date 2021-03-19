/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';
import AppSlider from './AppSlider';
import PageHeading from './PageHeading';
import image from '../images/uvodka_01.jpg';

const worksContainerCss = css`
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 60px;
    color: #4f4f4f;
    padding-bottom: 60px;
  }
`;

const worksContentCss = css`
  margin: 40px 0;
  text-align: left;
  color: #505050;
  ul {
    padding-left: 15px;
  }
`;

const worksButtonCss = css`
  padding-bottom: 120px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 20px 0;
    padding: 20px 30px;
    color: white;
    background-color: #a2a2a2;
    border: none;
    -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
    transition: all 200ms linear;
    color: #4f4f4f;
    &:hover  {
      background-color: #888888;
      scale: 1.1;
    }
  }
`;
const appSliderCss = css`
  padding-bottom: 60px;
  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Works = () => {
  return (
    <section css={worksContainerCss}>
      <h1>Ukázka práce</h1>
      <PageHeading text='Kronospan Sandebeck r. 2018' />
      <Container>
        <div css={worksContentCss}>
          <ul>
            <li>Výroba ocelové konstrukce k technologii kotelny</li>
            <li>Výroba ocelové konstrukce k MDF lisu</li>
          </ul>
        </div>
        <div css={appSliderCss}>
          <AppSlider
            items={[
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
            ]}
          />
        </div>
      </Container>
      <PageHeading text='Kronospan Sanem (Luxembourg) r. 2019-2020' />
      <Container>
        <div css={worksContentCss}>
          <ul>
            <li>Montáž sesypek</li>
            <li>Montáž regálů</li>
            <li>Oprava Sila</li>
            <li>Výroba a montáž ocelové konstrukce</li>
          </ul>
        </div>
        <div css={appSliderCss}>
          <AppSlider
            items={[
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
              { src: image, alt: 'photo' },
            ]}
          />
        </div>
      </Container>
      <Container css={worksButtonCss}>
        <button>Další reference</button>
      </Container>
    </section>
  );
};

export default Works;

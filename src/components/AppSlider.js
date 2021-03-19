/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Slider from 'react-slick';

const imageWrapperCss = css`
  width: 200px;
  height: 350px;
  padding: 0 15px;
  outline: none;
`;

const imageCss = (src) => css`
  outline: none;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 100%;
  background-image: url(${src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Arrow = ({ left, onClick }) => {
  if (left) {
    return (
      <div
        onClick={onClick}
        css={css`
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 15px solid #bbbbbb;
          margin: 0 20px;
        `}
      ></div>
    );
  }

  return (
    <div
      onClick={onClick}
      css={css`
        margin: 0 20px;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #bbbbbb;
      `}
    ></div>
  );
};

const AppSlider = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow left={true} />,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div css={imageWrapperCss}>
          <div css={imageCss(item.src)} />
        </div>
      ))}
    </Slider>
  );
};

export default AppSlider;

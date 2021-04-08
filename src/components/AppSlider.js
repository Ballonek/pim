/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Slider from 'react-slick';

const imageWrapperCss = css`
  width: 200px;
  height: 350px;
  padding: 0 15px;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
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
          transition: all 250ms linear;
          &:hover,
          &:active {
            scale: 1.1;
            border-right: 15px solid #dddddd;
          }

          @media screen and (max-width: 481px) {
            margin: 0;
          }
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
        transition: all 250ms linear;
        &:hover,
        &:active {
          scale: 1.1;
          border-left: 15px solid #dddddd;
        }
        @media screen and (max-width: 481px) {
          margin: 0;
        }
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, idx) => (
        <div key={idx} css={imageWrapperCss}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default AppSlider;

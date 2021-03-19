/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'reactstrap';

const pageHeagindCss = css`
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #1a43b7;
  padding: 0 20px 0 0;
  position: relative;
  -webkit-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 0px 16px 3px rgba(0, 0, 0, 0.35);

  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: #1a43b7;
    width: 1000%;
    left: -1000%;
    height: 100%;
    -webkit-box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
    box-shadow: -14px 0px 16px 3px rgba(0, 0, 0, 0.35);
  }

  h2 {
    font-size: 32px;
    color: white;
    margin: 0;
    font-weight: 800;
    padding: 20px 40px 20px 0;
  }
`;

const headerContainerCss = css`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const PageHeading = ({ text }) => {
  return (
    <Container css={headerContainerCss}>
      <div css={pageHeagindCss}>
        <h2>{text}</h2>
      </div>
    </Container>
  );
};

export default PageHeading;

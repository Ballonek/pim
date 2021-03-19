/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Container } from 'reactstrap';

const partnersSectionCss = css`
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  background: rgb(180, 180, 180);
  background: linear-gradient(0deg, rgba(180, 180, 180, 1) 40%, rgba(232, 232, 232, 1) 100%);
  h1 {
    font-weight: 800;
    font-size: 60px;
    color: white;
    padding: 60px 0;
  }
`;
const partnersContainerCss = css`
  display: flex;
  justify-content: center;
`;

const partnersListCss = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 0 100px 0;

  div {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: white;
  }
`;

const Partners = () => {
  return (
    <section css={partnersSectionCss}>
      <h1>Partneři</h1>
      <Container css={partnersContainerCss}>
        <Col md={10}>
          <div css={partnersListCss}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Partners;

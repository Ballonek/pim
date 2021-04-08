/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Col, Container } from 'reactstrap';

import parse from 'html-react-parser';

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
  @media screen and (max-width: 769px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 481px) {
    h1 {
      font-size: 40px;
      padding-bottom: 20px;
    }
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
  text-align: left;
  font-weight: bold;
  letter-spacing: 1px;
  list-style: none;
  font-size: 18px;

  @media screen and (max-width: 481px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 0 60px;
    text-align: center;
  }
`;

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section css={partnersSectionCss} id='partners'>
      <h1>{parse(t('PartnersHeading'))}</h1>
      <Container css={partnersContainerCss}>
        <Col md={10}>
          <ul css={partnersListCss}>
            <div>
              <li>Xylo Machinery Cz, s.r.o.</li>
              <li>Kronospan International</li>
            </div>
            <div>
              <li>HK Service Industry, s. r. o.</li>
              <li>Dřevostroj Čkyně, a.s.</li>
            </div>
          </ul>
        </Col>
      </Container>
    </section>
  );
};

export default Partners;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';

const aboutCss = css``;

const aboutContainerCss = css`
  position: relative;
`;

const aboutTopCss = css`
  color: white;
  background-color: #173dac;
  position: relative;
  top: -120px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.35);
`;

const aboutIconWrapperCss = css`
  font-size: 100px;
  padding: 80px 0 80px 80px;
`;

const aboutTextWrapperCss = css`
  font-size: 18px;
  padding: 60px 200px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin-bottom: 20px;
    font-family: 'Cabin', sans-serif;
  }
`;

const aboutMidCss = css`
  margin-top: -40px;
  font-family: 'Cabin', sans-serif;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  padding-bottom: 120px;
  span {
    color: #868686;
  }
`;

const About = () => {
  return (
    <section css={aboutCss}>
      <Container css={aboutContainerCss}>
        <div css={aboutTopCss}>
          <div css={aboutIconWrapperCss}>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div css={aboutTextWrapperCss}>
            <div>
              Naše firma působí na trhu od roku 2018. Její kvalita vyplývá z našich předešlých dlouholetých zkušeností v oboru.
            </div>
            <div>Pravidelně působíme na území ČR, Lucemburska, Německa, Polska, Slovenska, Lotyšska, Anglii.</div>
          </div>
        </div>
        <div css={aboutMidCss}>
          Našim cílem je precizně zhotovená zakázka a spokojený zákazník.
          <br />
          Dáváme si záležet na dobře <span>odvedené práci</span>, <span>která přetrvá</span>.
        </div>
      </Container>
    </section>
  );
};

export default About;

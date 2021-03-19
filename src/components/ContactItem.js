/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const contactItemCss = css`
  max-width: 300px;
  flex: 1 1 300px;
`;

const contactItemContentCss = css`
  color: #909090;
  h4 {
    margin: 0;
    font-weight: 800;
  }
  .phone {
    margin-top: 10px;
  }
`;

const ContactItem = ({ text, email, phone }) => {
  return (
    <div css={contactItemCss}>
      <div css={contactItemContentCss}>
        <h4>{text}</h4>
        <div>{email}</div>
        {phone && <div className='phone'>{phone}</div>}
      </div>
    </div>
  );
};

export default ContactItem;

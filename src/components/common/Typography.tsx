import styled, { css } from 'styled-components';

export const paragraphStyles = css`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
`;

const Paragraph = styled.p<{ small?: boolean }>`
  ${paragraphStyles}
  color: ${({ theme }) => theme.text.paragraph};

  ${({ small }) =>
    small &&
    css`
      font-size: 1.1rem;
      line-height: 1.8rem;
      letter-spacing: -0.023rem;
    `};
`;

export default Paragraph;

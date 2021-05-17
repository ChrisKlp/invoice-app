import styled, { css } from 'styled-components';
import media from 'styles/mediaQueries';

const baseStyles = css`
  color: ${({ theme }) => theme.text.heading};
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
`;

export const Heading1 = styled.h1`
  ${baseStyles}
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: -0.0625rem;

  @media (${media.md}) {
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: -0.1rem;
  }
`;

export const Heading2 = styled.h2`
  ${baseStyles}
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: -0.0625rem;
`;

export const Heading3 = styled.h3`
  ${baseStyles}
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.08rem;
`;

export const Heading4 = styled.h4`
  ${baseStyles}
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
`;

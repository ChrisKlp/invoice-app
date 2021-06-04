import { css } from 'styled-components';
import { paragraphStyles } from 'components/common';

export const inputStyle = css`
  padding: 1.6rem 2rem 1.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.form.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.body.bg2};
  outline: none;
  transition: border 0.2s;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const labelStyle = css`
  ${paragraphStyles}
  display: block;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.invoiceText};
`;

export const inputTextStyle = css`
  ${paragraphStyles}

  display: block;
  font-family: inherit;
  font-weight: 700;
  color: ${({ theme }) => theme.text.heading};
`;

import { paragraphStyles } from 'components/common';
import styled, { css } from 'styled-components';
import { useField } from 'formik';

const Label = styled.label`
  ${paragraphStyles}

  grid-area: label;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.invoiceText};
`;

const ErrorMessage = styled.span`
  grid-area: error;
  justify-self: end;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0208333rem;
  color: ${({ theme }) => theme.form.error};
`;

const Field = styled.input<{ faded?: boolean }>`
  ${paragraphStyles}

  grid-area: input;
  padding: 1.6rem 2rem 1.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.form.border};
  border-radius: 4px;
  background: transparent;
  font-weight: 700;
  font-family: inherit;
  color: ${({ theme }) => theme.text.input};
  outline: none;
  transition: border 0.2s;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.form.borderActive};
  }
`;

const Wrapper = styled.div<{ error?: string }>`
  display: grid;
  grid-template:
    'label error'
    'input input';

  ${({ error }) =>
    error &&
    css`
      ${ErrorMessage} {
        display: block;
      }
      ${Label} {
        color: ${({ theme }) => theme.form.error};
      }
      ${Field} {
        border: 1px solid ${({ theme }) => theme.form.error};
      }
    `};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  faded?: boolean;
  className?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  error,
  faded,
  disabled,
  className,
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Wrapper error={error} className={className}>
      <Label>{label}</Label>
      <ErrorMessage>{error}</ErrorMessage>
      <Field
        type={type || 'text'}
        disabled={disabled}
        faded={faded}
        {...field}
      />
    </Wrapper>
  );
};

export default Input;

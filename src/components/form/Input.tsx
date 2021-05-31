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

  &:disabled {
    padding: 1.6rem 1rem 1.5rem;
    border: 0;
  }
`;

const Wrapper = styled.div<{
  error?: string | boolean;
  faded?: boolean;
}>`
  display: grid;
  grid-template:
    'label error'
    'input input';

  ${({ faded }) =>
    faded &&
    css`
      opacity: 0.5;

      ${Field} {
        pointer-events: none;
      }
    `};

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
  className?: string;
  name: string;
  noErrorMsg?: boolean;
  faded?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  disabled,
  faded,
  className,
  noErrorMsg,
}) => {
  const [field, meta] = useField(name);
  return (
    <Wrapper
      error={meta.touched && meta.error}
      className={className}
      faded={faded}
    >
      <Label>{label}</Label>
      {!noErrorMsg && meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
      <Field type={type || 'text'} disabled={faded || disabled} {...field} />
    </Wrapper>
  );
};

export default Input;

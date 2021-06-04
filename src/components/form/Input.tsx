import styled, { css } from 'styled-components';
import { useField } from 'formik';
import { inputStyle, inputTextStyle, labelStyle } from './Input.styled';

const Label = styled.label`
  ${labelStyle}
  grid-area: label;
`;

const ErrorMessage = styled.span`
  grid-area: error;
  justify-self: end;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0208333rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Field = styled.input<{ faded?: boolean }>`
  ${inputStyle}
  ${inputTextStyle}

  grid-area: input;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
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
        color: ${({ theme }) => theme.colors.secondary};
      }
      ${Field} {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    `};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  name: string;
  noErrorMsg?: boolean;
  faded?: boolean;
  hideLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  disabled,
  faded,
  className,
  noErrorMsg,
  hideLabel,
}) => {
  const [field, meta] = useField(name);
  return (
    <Wrapper
      error={meta.touched && meta.error}
      className={className}
      faded={faded}
    >
      {!hideLabel && <Label>{label}</Label>}
      {!noErrorMsg && meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
      <Field type={type || 'text'} disabled={faded || disabled} {...field} />
    </Wrapper>
  );
};

export default Input;

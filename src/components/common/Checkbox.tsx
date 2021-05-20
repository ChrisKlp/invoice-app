import styled from 'styled-components';
import iconCheck from 'assets/icon-check.svg';
import { Paragraph } from 'components/common';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  cursor: pointer;

  input {
    display: none;
  }
`;

const Label = styled(Paragraph)`
  font-weight: 700;
  color: ${({ theme }) => theme.text.heading};
`;

const Input = styled.span`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.checkbox.bg};
  border-radius: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;

  img {
    opacity: 0;
  }

  ${Wrapper}:hover & {
    border: 1px solid ${({ theme }) => theme.checkbox.active};
  }

  ${Wrapper} input:checked + & {
    background-color: ${({ theme }) => theme.checkbox.active};

    img {
      opacity: 1;
    }
  }
`;

type CheckboxProps = {
  checked: boolean;
  name: string;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, name, onChange }) => {
  return (
    <Wrapper>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Input>
        <img src={iconCheck} alt="check icon" />
      </Input>
      <Label>{name[0].toUpperCase() + name.slice(1)}</Label>
    </Wrapper>
  );
};

export default Checkbox;

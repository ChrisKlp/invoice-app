import styled, { keyframes } from 'styled-components';
import iconArrowDown from 'assets/icon-arrow-down.svg';
import iconCheck from 'assets/icon-check.svg';
import { useRef, useState } from 'react';
import media from 'styles/mediaQueries';
import useOnClickOutside from 'hooks/useOnClickOutside';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 2.3rem;
  justify-items: center;
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  border: 0;
  background: none;
`;

const Label = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: ${({ theme }) => theme.text.heading};

  span {
    display: none;
  }

  @media (${media.md}) {
    span {
      display: initial;
    }
  }
`;

const Options = styled.div`
  position: absolute;
  top: 3.8rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 2.4rem;
  display: grid;
  gap: 1.6rem;
  min-width: 19.2rem;
  background: ${({ theme }) => theme.dropdown.bg};
  box-shadow: 0 1rem 2rem ${({ theme }) => theme.dropdown.shadow};
  border-radius: 0.8rem;
`;

const OptionWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  cursor: pointer;

  input {
    display: none;
  }
`;

const Checkbox = styled.span`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.checkbox.bg};
  border-radius: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;

  img {
    opacity: 0;
  }

  ${OptionWrapper}:hover & {
    border: 1px solid ${({ theme }) => theme.checkbox.active};
  }

  ${OptionWrapper} input:checked + & {
    background-color: ${({ theme }) => theme.checkbox.active};

    img {
      opacity: 1;
    }
  }
`;

export const Option: React.FC = ({ children }) => {
  return (
    <OptionWrapper>
      <input type="checkbox" />
      <Checkbox>
        <img src={iconCheck} alt="check icon" />
      </Checkbox>
      <Label>{children}</Label>
    </OptionWrapper>
  );
};

type DropdownProps = {};

export const Dropdown: React.FC<DropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <Wrapper ref={dropdownRef}>
      <Header onClick={() => setIsOpen((prev) => !prev)}>
        <Label>
          Filter <span>by status</span>
        </Label>
        <img src={iconArrowDown} alt="arrow down icon" />
      </Header>
      {isOpen && (
        <Options>
          <Option>Draft</Option>
          <Option>Pending</Option>
          <Option>Paid</Option>
        </Options>
      )}
    </Wrapper>
  );
};

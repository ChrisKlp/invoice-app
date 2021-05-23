import { PayloadAction } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { Checkbox, Paragraph } from 'components/common';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import media from 'styles/mediaQueries';
import iconArrowDown from 'assets/icon-arrow-down.svg';

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

const Label = styled(Paragraph)`
  font-weight: 700;
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
type DropdownProps = {
  options: [status: string, value: boolean][];
  onChange: (name: string) => PayloadAction<string>;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <Wrapper ref={dropdownRef}>
      <Header onClick={handleClick}>
        <Label>
          Filter <span>by status</span>
        </Label>
        <img src={iconArrowDown} alt="arrow down icon" />
      </Header>
      {isOpen && (
        <Options>
          {options.map(([name, checked]: [name: string, checked: boolean]) => (
            <Checkbox
              key={name}
              checked={checked}
              name={name}
              onChange={() => onChange(name)}
            />
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Dropdown;

import iconArrowDown from 'assets/icon-arrow-down.svg';
import { useFormikContext } from 'formik';
import useOnClickOutside from 'hooks/useOnClickOutside';
import useOpen from 'hooks/useOpen';
import { useRef, useState } from 'react';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import { inputStyle, inputTextStyle, labelStyle } from './Input.styled';

const Label = styled.span`
  ${labelStyle}
`;

const Wrapper = styled.div``;

const Header = styled.button`
  ${inputStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  cursor: pointer;
`;

const Text = styled.span`
  ${inputTextStyle}
`;

const Option = styled(Text)`
  padding: 1.6rem 2rem 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.form.border};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.form.active};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Options = styled.div`
  position: absolute;
  top: calc(100% + 0.8rem);
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  width: 100%;
  background: ${({ theme }) => theme.dropdown.bg};
  box-shadow: 0 1rem 2rem ${({ theme }) => theme.dropdown.shadow};
  border-radius: 0.8rem;
`;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: {
    label: string;
    value: number;
  }[];
}

const Select: React.FC<SelectProps> = ({ label, options, name }) => {
  const { setFieldValue, values } = useFormikContext<TInvoice>();
  const initialLabel = options.find(
    (option) => option.value === values[name]
  )?.label;
  const [optionLabel, setOptionLabel] = useState(initialLabel);
  const { isOpen, handleClose, toggle } = useOpen();
  const selectRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(selectRef, handleClose);

  const handleClick = (index) => {
    setOptionLabel(options[index].label);
    setFieldValue(name, options[index].value);
    handleClose();
  };

  return (
    <Wrapper ref={selectRef}>
      <Label>{label}</Label>
      <SelectWrapper>
        <Header type="button" onClick={toggle}>
          <Text>{optionLabel}</Text>
          <img src={iconArrowDown} alt="Icon arrow Down" />
        </Header>
        {isOpen && (
          <Options>
            {options.map((item, index) => (
              <Option key={item.value} onClick={() => handleClick(index)}>
                {item.label}
              </Option>
            ))}
          </Options>
        )}
      </SelectWrapper>
    </Wrapper>
  );
};

export default Select;

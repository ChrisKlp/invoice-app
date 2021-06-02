import iconCalendar from 'assets/icon-calendar.svg';
import { useFormikContext } from 'formik';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import { inputStyle, inputTextStyle, labelStyle } from './Input.styled';

const Wrapper = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    display: block;
  }

  .react-datepicker {
    font-family: 'Spartan', sans-serif;
    background: ${({ theme }) => theme.invoice.bg};
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.invoice.shadow};
    border-radius: 0.8rem;
    border: none;

    .react-datepicker__navigation {
      top: 2.3rem;

      &:focus {
        outline: none;
      }
    }

    .react-datepicker__navigation-icon::before {
      border-color: ${({ theme }) => theme.form.active};
    }

    .react-datepicker__navigation--previous {
      left: 5%;
    }

    .react-datepicker__navigation--next {
      right: 5%;
    }

    .react-datepicker__triangle,
    .react-datepicker__day-names {
      display: none;
    }

    .react-datepicker__header {
      padding: 0;
      border: none;
      padding-top: 3.2rem;
      background-color: transparent;

      .react-datepicker__current-month {
        color: ${({ theme }) => theme.text.heading};
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: -0.025rem;
        font-weight: 700;
      }
    }

    .react-datepicker__month {
      margin: 0;
      padding: 3.2rem 1.8rem;
    }

    .react-datepicker__week {
      .react-datepicker__day {
        margin: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin: 0.8rem;
        color: ${({ theme }) => theme.text.heading};
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: -0.025rem;
        font-weight: 700;

        &.react-datepicker__day--outside-month {
          opacity: 0.1;
        }

        &.react-datepicker__day--keyboard-selected,
        &.react-datepicker__day--selected {
          border: none;
          color: ${({ theme }) => theme.form.active};
          background-color: transparent;
        }

        &:focus {
          outline: none;
        }

        &:hover {
          border-radius: 0;
          background-color: transparent;
          color: ${({ theme }) => theme.form.hover};
        }
      }
    }
  }
`;

const Button = styled.button`
  ${inputStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled.span`
  ${inputTextStyle}
`;

const Label = styled.span`
  ${labelStyle}
`;

interface DataPickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const DataPickerComp: React.FC<DataPickerProps> = ({ label, name }) => {
  const { setFieldValue, values } = useFormikContext<TInvoice>();
  const [date, setDate] = useState(new Date(values[name]));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomInput = forwardRef((props: any, ref: any) => (
    <Button type="button" onClick={props.onClick} ref={ref}>
      <Text>{props.value}</Text>
      <img src={iconCalendar} alt="Calendar icon" />
    </Button>
  ));

  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setFieldValue(name, selectedDate);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <DatePicker
        name={name}
        selected={date}
        onChange={(selectedDate: Date) => handleChange(selectedDate)}
        dateFormat="dd MMM yyyy"
        customInput={<CustomInput />}
        closeOnScroll={1}
      />
    </Wrapper>
  );
};

export default DataPickerComp;

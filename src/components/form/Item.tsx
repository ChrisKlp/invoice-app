import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import Input from './Input';

const Wrapper = styled.fieldset`
  display: grid;
  gap: 2.4rem 1rem;
  margin-bottom: 4.8rem;
  grid-template: 1fr 1fr / 6.4rem 3.5fr 1.5fr auto;

  > *:first-child {
    grid-column: span 4;
  }

  @media (${media.sm}) {
    gap: 2.4rem;
  }
`;

const Delete = styled.button`
  place-self: end end;
  padding: 1rem;
  cursor: pointer;
  height: 4.8rem;

  svg:hover {
    fill: ${({ theme }) => theme.form.error};
  }
`;

type ItemProps = {
  index: number;
  onRemoveClick: (index: number) => void;
};

const Item: React.FC<ItemProps> = ({ index, onRemoveClick }) => {
  const { values, setFieldValue } = useFormikContext<TInvoice>();

  useEffect(() => {
    const total = parseFloat(
      (values.items[index].quantity * values.items[index].price).toFixed(2)
    );
    setFieldValue(`items[${index}].total`, total || 0);
  }, [index, setFieldValue, values.items]);

  return (
    <Wrapper>
      <Input label="Item Name" name={`items[${index}].name`} />
      <Input
        label="Qty."
        type="number"
        name={`items[${index}].quantity`}
        noErrorMsg
      />
      <Input
        label="Price"
        type="number"
        step="5"
        name={`items[${index}].price`}
        noErrorMsg
      />
      <Input
        label="Total"
        type="number"
        name={`items[${index}].total`}
        disabled
        noErrorMsg
      />
      <Delete
        type="button"
        aria-label="Delete ivoice item"
        onClick={() => onRemoveClick(index)}
      >
        <svg
          width="13"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#888EB0"
        >
          <path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" />
        </svg>
      </Delete>
    </Wrapper>
  );
};

export default Item;

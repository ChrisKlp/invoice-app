import { paragraphStyles } from 'components/common';
import { useFormikContext } from 'formik';
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

const TotalWrapper = styled.div`
  display: grid;
`;

const Label = styled.label`
  ${paragraphStyles}

  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.invoiceText};
`;

const Value = styled.span`
  ${paragraphStyles}

  padding: 1.6rem 0 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.paragraph};
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
  const { values }: { values: TInvoice } = useFormikContext();

  return (
    <Wrapper>
      <Input label="Item Name" name={`items[${index}].name`} />
      <Input label="Qty." type="number" name={`items[${index}].quantity`} />
      <Input
        label="Price"
        type="number"
        step="5"
        name={`items[${index}].price`}
      />
      <TotalWrapper>
        <Label>Total</Label>
        <Value>
          {(values.items[index].quantity * values.items[index].price).toFixed(
            2
          )}
        </Value>
      </TotalWrapper>
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

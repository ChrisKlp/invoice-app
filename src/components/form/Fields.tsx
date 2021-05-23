import { paragraphStyles } from 'components/common';
import styled from 'styled-components';
import Input from './Input';

const Fieldset = styled.fieldset`
  display: grid;
  gap: 2.4rem;
`;

const Legend = styled.legend`
  ${paragraphStyles}

  font-weight: 700;
  color: ${({ theme }) => theme.text.legend};
`;

const BillFrom = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
  gap: 2.4rem;

  > div:nth-child(1),
  > div:nth-child(4) {
    grid-column: span 2;
  }
`;

const BillTo = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) / 1fr 1fr;
  gap: 2.4rem;

  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(6) {
    grid-column: span 2;
  }
`;

type FieldsProps = {};

const Fields: React.FC<FieldsProps> = () => {
  return (
    <>
      <Fieldset>
        <Legend>Bill From</Legend>
        <BillFrom>
          <Input label="Street Address" name="senderAddress.street" />
          <Input label="City" name="senderAddress.city" />
          <Input label="Post Code" name="senderAddress.postCode" />
          <Input label="Country" name="senderAddress.country" />
        </BillFrom>
      </Fieldset>
      <Fieldset>
        <Legend>Bill To</Legend>
        <BillTo>
          <Input label="Client's Name" name="clientName" />
          <Input label="Client's Email" name="clientEmail" />
          <Input label="Street Address" name="clientAddress.street" />
          <Input label="City" name="clientAddress.city" />
          <Input label="Post Code" name="clientAddress.postCode" />
          <Input label="Country" name="clientAddress.country" />
        </BillTo>
      </Fieldset>
      <Fieldset>
        <Input label="Invoice Date" type="date" name="createdAt" />
        <Input label="Payment Terms" name="paymentTerms" />
        <Input label="Project Description" name="description" />
      </Fieldset>
    </>
  );
};

export default Fields;

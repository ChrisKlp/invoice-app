import { paragraphStyles } from 'components/common';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import DataPickerComp from './DataPickerComp';
import Input from './Input';
import Select from './Select';

const Wrapper = styled.div`
  display: grid;
  gap: 4rem;

  @media (${media.md}) {
    gap: 4.8rem;
  }
`;

const Fieldset = styled.fieldset`
  display: grid;
  gap: 2.4rem;
`;

const Legend = styled.legend`
  ${paragraphStyles}

  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const BillFrom = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  gap: 2.4rem;

  > div:nth-child(1),
  > div:nth-child(4) {
    grid-column: span 2;
  }

  @media (${media.md}) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);

    > div:nth-child(1) {
      grid-column: span 3;
    }
    > div:nth-child(4) {
      grid-column: span 1;
    }
  }
`;

const BillTo = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(2, 1fr);
  gap: 2.4rem;

  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(6) {
    grid-column: span 2;
  }

  @media (${media.md}) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);

    > div:nth-child(1),
    > div:nth-child(2),
    > div:nth-child(3) {
      grid-column: span 3;
    }

    > div:nth-child(6) {
      grid-column: span 1;
    }
  }
`;

const OtherFields = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (${media.md}) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);

    > div:nth-child(3) {
      grid-column: span 2;
    }
  }
`;

const options = [
  {
    label: 'Net 1 Day',
    value: 1,
  },
  {
    label: 'Net 7 Days',
    value: 7,
  },
  {
    label: 'Net 14 Days',
    value: 14,
  },
  {
    label: 'Net 30 Days',
    value: 30,
  },
];

const Fields: React.FC = () => {
  return (
    <Wrapper>
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
        <OtherFields>
          <DataPickerComp label="Invoice Date" name="createdAt" />
          <Select label="Payment Terms" options={options} name="paymentTerms" />
          <Input label="Project Description" name="description" />
        </OtherFields>
      </Fieldset>
    </Wrapper>
  );
};

export default Fields;

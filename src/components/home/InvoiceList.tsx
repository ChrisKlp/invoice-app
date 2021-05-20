import { TInvoice } from 'store/types';
import styled from 'styled-components';
import formatMoney from 'utils/formatMoney';
import InvoiceItem from './InvoiceItem';

const Wrapper = styled.ul`
  margin-bottom: 10.5rem;
  display: grid;
  gap: 1.6rem;
`;

type InvoiceListProps = {
  data: TInvoice[];
};

const InvoiceList: React.FC<InvoiceListProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map(({ id, clientName, paymentDue, total, status }) => (
        <li key={id}>
          <InvoiceItem
            id={id}
            clientName={clientName}
            paymentDue={paymentDue}
            total={formatMoney(total)}
            status={status}
          />
        </li>
      ))}
    </Wrapper>
  );
};

export default InvoiceList;

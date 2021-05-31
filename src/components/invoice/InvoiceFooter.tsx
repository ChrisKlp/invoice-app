import { Container } from 'components/common';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import InvoiceOptions from './InvoiceOptions';

const Wrapper = styled.div`
  margin-top: 5.6rem;
  padding: 2.2rem 0;
  background: ${({ theme }) => theme.invoice.bg};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.invoice.shadow};

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8rem;
  }
`;

type InvoiceFooterProps = {
  invoice: TInvoice;
  openForm: () => void;
  openModal: () => void;
};

const InvoiceFooter: React.FC<InvoiceFooterProps> = ({
  invoice,
  openForm,
  openModal,
}) => {
  return (
    <Wrapper>
      <Container>
        <InvoiceOptions
          invoice={invoice}
          openForm={openForm}
          openModal={openModal}
        />
      </Container>
    </Wrapper>
  );
};

export default InvoiceFooter;

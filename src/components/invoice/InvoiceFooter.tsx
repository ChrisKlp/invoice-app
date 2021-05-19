import { Container } from 'components/common';
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
  data: any;
};

const InvoiceFooter: React.FC<InvoiceFooterProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <InvoiceOptions />
      </Container>
    </Wrapper>
  );
};

export default InvoiceFooter;

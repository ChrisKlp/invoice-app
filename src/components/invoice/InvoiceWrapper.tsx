import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2.4rem;
  background: ${({ theme }) => theme.invoice.bg};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.invoice.shadow};
  border-radius: 0.8rem;
`;

const InvoiceWrapper: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InvoiceWrapper;

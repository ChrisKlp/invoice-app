import { BackLink, Paragraph, Status } from 'components/common';
import { Link } from 'react-router-dom';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import InvoiceOptions from './InvoiceOptions';

const Wrapper = styled.header`
  margin: 3.2rem 0 1.6rem;

  @media (${media.md}) {
    margin: 4.8rem 0 2.4rem;
  }

  @media (${media.lg}) {
    margin: 6.4rem 0 2.4rem;
  }
`;

const Header = styled.div`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  background: ${({ theme }) => theme.body.bg2};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.8rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  @media (${media.md}) {
    gap: 1.6rem;
    flex-grow: 0;
  }
`;

const Buttons = styled.div`
  display: none;

  @media (${media.md}) {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`;

type InvoiceHeaderProps = {
  invoice: TInvoice;
  openForm: () => void;
  openModal: () => void;
};

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({
  invoice,
  openForm,
  openModal,
}) => {
  return (
    <Wrapper>
      <Link to="/">
        <BackLink>Go back</BackLink>
      </Link>
      <Header>
        <StatusWrapper>
          <Paragraph>Status</Paragraph>
          <Status status={invoice.status} />
        </StatusWrapper>
        <Buttons>
          <InvoiceOptions
            invoice={invoice}
            openForm={openForm}
            openModal={openModal}
          />
        </Buttons>
      </Header>
    </Wrapper>
  );
};

export default InvoiceHeader;

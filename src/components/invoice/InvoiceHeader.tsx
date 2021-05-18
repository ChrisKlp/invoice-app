import { BackLink, Button, Paragraph, Status } from 'components/common';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.header`
  margin: 3.2rem 0 1.6rem;
`;

const Header = styled.div`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  background: ${({ theme }) => theme.invoice.bg};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.invoice.shadow};
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

const Navigation = styled.div`
  display: none;

  @media (${media.md}) {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`;

type InvoiceHeaderProps = {
  data: any;
};

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ data }) => {
  return (
    <Wrapper>
      <Link to="/">
        <BackLink>Go back</BackLink>
      </Link>
      <Header>
        <StatusWrapper>
          <Paragraph>Status</Paragraph>
          <Status status={data.status} />
        </StatusWrapper>
        <Navigation>
          <Button secondary>Edit</Button>
          <Button deleteType>Delete</Button>
          <Button>Mark as Paid</Button>
        </Navigation>
      </Header>
    </Wrapper>
  );
};

export default InvoiceHeader;
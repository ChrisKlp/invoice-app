import { Heading3, Heading4, Paragraph, Status } from 'components/common';
import styled from 'styled-components';
import iconArrowRight from 'assets/icon-arrow-right.svg';
import moment from 'moment';
import media from 'styles/mediaQueries';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  padding: 2.4rem;
  height: 13.4rem;
  display: grid;
  grid-template:
    'id client' 1fr
    'date status' 2.4rem
    'total status';
  background: ${({ theme }) => theme.body.bg2};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.8rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryAlt};
  }

  @media (${media.md}) {
    padding: 0 2.4rem;
    height: 7.2rem;
    grid-template-areas: 'id date client total status icon';
    grid-template-columns: 8.7rem 14rem auto auto 14.4rem 2.4rem;
    grid-template-rows: 1fr;
    align-items: center;
  }

  @media (${media.lg}) {
    grid-template-columns: 10.3rem 15.1rem auto auto 14.4rem 2.4rem;
  }
`;

const Id = styled(Heading4)`
  grid-area: id;

  span {
    color: ${({ theme }) => theme.colors.hash};
  }
`;

const ClientName = styled(Paragraph)`
  grid-area: client;
  justify-self: end;

  @media (${media.md}) {
    justify-self: unset;
  }
`;

const PaymentDue = styled(Paragraph)`
  color: ${({ theme }) => theme.text.invoiceText};
  grid-area: date;
`;

const Total = styled(Heading3)`
  grid-area: total;

  @media (${media.md}) {
    justify-self: end;
  }
`;

const StyledStatus = styled(Status)`
  grid-area: status;
  place-self: center end;
`;

const Icon = styled.img`
  grid-area: icon;
  display: none;

  @media (${media.md}) {
    display: block;
    justify-self: end;
  }
`;

type InvoiceItemProps = {
  id: string;
  clientName: string;
  paymentDue: Date | string;
  total: string;
  status: string;
};

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  id,
  clientName,
  paymentDue,
  total,
  status,
}) => {
  return (
    <Wrapper to={`/invoice/${id.toLowerCase()}`}>
      <Id as="p">
        <span>#</span>
        {id}
      </Id>
      <ClientName>{clientName}</ClientName>
      <PaymentDue>
        {`Due `}
        {moment(paymentDue).format('D MMM YYYY')}
      </PaymentDue>
      <Total as="p">{total}</Total>
      <StyledStatus status={status} />
      <Icon src={iconArrowRight} alt="icon right" />
    </Wrapper>
  );
};

export default InvoiceItem;

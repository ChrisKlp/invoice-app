import { Heading4, Paragraph } from 'components/common';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import formatMoney from 'utils/formatMoney';
import InvoiceTable from './InvoiceTable';

const Wrapper = styled.div`
  padding: 2.4rem;
  background: ${({ theme }) => theme.invoice.bg};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.invoice.shadow};
  border-radius: 0.8rem;
`;

const Text = styled(Paragraph)`
  color: ${({ theme }) => theme.text.invoiceText};
`;

const Label = styled(Text)`
  margin-bottom: 1.2rem;
`;

const BigText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.031rem;
  color: ${({ theme }) => theme.text.heading};
`;

const Id = styled(Heading4)`
  margin-bottom: 0.4rem;

  span {
    color: ${({ theme }) => theme.text.invoiceText};
  }
`;

const InformationWrapper = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template:
    'title title'
    'sender sender'
    'createdAt client'
    'paymentDue client'
    'sentTo sentTo' / 1fr 1fr;
  gap: 3rem 0;

  @media (${media.md}) {
    margin-bottom: 4.8rem;
    grid-template-areas:
      'title title sender'
      'createdAt client sentTo'
      'paymentDue client sentTo';
    grid-template-columns: 0.9fr 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 0;
  }
`;

const Title = styled.div`
  grid-area: title;
`;

const SenderAddress = styled.div`
  grid-area: sender;

  @media (${media.md}) {
    margin-bottom: 2.1rem;
    justify-self: end;
    text-align: right;
  }
`;

const CreatedAt = styled.div`
  grid-area: createdAt;
`;

const Client = styled.div`
  grid-area: client;

  ${BigText} {
    margin-bottom: 0.8rem;
  }
`;

const PaymentDue = styled.div`
  grid-area: paymentDue;
`;

const SentTo = styled.div`
  grid-area: sentTo;
`;

type InvoiceBodyProps = {
  data: any;
};

const InvoiceBody: React.FC<InvoiceBodyProps> = ({ data }) => {
  const mailTo = (e: React.MouseEvent) => {
    window.location.href = `mailto:${data.clientEmail}`;
    e.preventDefault();
  };

  return (
    <Wrapper>
      <InformationWrapper>
        <Title>
          <Id as="h1">
            <span>#</span>
            {data.id}
          </Id>
          <Text>{data.description}</Text>
        </Title>
        <SenderAddress>
          <Text small>{data.senderAddress.street}</Text>
          <Text small>{data.senderAddress.city}</Text>
          <Text small>{data.senderAddress.postCode}</Text>
          <Text small>{data.senderAddress.country}</Text>
        </SenderAddress>
        <CreatedAt>
          <Label>Invoice Date</Label>
          <BigText>
            <Moment format="D MMM YYYY" date={data.createdAt} />
          </BigText>
        </CreatedAt>
        <Client>
          <Label>Bill To</Label>
          <BigText>{data.clientName}</BigText>
          <Text small>{data.clientAddress.street}</Text>
          <Text small>{data.clientAddress.city}</Text>
          <Text small>{data.clientAddress.postCode}</Text>
          <Text small>{data.clientAddress.country}</Text>
        </Client>
        <PaymentDue>
          <Label>Payment Due</Label>
          <BigText>
            <Moment format="D MMM YYYY" date={data.paymentDue} />
          </BigText>
        </PaymentDue>
        <SentTo>
          <Label>Sent to</Label>
          <BigText as={Link} to="#" onClick={mailTo}>
            {data.clientEmail}
          </BigText>
        </SentTo>
      </InformationWrapper>
      <InvoiceTable items={data.items} total={formatMoney(data.total)} />
    </Wrapper>
  );
};

export default InvoiceBody;

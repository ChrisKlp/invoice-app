import { Heading4, Paragraph } from 'components/common';
import React, { useCallback } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import formatMoney from 'utils/formatMoney';
import InvoiceTable from './InvoiceTable';

const Wrapper = styled.div`
  padding: 2.4rem;
  background: ${({ theme }) => theme.body.bg2};
  box-shadow: 0 1rem 1rem -1rem ${({ theme }) => theme.colors.shadow};
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
    color: ${({ theme }) => theme.colors.hash};
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
    grid-template-rows: 9.1rem auto auto;
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

  @media (${media.md}) {
    margin-bottom: 3.2rem;
  }
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
  invoice: TInvoice;
};

const InvoiceBody: React.FC<InvoiceBodyProps> = ({ invoice }) => {
  const mailTo = useCallback(
    (e: React.MouseEvent) => {
      window.location.href = `mailto:${invoice.clientEmail}`;
      e.preventDefault();
    },
    [invoice.clientEmail]
  );

  return (
    <Wrapper>
      <InformationWrapper>
        <Title>
          <Id as="h1">
            <span>#</span>
            {invoice.id}
          </Id>
          <Text>{invoice.description}</Text>
        </Title>
        <SenderAddress>
          <Text small>{invoice.senderAddress.street}</Text>
          <Text small>{invoice.senderAddress.city}</Text>
          <Text small>{invoice.senderAddress.postCode}</Text>
          <Text small>{invoice.senderAddress.country}</Text>
        </SenderAddress>
        <CreatedAt>
          <Label>Invoice Date</Label>
          <BigText>{moment(invoice.createdAt).format('D MMM YYYY')}</BigText>
        </CreatedAt>
        <Client>
          <Label>Bill To</Label>
          <BigText>{invoice.clientName}</BigText>
          <Text small>{invoice.clientAddress.street}</Text>
          <Text small>{invoice.clientAddress.city}</Text>
          <Text small>{invoice.clientAddress.postCode}</Text>
          <Text small>{invoice.clientAddress.country}</Text>
        </Client>
        <PaymentDue>
          <Label>Payment Due</Label>
          <BigText>{moment(invoice.paymentDue).format('D MMM YYYY')}</BigText>
        </PaymentDue>
        <SentTo>
          <Label>Sent to</Label>
          <BigText as={Link} to="#" onClick={mailTo}>
            {invoice.clientEmail}
          </BigText>
        </SentTo>
      </InformationWrapper>
      <InvoiceTable items={invoice.items} total={formatMoney(invoice.total)} />
    </Wrapper>
  );
};

export default InvoiceBody;

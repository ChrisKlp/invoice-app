import { Heading4, Paragraph } from 'components/common';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

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

const Wrapper = styled.div`
  display: grid;
  grid-template:
    'title title'
    'sender sender'
    'createdAt client'
    'paymentDue client'
    'sentTo sentTo' / 1fr 1fr;
  gap: 3rem 0;

  @media (${media.md}) {
    grid-template-areas:
      'title title sender'
      'createdAt client sentTo'
      'paymentDue client sentTo';
    grid-template-columns: 0.9fr 1fr 1fr;
  }
`;

const Title = styled.div`
  grid-area: title;
`;

const SenderAddress = styled.div`
  grid-area: sender;

  @media (${media.md}) {
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
  return (
    <Wrapper>
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
        <BigText
          as={Link}
          to="#"
          onClick={(e: React.MouseEvent) => {
            window.location.href = `mailto:${data.clientEmail}`;
            e.preventDefault();
          }}
        >
          {data.clientEmail}
        </BigText>
      </SentTo>
    </Wrapper>
  );
};

export default InvoiceBody;

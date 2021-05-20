import { Heading4 as Text, Paragraph } from 'components/common';
import useMedia from 'hooks/useMedia';
import { TInvoiceItem } from 'store/types';
import styled, { css } from 'styled-components';
import media from 'styles/mediaQueries';
import formatMoney from 'utils/formatMoney';

const tabletGridTemplate = css`
  grid-template: 1fr / 2.5fr 0.3fr 1.1fr 1.25fr;
`;

const TextLight = styled(Text)`
  color: ${({ theme }) => theme.text.invoiceText};
`;

const Wrapper = styled.div`
  padding: 2.4rem;
  background: ${({ theme }) => theme.invoice.bg2};
  border-radius: 8px 8px 0px 0px;

  @media (${media.md}) {
    padding: 3.2rem;
  }
`;

const Labels = styled.div`
  display: none;

  ${Paragraph} {
    color: ${({ theme }) => theme.text.invoiceText};
  }

  @media (${media.md}) {
    margin-bottom: 3.2rem;
    display: grid;
    ${tabletGridTemplate}

    ${Paragraph} {
      &:nth-child(2) {
        justify-self: center;
      }

      &:nth-child(3),
      &:nth-child(4) {
        justify-self: end;
      }
    }
  }
`;

const ItemList = styled.ul`
  display: grid;
  gap: 2rem;

  @media (${media.md}) {
    gap: 3.2rem;
  }
`;

const Item = styled.li`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 0.8rem 0;

  ${Text}:last-child {
    grid-row: span 2;
    place-self: center end;
  }

  @media (${media.md}) {
    ${tabletGridTemplate}
    grid-auto-flow: row;
    gap: 0;

    ${Text} {
      &:last-child {
        grid-row: unset;
        place-self: unset;
      }

      &:nth-child(2) {
        justify-self: center;
      }

      &:nth-child(3),
      &:nth-child(4) {
        justify-self: end;
      }
    }
  }
`;

const GrandTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.invoice.bg3};
  border-radius: 0px 0px 8px 8px;
  color: white;

  ${Paragraph} {
    color: ${({ theme }) => theme.text.invoiceTotal};
  }
`;

const TotalAmount = styled.p`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.2rem;
  letter-spacing: -0.041rem;
  color: ${({ theme }) => theme.text.invoiceTotal};

  @media (${media.md}) {
    font-size: 2.4rem;
    letter-spacing: -0.05rem;
  }
`;

type InvoiceTableProps = {
  items: TInvoiceItem[];
  total: string;
};

const InvoiceTable: React.FC<InvoiceTableProps> = ({ items, total }) => {
  const isTablet = useMedia(`${media.md}`);

  return (
    <>
      <Wrapper>
        <Labels>
          <Paragraph small>Item Name</Paragraph>
          <Paragraph small>QTY.</Paragraph>
          <Paragraph small>Price</Paragraph>
          <Paragraph small>Total</Paragraph>
        </Labels>
        <ItemList>
          {items.map((item) =>
            !isTablet ? (
              <Item key={`${item.name}-${item.quantity}x${item.price}`}>
                <Text as="p">{item.name}</Text>
                <TextLight as="p">
                  {item.quantity} x {formatMoney(item.price)}
                </TextLight>
                <Text as="p">{formatMoney(item.total)}</Text>
              </Item>
            ) : (
              <Item key={`${item.name}-${item.quantity}x${item.price}`}>
                <Text as="p">{item.name}</Text>
                <TextLight as="p">{item.quantity}</TextLight>
                <TextLight as="p">{formatMoney(item.price)}</TextLight>
                <Text as="p">{formatMoney(item.total)}</Text>
              </Item>
            )
          )}
        </ItemList>
      </Wrapper>
      <GrandTotal>
        <Paragraph>Grand Total</Paragraph>
        <TotalAmount>{total}</TotalAmount>
      </GrandTotal>
    </>
  );
};

export default InvoiceTable;

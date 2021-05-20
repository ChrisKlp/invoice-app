import { AddButton, Dropdown, Heading1, Paragraph } from 'components/common';
import { useCallback } from 'react';
import { changeFilter, filterList } from 'store/reducers/filters';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  margin: 3.2rem 0;
  display: flex;
  align-items: center;
  gap: 1.8rem;

  ${Heading1} {
    margin-bottom: 0.4rem;
  }

  @media (${media.md}) {
    margin: 5.6rem 0;
    gap: 4rem;

    ${Heading1} {
      margin-bottom: 0.8rem;
    }
  }

  @media (${media.lg}) {
    margin: 7.2rem 0 6.5rem;
  }
`;

const HeaderWrapper = styled.div`
  flex-grow: 1;
`;

type HeaderProps = {
  invoiceLength: number;
};

const Header: React.FC<HeaderProps> = ({ invoiceLength }) => {
  const filters = useAppSelector(filterList);
  const dispatch = useAppDispatch();
  const onChange = useCallback(
    (name: string) => dispatch(changeFilter(name)),
    [dispatch]
  );

  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading1>Invoices</Heading1>
        <Paragraph>{invoiceLength} invoces</Paragraph>
      </HeaderWrapper>
      <Dropdown options={filters} onChange={onChange} />
      <AddButton>
        New <span>Invoice</span>
      </AddButton>
    </Wrapper>
  );
};

export default Header;

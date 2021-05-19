import { AddButton } from 'components/common/Buttons';
import { Dropdown } from 'components/common/Dropdown';
import { Heading1 } from 'components/common/Headings';
import { Paragraph } from 'components/common/Typography';
import { InvoiceState } from 'redux/invoicesSlice';
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
  data: InvoiceState;
};

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading1>Invoices</Heading1>
        <Paragraph>{data.length} invoces</Paragraph>
      </HeaderWrapper>
      <Dropdown />
      <AddButton>
        New <span>Invoice</span>
      </AddButton>
    </Wrapper>
  );
};

export default Header;

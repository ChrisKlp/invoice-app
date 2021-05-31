import styled from 'styled-components';
import illustration from 'assets/illustration-empty.svg';
import { Heading2, Paragraph } from 'components/common';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  margin: 10.2rem auto 0;
  max-width: 22rem;
  display: grid;
  justify-items: center;

  img {
    margin-bottom: 4rem;
    display: block;
  }

  h2 {
    margin-bottom: 2.4rem;
  }

  p {
    text-align: center;
  }

  @media (${media.md}) {
    margin-top: 21rem;

    img {
      margin-bottom: 6.4rem;
    }
  }

  @media (${media.lg}) {
    margin-top: 14.1rem;
  }
`;

const NoInvoices: React.FC = () => {
  return (
    <Wrapper>
      <img src={illustration} alt="Illustration" />
      <Heading2>There is nothing here</Heading2>
      <Paragraph>
        Create an invoice by clicking the <b>New</b> button and get started
      </Paragraph>
    </Wrapper>
  );
};

export default NoInvoices;

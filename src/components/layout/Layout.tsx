import { Container } from 'components/common';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  @media (${media.lg}) {
    display: flex;
  }
`;

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;

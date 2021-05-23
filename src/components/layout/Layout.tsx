import styled from 'styled-components';
import media from 'styles/mediaQueries';
import Sidebar from 'components/layout/Sidebar';

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
      {children}
    </Wrapper>
  );
};

export default Layout;

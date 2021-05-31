import styled from 'styled-components';
import media from 'styles/mediaQueries';
import Sidebar from 'components/layout/Sidebar';

const Wrapper = styled.div`
  @media (${media.lg}) {
    display: flex;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      {children}
    </Wrapper>
  );
};

export default Layout;

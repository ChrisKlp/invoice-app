import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 87.2%;
  max-width: 73rem;
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

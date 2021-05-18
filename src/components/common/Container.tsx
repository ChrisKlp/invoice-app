import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0rem auto;
  width: 87.2%;
  max-width: 73rem;
`;

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

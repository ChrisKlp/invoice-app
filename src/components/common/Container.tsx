import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0rem auto;
  width: 87.2%;
  max-width: 73rem;
`;

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

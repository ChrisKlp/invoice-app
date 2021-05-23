import styled from 'styled-components';
import iconArrowLeft from 'assets/icon-arrow-left.svg';
import { Paragraph } from 'components/common';

const Wrapper = styled.span`
  display: flex;
  gap: 2.2rem;
  align-items: center;
`;

const Text = styled(Paragraph)`
  font-weight: 700;
  color: ${({ theme }) => theme.text.heading};
`;

const BackLink: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <img src={iconArrowLeft} alt="Icon arrow left" />
      <Text as="span">{children}</Text>
    </Wrapper>
  );
};

export default BackLink;

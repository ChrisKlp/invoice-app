import styled from 'styled-components';
import media from 'styles/mediaQueries';
import ErrorMessages from './ErrorMessages';
import Fields from './Fields';
import Items from './Items';

const FormWrapper = styled.form`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`;

const Heading = styled.h1`
  margin: 0 5% 2.4rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.text.heading};

  span {
    color: ${({ theme }) => theme.text.paragraph};
  }

  @media (${media.md}) {
    margin: 5.6rem 5% 4.8rem;
  }
`;

const Content = styled.div`
  padding: 0 5% 8.8rem;
  overflow-y: auto;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 9.1rem;
  width: 100%;
  height: 6.4rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );

  @media (${media.md}) {
    bottom: 11.2rem;
  }
`;

const Footer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 9.1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.7rem;

  @media (${media.md}) {
    height: 11.2rem;
  }
`;

type FormProps = {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  heading: JSX.Element;
};

const Form: React.FC<FormProps> = ({ children, heading, onSubmit }) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      <Content>
        <Fields />
        <Items />
        <ErrorMessages />
      </Content>
      <Footer>{children}</Footer>
      <Shadow />
    </FormWrapper>
  );
};

export default Form;

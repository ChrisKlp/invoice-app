import { useFormikContext } from 'formik';
import { TInitialValues } from 'store/formSchema';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import Fields from './Fields';
import Items from './Items';

const FormWrapper = styled.form`
  display: grid;
  grid-template-rows: auto 1fr auto;
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
  padding: 0 5%;
  overflow-y: auto;
  display: grid;
  gap: 4rem;
`;

const ErrorWrapper = styled.div`
  padding: 1rem 5%;
`;

const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.021rem;
  color: ${({ theme }) => theme.form.error};
`;

type FormProps = {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  heading: JSX.Element;
};

const Form: React.FC<FormProps> = ({ children, heading, onSubmit }) => {
  const { errors, submitCount } = useFormikContext<TInitialValues>();
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      <Content>
        <Fields />
        <Items />
      </Content>
      <ErrorWrapper>
        <>
          {!!submitCount && errors && (
            <ErrorMessage>- All fields must be added</ErrorMessage>
          )}
          {typeof errors.items === 'string' && (
            <ErrorMessage>{errors.items}</ErrorMessage>
          )}
        </>
      </ErrorWrapper>
      {children}
    </FormWrapper>
  );
};

export default Form;

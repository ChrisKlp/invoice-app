import { Formik, FormikProps } from 'formik';
import { initialValues } from 'store/formSchema';
import { TInvoice } from 'store/types';
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

type FormProps = {
  onSubmit: (values: TInvoice) => void;
  heading: string;
  formRef: React.RefObject<FormikProps<TInvoice>>;
};

const Form: React.FC<FormProps> = ({
  children,
  heading,
  onSubmit,
  formRef,
}) => {
  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={(values: TInvoice) => {
        if (onSubmit) {
          onSubmit(values);
        }
      }}
    >
      {({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Heading>{heading}</Heading>
          <Content>
            <Fields />
            <Items />
          </Content>
          {children}
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Form;

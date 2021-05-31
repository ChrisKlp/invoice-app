import { Button } from 'components/common';
import { Formik, FormikProps } from 'formik';
import { useCallback } from 'react';
import {
  initialValues,
  TInitialValues,
  validationSchema,
} from 'store/formSchema';
import { useAppDispatch } from 'store/hooks';
import { createInvoice } from 'store/reducers/invoices';
import { InvoiceStatusEnum, TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import generateFormValues from 'utils/generateFormValues';
import { SlidingSidebar } from '.';
import Form from './Form';

const Footer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 9.1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;

  @media (${media.md}) {
    height: 11.2rem;

    button:first-child {
      margin-right: auto;
    }
  }
`;

type CreateInvoiceProps = {
  closeForm: () => void;
};

const CreateInvoice: React.FC<CreateInvoiceProps> = ({ closeForm }) => {
  const dispatch = useAppDispatch();

  const createNewInvoice = useCallback(
    (values: TInvoice) => dispatch(createInvoice(values)),
    [dispatch]
  );

  const onSubmit = (values: TInitialValues) => {
    createNewInvoice(generateFormValues(values));
    closeForm();
  };

  const handleDraftSubmit = (values: TInitialValues) => {
    createNewInvoice(generateFormValues(values, InvoiceStatusEnum.DRAFT));
    closeForm();
  };

  return (
    <SlidingSidebar close={closeForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props: FormikProps<TInitialValues>) => (
          <Form heading={<>New Invoice</>} onSubmit={props.handleSubmit}>
            <Footer>
              <Button secondary onClick={closeForm}>
                Discard
              </Button>
              <Button
                type="button"
                draftType
                onClick={() => handleDraftSubmit(props.values)}
              >
                Save as Draft
              </Button>
              <Button type="submit">Save & Send</Button>
            </Footer>
          </Form>
        )}
      </Formik>
    </SlidingSidebar>
  );
};

export default CreateInvoice;

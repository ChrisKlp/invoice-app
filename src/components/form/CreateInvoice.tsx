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

const StyledButton = styled(Button)`
  @media (${media.md}) {
    margin-right: auto;
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
            <StyledButton secondary onClick={closeForm}>
              Discard
            </StyledButton>
            <Button
              type="button"
              draftType
              onClick={() => handleDraftSubmit(props.values)}
            >
              Save as Draft
            </Button>
            <Button type="submit">Save & Send</Button>
          </Form>
        )}
      </Formik>
    </SlidingSidebar>
  );
};

export default CreateInvoice;

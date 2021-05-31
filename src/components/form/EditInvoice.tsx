import { Button } from 'components/common';
import { Formik, FormikProps } from 'formik';
import { useCallback } from 'react';
import { validationSchema } from 'store/formSchema';
import { useAppDispatch } from 'store/hooks';
import { editInvoice } from 'store/reducers/invoices';
import { TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import editFormValues from 'utils/editFormValues';
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
  }
`;

type EditInvoiceProps = {
  closeForm: () => void;
  initialValues: TInvoice;
};

const EditInvoice: React.FC<EditInvoiceProps> = ({
  closeForm,
  initialValues,
}) => {
  const dispatch = useAppDispatch();

  const editInvoiceFn = useCallback(
    (values: TInvoice) => dispatch(editInvoice(values)),
    [dispatch]
  );

  const onSubmit = (values: TInvoice) => {
    editInvoiceFn(editFormValues(values));
    closeForm();
  };

  return (
    <SlidingSidebar close={closeForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props: FormikProps<TInvoice>) => (
          <Form
            heading={
              <>
                Edit <span>#</span>
                {props.values.id}
              </>
            }
            onSubmit={props.handleSubmit}
          >
            <Footer>
              <Button secondary onClick={closeForm}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </Footer>
          </Form>
        )}
      </Formik>
    </SlidingSidebar>
  );
};

export default EditInvoice;

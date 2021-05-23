import { Button } from 'components/common';
import { FormikProps } from 'formik';
import { useRef } from 'react';
import { InvoiceStatusEnum, TInvoice } from 'store/types';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import moment from 'moment';
import generateId from 'utils/generateId';
import { useAppDispatch } from 'store/hooks';
import { createInvoice } from 'store/reducers/invoices';
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
  const formRef = useRef<FormikProps<TInvoice>>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (values: TInvoice, status?: InvoiceStatusEnum) => {
    values.id = generateId();
    values.status = status || InvoiceStatusEnum.PENDING;
    values.total = values.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    values.paymentDue = moment(values.createdAt)
      .add(values.paymentTerms, 'days')
      .format('YYYY-MM-DD');

    values.items = values.items.map((item) => {
      item.total = item.quantity * item.price;
      return item;
    });

    dispatch(createInvoice(values));
    closeForm();
  };

  const handleSubmit = (status?: InvoiceStatusEnum) => {
    if (status === InvoiceStatusEnum.DRAFT && formRef.current) {
      onSubmit(formRef.current?.values, status);
    } else {
      formRef.current?.handleSubmit();
    }
  };

  return (
    <SlidingSidebar close={closeForm}>
      <Form heading="New Invoice" onSubmit={onSubmit} formRef={formRef}>
        <Footer>
          <Button type="button" secondary onClick={closeForm}>
            Discard
          </Button>
          <Button
            type="button"
            draftType
            onClick={() => handleSubmit(InvoiceStatusEnum.DRAFT)}
          >
            Save as Draft
          </Button>
          <Button type="button" onClick={() => handleSubmit()}>
            Save & Send
          </Button>
        </Footer>
      </Form>
    </SlidingSidebar>
  );
};

export default CreateInvoice;

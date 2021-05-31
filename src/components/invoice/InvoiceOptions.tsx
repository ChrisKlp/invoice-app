import { Button } from 'components/common';
import { useCallback } from 'react';
import { useAppDispatch } from 'store/hooks';
import { markAsPaid } from 'store/reducers/invoices';
import { InvoiceStatusEnum, TInvoice } from 'store/types';

type InvoiceOptionsProps = {
  invoice: TInvoice;
  openForm: () => void;
  openModal: () => void;
};

const InvoiceOptions: React.FC<InvoiceOptionsProps> = ({
  invoice,
  openForm,
  openModal,
}) => {
  const dispatch = useAppDispatch();

  const markAsPaidFn = useCallback(
    () => dispatch(markAsPaid(invoice.id.toUpperCase())),
    [dispatch, invoice]
  );

  return (
    <>
      <Button secondary onClick={openForm}>
        Edit
      </Button>
      <Button deleteType onClick={openModal}>
        Delete
      </Button>
      {invoice.status !== InvoiceStatusEnum.PAID && (
        <Button onClick={markAsPaidFn}>Mark as Paid</Button>
      )}
    </>
  );
};

export default InvoiceOptions;

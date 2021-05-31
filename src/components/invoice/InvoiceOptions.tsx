import { Button } from 'components/common';
import { useCallback } from 'react';
import { useAppDispatch } from 'store/hooks';
import { markAsPaid } from 'store/reducers/invoices';

type InvoiceOptionsProps = {
  invoiceId: string;
  openForm: () => void;
  openModal: () => void;
};

const InvoiceOptions: React.FC<InvoiceOptionsProps> = ({
  invoiceId,
  openForm,
  openModal,
}) => {
  const dispatch = useAppDispatch();

  const markAsPaidFn = useCallback(
    () => dispatch(markAsPaid(invoiceId)),
    [dispatch, invoiceId]
  );

  return (
    <>
      <Button secondary onClick={openForm}>
        Edit
      </Button>
      <Button deleteType onClick={openModal}>
        Delete
      </Button>
      <Button onClick={markAsPaidFn}>Mark as Paid</Button>
    </>
  );
};

export default InvoiceOptions;

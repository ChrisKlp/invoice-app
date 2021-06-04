import moment from 'moment';
import { InvoiceStatusEnum, TInvoice } from 'store/types';

export default function editFormValues(values: TInvoice): TInvoice {
  const total =
    values?.items?.reduce((acc, item) => acc + item.quantity * item.price, 0) ||
    0;

  const paymentDue = moment(values.createdAt)
    .add(values.paymentTerms, 'days')
    .format();

  return {
    ...values,
    status:
      values.status === InvoiceStatusEnum.DRAFT
        ? InvoiceStatusEnum.PENDING
        : values.status,
    total,
    paymentDue,
  };
}

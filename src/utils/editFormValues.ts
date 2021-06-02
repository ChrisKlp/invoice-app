import moment from 'moment';
import { InvoiceStatusEnum, TInvoice } from 'store/types';

export default function editFormValues(
  values: TInvoice,
  status?: InvoiceStatusEnum
): TInvoice {
  const total =
    values?.items?.reduce((acc, item) => acc + item.quantity * item.price, 0) ||
    0;

  const paymentDue = moment(values.createdAt)
    .add(values.paymentTerms, 'days')
    .format();

  return {
    ...values,
    status: status || InvoiceStatusEnum.PENDING,
    total,
    paymentDue,
  };
}

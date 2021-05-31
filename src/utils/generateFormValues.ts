import moment from 'moment';
import { TInitialValues } from 'store/formSchema';
import { InvoiceStatusEnum, TInvoice } from 'store/types';
import generateId from './generateId';

export default function generateFormValues(
  values: TInitialValues,
  status?: InvoiceStatusEnum
): TInvoice {
  const total =
    values?.items?.reduce((acc, item) => acc + item.quantity * item.price, 0) ||
    0;

  const paymentDue = moment(values.createdAt)
    .add(values.paymentTerms, 'days')
    .format('YYYY-MM-DD');

  return {
    ...values,
    id: generateId(),
    status: status || InvoiceStatusEnum.PENDING,
    total,
    paymentDue,
  };
}

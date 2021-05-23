import { InvoiceStatusEnum, TInvoice } from './types';

export const initialValues: TInvoice = {
  id: '',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
  status: InvoiceStatusEnum.DRAFT,
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  createdAt: new Date().toISOString().split('T')[0],
  paymentDue: '',
  paymentTerms: 30,
  description: '',
  items: [],
  total: 0,
};

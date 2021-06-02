import * as Yup from 'yup';
import type { TInvoiceItem } from 'store/types';

export const initialValues = {
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  createdAt: new Date(),
  paymentDue: '',
  paymentTerms: 30,
  description: '',
  items: [],
};

export interface TInitialValues extends Omit<typeof initialValues, 'items'> {
  items: TInvoiceItem[];
}
const requiredMessage = 'can’t be empty';

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    city: Yup.string().required(requiredMessage),
    postCode: Yup.string().required(requiredMessage),
    country: Yup.string().required(requiredMessage),
  }),
  clientName: Yup.string().required(requiredMessage),
  clientEmail: Yup.string()
    .email('Input a valid email')
    .required(requiredMessage),
  clientAddress: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    city: Yup.string().required(requiredMessage),
    postCode: Yup.string().required(requiredMessage),
    country: Yup.string().required(requiredMessage),
  }),
  paymentDue: Yup.date().optional(),
  paymentTerms: Yup.number().required(requiredMessage),
  description: Yup.string().required(requiredMessage),
  items: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().optional(),
        name: Yup.string().required(requiredMessage),
        quantity: Yup.number().required(requiredMessage).min(0),
        price: Yup.number().required(requiredMessage).min(0),
        total: Yup.number().optional(),
      })
    )
    .min(1, '- An item must be added.'),
});

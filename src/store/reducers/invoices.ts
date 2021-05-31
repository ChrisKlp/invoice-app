import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from 'store/data.json';
import { InvoiceStatusEnum, TInvoice } from 'store/types';
import { RootState } from '../store';

const initialState: TInvoice[] = data as TInvoice[];

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    createInvoice: (state, action: PayloadAction<TInvoice>) => {
      return [action.payload, ...state];
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    editInvoice: (state, action: PayloadAction<TInvoice>) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );

      if (index >= 0) {
        state.splice(index, 1, action.payload);
      }
    },
    markAsPaid: (state, action: PayloadAction<string>) => {
      const index = state.find((invoice) => invoice.id === action.payload);
      if (index) {
        index.status = InvoiceStatusEnum.PAID;
      }
    },
  },
});

export const { createInvoice, deleteInvoice, editInvoice, markAsPaid } =
  invoicesSlice.actions;

export const filteredInvoices = (state: RootState): TInvoice[] => {
  const activeFilters = Object.entries(state.filters)
    .filter((item) => item[1])
    .map((item) => item[0]);

  if (!activeFilters.length) return state.invoices;

  return state.invoices.filter((invoice) =>
    activeFilters.some((filter) => {
      if (!filter) return invoice;
      return invoice.status.includes(filter);
    })
  );
};

export default invoicesSlice.reducer;

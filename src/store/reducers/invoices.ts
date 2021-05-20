import { createSlice } from '@reduxjs/toolkit';
import data from 'store/data.json';
import type { TInvoice } from 'store/types';
import { RootState } from '../store';

const initialState: TInvoice[] = data;

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
});

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

import { createSlice } from '@reduxjs/toolkit';
import data from 'redux/data.json';

export type InvoiceState = typeof data;

const initialState: InvoiceState = data;

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
});

export default invoicesSlice.reducer;

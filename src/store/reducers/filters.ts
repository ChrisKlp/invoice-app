import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { InvoiceStatusEnum } from 'store/types';

export type TFilters = {
  [InvoiceStatusEnum.DRAFT]: boolean;
  [InvoiceStatusEnum.PENDING]: boolean;
  [InvoiceStatusEnum.PAID]: boolean;
};

const initialState: TFilters = {
  [InvoiceStatusEnum.DRAFT]: false,
  [InvoiceStatusEnum.PENDING]: false,
  [InvoiceStatusEnum.PAID]: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filterList = (
  state: RootState
): [status: string, value: boolean][] => Object.entries(state.filters);

export default filtersSlice.reducer;

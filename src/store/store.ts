import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from 'store/reducers/invoices';
import filtersReducer from 'store/reducers/filters';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

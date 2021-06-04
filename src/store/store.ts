import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from 'store/reducers/invoices';
import filtersReducer from 'store/reducers/filters';
import themeReducer from 'store/reducers/theme';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

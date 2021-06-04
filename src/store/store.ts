import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from 'store/reducers/invoices';
import filtersReducer from 'store/reducers/filters';
import themeReducer from 'store/reducers/theme';
import { loadState, saveState } from 'utils/localStorage';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
  preloadedState: {
    invoices: loadState(),
  },
});

store.subscribe(() => {
  saveState(store.getState().invoices);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

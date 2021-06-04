import { TInvoice } from 'store/types';

export function loadState(): TInvoice[] | undefined {
  try {
    const serializedState = localStorage.getItem('invoices');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(invoices: TInvoice[]): void {
  try {
    const serializedState = JSON.stringify(invoices);
    localStorage.setItem('invoices', serializedState);
  } catch (err) {
    console.error(err);
  }
}

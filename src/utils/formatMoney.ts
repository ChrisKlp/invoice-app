export default function formatMoney(total: number): string {
  const format = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(total);

  return `${format[0]} ${format.slice(1)}`;
}

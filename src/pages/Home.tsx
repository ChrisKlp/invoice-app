import { Container } from 'components/common';
import Header from 'components/home/Header';
import InvoiceList from 'components/home/InvoiceList';
import { useAppSelector } from 'store/hooks';
import { filteredInvoices } from 'store/reducers/invoices';

const Home: React.FC = () => {
  const invoices = useAppSelector(filteredInvoices);

  return (
    <Container>
      <Header invoiceLength={invoices.length} />
      <InvoiceList data={invoices} />
    </Container>
  );
};

export default Home;

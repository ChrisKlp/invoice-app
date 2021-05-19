import { Container } from 'components/common';
import Header from 'components/home/Header';
import InvoiceList from 'components/home/InvoiceList';
import { useAppSelector } from 'redux/hooks';

const Home: React.FC = () => {
  const invoices = useAppSelector((state) => state.invoices);

  return (
    <Container>
      <Header data={invoices} />
      <InvoiceList data={invoices} />
    </Container>
  );
};

export default Home;

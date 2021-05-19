import { Container } from 'components/common';
import Header from 'components/home/Header';
import InvoiceList from 'components/home/InvoiceList';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <InvoiceList />
    </Container>
  );
};

export default Home;

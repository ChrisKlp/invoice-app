import { Container } from 'components/common';
import { CreateInvoice } from 'components/form';
import { Header, InvoiceList, NoInvoices } from 'components/home';
import useOpen from 'hooks/useOpen';
import { useAppSelector } from 'store/hooks';
import { filteredInvoices } from 'store/reducers/invoices';

const Home: React.FC = () => {
  const invoices = useAppSelector(filteredInvoices);
  const { handleOpen, handleClose, isOpen } = useOpen();

  return (
    <Container>
      <Header invoiceLength={invoices.length} openForm={handleOpen} />
      <InvoiceList data={invoices} />
      {!invoices.length && <NoInvoices />}
      {isOpen && <CreateInvoice closeForm={handleClose} />}
    </Container>
  );
};

export default Home;

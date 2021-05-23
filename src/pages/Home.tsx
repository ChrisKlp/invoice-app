import { Container } from 'components/common';
import { CreateInvoice } from 'components/form';
import Header from 'components/home/Header';
import InvoiceList from 'components/home/InvoiceList';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { filteredInvoices } from 'store/reducers/invoices';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const invoices = useAppSelector(filteredInvoices);

  const closeForm = () => setIsOpen(false);
  const openForm = () => setIsOpen(true);

  return (
    <Container>
      <Header invoiceLength={invoices.length} openForm={openForm} />
      <InvoiceList data={invoices} />
      {isOpen && <CreateInvoice closeForm={closeForm} />}
    </Container>
  );
};

export default Home;

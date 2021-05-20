import { Container } from 'components/common';
import { InvoiceBody, InvoiceFooter, InvoiceHeader } from 'components/invoice';
import useMedia from 'hooks/useMedia';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import media from 'styles/mediaQueries';

const Invoice: React.FC = () => {
  const { id }: { id: string } = useParams();
  const isTablet = useMedia(`${media.md}`);
  const invoices = useAppSelector((state) => state.invoices);

  const invoice =
    invoices && invoices.find((item) => item.id === id.toUpperCase());

  if (!invoice) return null;

  return (
    <>
      <Container>
        <InvoiceHeader data={invoice} />
        <InvoiceBody data={invoice} />
      </Container>
      {!isTablet && <InvoiceFooter />}
    </>
  );
};

export default Invoice;

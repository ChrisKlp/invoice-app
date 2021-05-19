import { Container } from 'components/common';
import { InvoiceBody, InvoiceFooter, InvoiceHeader } from 'components/invoice';
import useMedia from 'hooks/useMedia';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import media from 'styles/mediaQueries';

type InvoiceProps = {};

const Invoice: React.FC<InvoiceProps> = () => {
  const { id }: { id: string } = useParams();
  const isTablet = useMedia(`${media.md}`);
  const data = useAppSelector((state) => state.invoices);

  const invoice = data && data.find((item) => item.id === id.toUpperCase());

  return (
    <>
      <Container>
        <InvoiceHeader data={invoice} />
        <InvoiceBody data={invoice} />
      </Container>
      {!isTablet && <InvoiceFooter data={invoice} />}
    </>
  );
};

export default Invoice;

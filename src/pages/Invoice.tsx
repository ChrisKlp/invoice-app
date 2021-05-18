import { InvoiceBody, InvoiceHeader, InvoiceWrapper } from 'components/invoice';
import data from 'data/data.json';
import { useParams } from 'react-router-dom';

type InvoiceProps = {};

const Invoice: React.FC<InvoiceProps> = () => {
  const { id }: { id: string } = useParams();

  const invoice = data && data.find((item) => item.id === id.toUpperCase());

  return (
    <>
      <InvoiceHeader data={invoice} />
      <InvoiceWrapper>
        <InvoiceBody data={invoice} />
      </InvoiceWrapper>
    </>
  );
};

export default Invoice;

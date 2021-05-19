import { Button } from 'components/common';

type InvoiceOptionsProps = {};

const InvoiceOptions: React.FC<InvoiceOptionsProps> = () => {
  return (
    <>
      <Button secondary>Edit</Button>
      <Button deleteType>Delete</Button>
      <Button>Mark as Paid</Button>
    </>
  );
};

export default InvoiceOptions;

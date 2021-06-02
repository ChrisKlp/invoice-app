import { Container } from 'components/common';
import {
  ConfirmModal,
  InvoiceBody,
  InvoiceFooter,
  InvoiceHeader,
} from 'components/invoice';
import useMedia from 'hooks/useMedia';
import useOpen from 'hooks/useOpen';
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import media from 'styles/mediaQueries';
import { EditInvoice } from 'components/form';
import { useEffect } from 'react';

const Invoice: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const { handleOpen, handleClose, isOpen } = useOpen();
  const {
    handleOpen: openModal,
    handleClose: closeModal,
    isOpen: isModalOpen,
  } = useOpen();
  const isTablet = useMedia(`${media.md}`);
  const invoices = useAppSelector((state) => state.invoices);

  const invoice =
    invoices && invoices.find((item) => item.id === id.toUpperCase());

  useEffect(() => {
    if (!invoice) {
      history.push('/');
    }
  }, [history, invoice]);

  if (!invoice) return null;

  return (
    <>
      <Container>
        <InvoiceHeader
          invoice={invoice}
          openForm={handleOpen}
          openModal={openModal}
        />
        <InvoiceBody invoice={invoice} />
      </Container>
      {isModalOpen && (
        <ConfirmModal invoiceId={invoice.id} closeModal={closeModal} />
      )}
      {isOpen && (
        <EditInvoice closeForm={handleClose} initialValues={invoice} />
      )}
      {!isTablet && (
        <InvoiceFooter
          invoice={invoice}
          openForm={handleOpen}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default Invoice;

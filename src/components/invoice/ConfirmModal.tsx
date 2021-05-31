import {
  Backdrop,
  Button,
  Container,
  Heading2,
  Paragraph,
} from 'components/common';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { deleteInvoice } from 'store/reducers/invoices';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  padding: 3.2rem;
  max-width: 48rem;
  background: ${({ theme }) => theme.invoice.bg};
  box-shadow: 1rem 1rem -1rem ${({ theme }) => theme.invoice.shadow};
  border-radius: 0.8rem;

  @media (${media.md}) {
    padding: 4.8rem;
  }
`;

const Heading = styled(Heading2)`
  margin-bottom: 0.8rem;
  line-height: 3.2rem;

  @media (${media.md}) {
    margin-bottom: 1.3rem;
    font-size: 2.4rem;
  }
`;

const Text = styled(Paragraph)`
  font-size: 1.2rem;
  line-height: 2.2rem;
  letter-spacing: -0.025rem;
`;

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Buttons = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;

  @media (${media.md}) {
    margin-top: 1.6rem;
  }
`;

type ConfirmModalProps = {
  invoiceId: string;
  closeModal: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  invoiceId,
  closeModal,
}) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const deleteInvoiceFn = useCallback(() => {
    dispatch(deleteInvoice(invoiceId));
    history.push('/');
  }, [dispatch, history, invoiceId]);

  return (
    <Backdrop>
      <StyledContainer>
        <Wrapper>
          <Heading>Confirm Deletion</Heading>
          <Text>
            Are you sure you want to delete invoice {invoiceId}? This action
            cannot be undone.
          </Text>
          <Buttons>
            <Button onClick={closeModal}>Cancel</Button>
            <Button deleteType onClick={deleteInvoiceFn}>
              Delete
            </Button>
          </Buttons>
        </Wrapper>
      </StyledContainer>
    </Backdrop>
  );
};

export default ConfirmModal;

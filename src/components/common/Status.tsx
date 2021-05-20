import styled, { css } from 'styled-components';
import Paragraph from './Typography';

const Point = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.status.draft.color};
`;

const Text = styled(Paragraph)`
  font-weight: 700;
  text-transform: capitalize;
`;

const Wrapper = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 10.4rem;
  height: 4rem;
  border-radius: 0.6rem;
  overflow: hidden;
  background: ${({ theme }) => theme.status.draft.bg};

  ${({ status }) =>
    status === 'draft' &&
    css`
      ${Point} {
        background: ${({ theme }) => theme.status.draft.color};
      }

      ${Text} {
        color: ${({ theme }) => theme.status.draft.color};
      }
    `};

  ${({ status }) =>
    status === 'pending' &&
    css`
      background: ${({ theme }) => theme.status.pending.bg};

      ${Point} {
        background: ${({ theme }) => theme.status.pending.color};
      }

      ${Text} {
        color: ${({ theme }) => theme.status.pending.color};
      }
    `};

  ${({ status }) =>
    status === 'paid' &&
    css`
      background: ${({ theme }) => theme.status.paid.bg};

      ${Point} {
        background: ${({ theme }) => theme.status.paid.color};
      }

      ${Text} {
        color: ${({ theme }) => theme.status.paid.color};
      }
    `};
`;

type InvoiceStatusProps = {
  status: string;
  className?: string;
};

const Status: React.FC<InvoiceStatusProps> = ({ status, className }) => {
  return (
    <Wrapper status={status} className={className}>
      <Point />
      <Text>{status}</Text>
    </Wrapper>
  );
};

export default Status;

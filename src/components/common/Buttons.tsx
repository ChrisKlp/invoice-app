import styled, { css } from 'styled-components';
import iconPlus from 'assets/icon-plus.svg';
import media from 'styles/mediaQueries';

export const Button = styled.button<{
  deleteType?: boolean;
  draftType?: boolean;
  secondary?: boolean;
  wide?: boolean;
}>`
  padding: 1.6rem;
  width: ${({ wide }) => (wide ? '100%' : 'initial')};
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: ${({ theme }) => theme.btn.primary.color};
  text-align: center;
  background-color: ${({ theme }) => theme.btn.primary.bg};
  border-radius: 5em;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.btn.primary.hover};
  }

  @media (${media.sm}) {
    padding: 1.7rem 2.4rem 1.6rem;
  }

  ${({ deleteType }) =>
    deleteType &&
    css`
      background-color: ${({ theme }) => theme.btn.delete.bg};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.btn.delete.hover};
      }
    `};

  ${({ draftType }) =>
    draftType &&
    css`
      background-color: ${({ theme }) => theme.btn.draft.bg};
      color: ${({ theme }) => theme.btn.draft.color};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.btn.draft.hover};
      }
    `};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.btn.secondary.bg};
      color: ${({ theme }) => theme.btn.secondary.color};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.btn.secondary.hover};
      }
    `};
`;

const StyledButton = styled(Button)`
  padding: 0.6rem 1.4rem 0.6rem 0.6rem;
  display: flex;
  align-items: center;

  @media (${media.md}) {
    padding: 0.8rem 1.5rem 0.8rem 0.8rem;
  }
`;

const Icon = styled.span`
  margin-right: 0.8rem;
  display: grid;
  place-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #fff;

  @media (${media.md}) {
    margin-right: 1.6rem;
  }
`;

const Label = styled.span`
  span {
    display: none;

    @media (${media.md}) {
      display: initial;
    }
  }
`;

interface AddButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const AddButton: React.FC<AddButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon>
        <img src={iconPlus} alt="plus icon" />
      </Icon>
      <Label>{children}</Label>
    </StyledButton>
  );
};

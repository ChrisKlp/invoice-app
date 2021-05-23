import { Backdrop, BackLink } from 'components/common';
import { useEffect } from 'react';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 7.2rem;
  height: calc(100vh - 7.2rem);
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  background: ${({ theme }) => theme.invoice.bg};
  z-index: 9;

  @media (${media.md}) {
    margin-top: 8rem;
    max-width: 61.1rem;
    border-radius: 0 2rem 2rem 0;
    height: calc(100vh - 8rem);
  }

  @media (${media.lg}) {
    margin: 0;
    padding-left: 10.3rem;
    height: 100vh;
    max-width: 71.9rem;
  }
`;

const BackButton = styled.button`
  margin: 3.2rem 0 2.4rem;
  display: block;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  @media (${media.md}) {
    grid-template-rows: auto;

    ${BackButton} {
      display: none;
    }
  }
`;

type SlidingSidebarProps = {
  close: () => void;
};

const SlidingSidebar: React.FC<SlidingSidebarProps> = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Backdrop />
      <Wrapper>
        <StyledContainer>
          <BackButton onClick={close}>
            <BackLink>Go back</BackLink>
          </BackButton>
          {children}
        </StyledContainer>
      </Wrapper>
    </>
  );
};

export default SlidingSidebar;

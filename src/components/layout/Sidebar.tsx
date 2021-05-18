import styled from 'styled-components';
import logo from 'assets/logo.svg';
import iconMoon from 'assets/icon-moon.svg';
import iconSun from 'assets/icon-sun.svg';
import avatar from 'assets/image-avatar.jpg';
import media from 'styles/mediaQueries';
import { Link } from 'react-router-dom';

const Wrapper = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 7.2rem;
  background-color: ${({ theme }) => theme.sidebar.bg};

  @media (${media.md}) {
    height: 8rem;
  }

  @media (${media.lg}) {
    flex-direction: column;
    height: 100vh;
    width: 10.3rem;
    border-radius: 0 2rem 2rem 0;
    overflow: hidden;
  }
`;

const LogoWrapper = styled(Link)`
  position: relative;
  flex-shrink: 0;
  margin-right: auto;
  display: grid;
  place-items: center;
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 0 2rem 2rem 0;
  background: ${({ theme }) => theme.logo.primary};
  overflow: hidden;
  z-index: 0;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: ${({ theme }) => theme.logo.secondary};
    border-radius: 2rem 0 0 0;
    content: '';
    z-index: -1;
  }

  img {
    width: 2.8rem;
  }

  @media (${media.md}) {
    width: 8rem;
    height: 8rem;

    img {
      width: 3.1rem;
    }
  }

  @media (${media.lg}) {
    margin: 0;
    margin-bottom: auto;
    width: 10.3rem;
    height: 10.3rem;

    img {
      width: 4rem;
    }
  }
`;

const ThemeButton = styled.button`
  margin: 0 2.4rem;
  flex-shrink: 0;
  display: block;
  background: none;
  border: 0;
  width: 2rem;
  cursor: pointer;

  @media (${media.md}) {
    margin: 0 3.2rem;
  }

  @media (${media.lg}) {
    margin: 2.8rem 0;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.sidebar.divider};

  @media (${media.lg}) {
    width: 100%;
    height: 1px;
  }
`;

const Avatar = styled.button`
  margin: 0 2.4rem;
  display: block;
  flex-shrink: 0;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  overflow: hidden;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (${media.md}) {
    margin: 0 3.2rem;
  }

  @media (${media.lg}) {
    margin: 2.4rem 0;
    width: 4rem;
    height: 4rem;
  }
`;

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Wrapper>
      <LogoWrapper to="/">
        <img src={logo} alt="Logo" />
      </LogoWrapper>
      <ThemeButton>
        <img src={iconMoon || iconSun} alt="Theme style Icon" />
      </ThemeButton>
      <Divider />
      <Avatar>
        <img src={avatar} alt="Profile Avatar" />
      </Avatar>
    </Wrapper>
  );
};

export default Sidebar;

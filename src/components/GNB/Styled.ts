import styled from 'styled-components';
import Link from 'next/link';
// Nav 컴포넌트
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  z-index: 9999;
  color: ${props => props.theme.colors.primary};
  padding: 10px;
`;

// NavLogo 컴포넌트
const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
`;

// NavMenu 컴포넌트
const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

// NavMenuItem 컴포넌트
const NavMenuItem = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

// NavMenuLink 컴포넌트
const NavMenuLink = styled.a`
  text-decoration: none;
  color: $color-secondary;

  &:hover {
    text-decoration: underline;
  }
`;

export { NavMenuLink, NavMenuItem, NavMenu, NavLogo, Nav };

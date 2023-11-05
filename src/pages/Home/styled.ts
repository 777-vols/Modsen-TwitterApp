import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const fullSize = '100';

export const Wrapper = styled.div`
  width: ${fullSize}%;
  height: ${fullSize}vh;
`;

export const Main = styled.div`
  height: calc(${fullSize}% - 55px);
  width: ${fullSize}%;
`;

export const BagckgoundImage = styled.img`
  height: ${fullSize}%;
  width: 60%;
`;

export const Footer = styled.footer`
  height: 55px;
  width: ${fullSize}%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  padding: 0 ${({ theme }) => theme.spaces.mediumS}px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  color: ${({ theme }) => theme.colors.black};
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { blueButton, flexCenterVertical } from '@/constants/styles/commonStyles';

export const Wrapper = styled.aside`
  max-width: 230px;
  width: 100%;
`;

export const Logo = styled.img`
  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  margin-bottom: ${({ theme }) => theme.spaces.largeL}px;
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
`;

export const NavItem = styled.div`
  ${flexCenterVertical}
  margin-bottom: ${({ theme }) => theme.spaces.mediumL}px;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.1s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Button = styled.button`
  ${blueButton}
  height: 55px;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

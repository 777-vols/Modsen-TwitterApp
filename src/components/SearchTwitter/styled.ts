import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenterVertical, resetButton } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.zero}
    ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumM}px;
  width: 100%;
  max-width: 383px;
`;

export const SearchForm = styled.form`
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.lightGrey};
  ${flexCenterVertical}
  height: 50px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.mediumL}px;
`;

export const Button = styled.button`
  ${resetButton}
  cursor: pointer;
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  border: none;
  background: transparent;
  width: 100%;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.fontSizes.mediumM}px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  padding: ${({ theme }) => theme.fontSizes.mediumL}px ${({ theme }) => theme.spaces.zero};
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;
export const SearchResult = styled.div``;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.fontSizes.largeL}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
`;

export const NavItem = styled.li`
  width: fit-content;
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallM}px;
`;

export const StyledLink = styled(NavLink)`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Signature = styled.span`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.black};
`;

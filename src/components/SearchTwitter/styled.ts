import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  flexCenterHorizontally,
  flexCenterVertical,
  resetButton,
  textLink
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  padding: ${({ theme }) => theme.spaces.smallXL}px ${({ theme }) => theme.spaces.zero}
    ${({ theme }) => theme.spaces.smallXL}px ${({ theme }) => theme.spaces.smallXL}px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.zero}
      ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumM}px;
  }
`;

export const SearchForm = styled.form`
  ${flexCenterVertical}
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.lightGrey};
  height: 40px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-bottom: ${({ theme }) => theme.spaces.mediumL}px;
    height: 50px;
  }
`;

export const Button = styled.button`
  ${resetButton}
  cursor: pointer;
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  width: 15px;
  height: 15px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  border: none;
  background: transparent;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.fontSizes.mediumM}px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.zero};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.fontSizes.mediumL}px ${({ theme }) => theme.spaces.zero};
    font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  }
`;
export const SearchResult = styled.div`
  min-height: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.fontSizes.largeS}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.fontSizes.largeL}px;
  }
`;

export const NavItem = styled.li`
  width: fit-content;
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallM}px;
`;

export const TextLink = styled(NavLink)`
  ${textLink}
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
    line-height: 25px;
  }
`;

export const StyledLink = styled(NavLink)`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    line-height: 25px;
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  }
`;

export const Signature = styled.span`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
    line-height: 25px;
  }
`;

export const LodaderWrapper = styled.div`
  ${flexCenterHorizontally}
`;

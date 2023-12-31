import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  flexCenterHorizontally,
  flexCenterVertical,
  resetButton,
  textLink
} from '@/constants/theme/styles/commonStyles';

const smallLineHeight = 22;
const mediumLineHeight = 25;

const smallImageSize = 15;
const bigImageSize = 24;

export const Wrapper = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spaces.mediumM}px;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: ${({ theme }) => theme.spaces.smallXL}px;
  padding-left: ${({ theme }) => theme.spaces.smallXL}px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding-bottom: ${({ theme }) => theme.spaces.mediumS}px;
    padding-left: ${({ theme }) => theme.spaces.mediumM}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.mediumM}px;
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
  width: ${smallImageSize}px;
  height: ${smallImageSize}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: ${bigImageSize}px;
    height: ${bigImageSize}px;
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

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spaces.largeM}px;
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
    line-height: ${mediumLineHeight}px;
  }
`;

export const StyledLink = styled(NavLink)`
  line-height: ${smallLineHeight}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    line-height: ${mediumLineHeight}px;
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  }
`;

export const Signature = styled.span`
  line-height: ${smallLineHeight}px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
    line-height: ${mediumLineHeight}px;
  }
`;

export const LodaderWrapper = styled.div`
  ${flexCenterHorizontally}
`;

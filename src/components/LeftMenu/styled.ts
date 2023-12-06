import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  blueButton,
  flexCenterVertical,
  smallAvatar,
  textElipsis,
  userEmail
} from '@/constants/theme/styles/commonStyles';

import { IStyleProps } from './types';

export const Wrapper = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spaces.mediumL}px;
  padding-right: ${({ theme }) => theme.spaces.mediumS}px;
  padding-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding-right: ${({ theme }) => theme.spaces.largeL}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    top: 0;
    padding-right: ${({ theme }) => theme.spaces.zero};
  }
`;

export const Menu = styled.nav<IStyleProps>`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
    padding: ${({ theme }) => theme.spaces.smallL}px;
    width: 230px;
    display: block;
    position: absolute;
    border: 2px solid ${({ theme }) => theme.color};
    top: ${({ theme }) => theme.spaces.largeM}px;
    left: -${({ theme }) => theme.spaces.smallXL}px;
    z-index: 100;
    background-color: ${({ theme }) => theme.background};
    transform: translateX(-110%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${({ open }) =>
      open &&
      css`
        transform: translateX(0);
        display: block;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: 180px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  width: 30px;
  height: 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.mediumL}px;
    margin-bottom: ${({ theme }) => theme.spaces.largeL}px;
    width: 40px;
    height: 33px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.smallL}px;
  height: 20px;
  width: 20px;
  filter: ${({ theme }) =>
    theme.colors.white === theme.color
      ? 'invert(100%) sepia(8%) saturate(6530%) hue-rotate(77deg) brightness(128%) contrast(120%)'
      : 'invert(0%) sepia(100%) saturate(7431%) hue-rotate(23deg) brightness(116%) contrast(86%)'};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-right: ${({ theme }) => theme.spaces.mediumS}px;
    height: 28px;
    width: 28px;
  }
`;

export const NavItem = styled.div`
  ${flexCenterVertical}

  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-bottom: ${({ theme }) => theme.spaces.mediumL}px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  color: ${({ theme }) => theme.color};
  transition: 0.1s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
    color: ${({ theme }) => theme.colors.blue};
  }
  &[aria-current] {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.fontWeights.l};
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
    &[aria-current] {
      font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    }
    &:hover {
      font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallAvatarImg = styled.img`
  ${smallAvatar}

  margin-right: ${({ theme }) => theme.spaces.smallM}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  }
`;

export const UserCard = styled.div`
  ${flexCenterVertical}

  margin: ${({ theme }) => theme.spaces.mediumL}px ${({ theme }) => theme.spaces.zero};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin: ${({ theme }) => theme.spaces.largeXL}px ${({ theme }) => theme.spaces.zero};
  }
`;

export const UserName = styled.span`
  ${textElipsis}

  max-width: 100px;
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 155px;
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }
`;

export const UserEmail = styled.span`
  ${userEmail}
  ${textElipsis}

  max-width: 100px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 155px;
  }
`;

export const TweetButton = styled.button`
  ${blueButton}
`;

export const LogOutButton = styled.button`
  ${blueButton}

  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.background};
`;

export const BurgerMenuButton = styled.button`
  cursor: pointer;
  width: 37px;
  display: none;
  float: left;
  margin-right: ${({ theme }) => theme.spaces.mediumL}px;
  outline: 0;
  border: 0;
  padding: ${({ theme }) => theme.spaces.smallS}px ${({ theme }) => theme.spaces.smallS}px
    ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallS}px;
  background: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
  }

  span {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
`;

export const StyledBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  background-color: ${({ theme }) => theme.color};
`;

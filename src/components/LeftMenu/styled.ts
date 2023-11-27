import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  blueButton,
  flexCenterVertical,
  smallAvatar,
  textElipsis,
  userEmail
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  padding-right: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding-right: 50px;
  }
`;

export const Logo = styled.img`
  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  width: 30px;
  height: 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.mediumL}px;
    margin-bottom: ${({ theme }) => theme.spaces.largeL}px;
    width: 40px;
    height: 33px;
  }
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.smallL}px;
  height: 20px;
  width: 20px;
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
`;

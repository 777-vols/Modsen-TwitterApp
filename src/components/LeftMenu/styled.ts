import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  blueButton,
  flexCenterVertical,
  smallAvatar,
  userEmail
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
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
  color: ${({ theme }) => theme.color};
  transition: 0.1s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    color: ${({ theme }) => theme.colors.blue};
  }
  &[aria-current] {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    font-weight: ${({ theme }) => theme.fontWeights.l};
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallAvatarImg = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  ${smallAvatar}
`;

export const UserCard = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  padding: ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumS}px
    ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.zero};
`;

export const UserName = styled.span`
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

export const UserEmail = styled.span`
  ${userEmail}
`;

export const TweetButton = styled.button`
  ${blueButton}
  height: 55px;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

import styled from 'styled-components';

import { flexCenterVertical, maxSize, resetButton } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.header`
  ${flexCenterVertical}
  position: sticky;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.background};
  top: 0px;
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallXL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 87px;
  }
`;

export const MenuWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const PageName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  }
`;

export const HomeHeader = styled.div`
  ${flexCenterVertical}
  ${maxSize}
  justify-content: space-between;
`;

export const ProfileHeader = styled.div`
  ${flexCenterVertical}
  ${maxSize}
`;

export const BackWrapper = styled.div`
  ${flexCenterVertical}
`;

export const BackButton = styled.button`
  ${resetButton}
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
`;

export const BackImage = styled.img`
  height: 12px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 14px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TweetsNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  margin-top: ${({ theme }) => theme.spaces.smallS}px;
  opacity: 0.7;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
    margin-top: ${({ theme }) => theme.spaces.zero};
  }
`;

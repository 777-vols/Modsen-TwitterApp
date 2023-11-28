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

export const BurgerMenuButton = styled.button`
  cursor: pointer;
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
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px, 4px);
      width: 27px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 27px;
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

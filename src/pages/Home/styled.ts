import styled from 'styled-components';

import { container, maxSize } from '@/constants/theme/styles/commonStyles';

export const PageWrapper = styled.div``;

export const Wrapper = styled.div`
  ${container}
  display: flex;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spaces.largeXXL}px;
`;

export const LeftSideBar = styled.aside`
  flex: 18 0 170px;
`;

export const MainWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  flex: 62 5 500px;
`;

export const RigthSideBar = styled.aside`
  flex: 12 1 310px;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 87px;
  }
`;

export const CreateTweetWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.main`
  ${maxSize}
`;

export const AllTweetsWrapper = styled.div`
  width: 100%;
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  }
`;

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

import styled from 'styled-components';

import { container, maxSize } from '@/constants/theme/styles/commonStyles';

export const PageWrapper = styled.div``;

export const Wrapper = styled.div`
  ${container}
  display: flex;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spaces.largeXXL}px;
`;

export const LeftSideBar = styled.div`
  width: 100%;
  max-width: 170px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 280px;
  }
`;

export const RigthSideBar = styled.div`
  width: 100%;
  max-width: 383px;
`;

export const Header = styled.header`
  height: 87px;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const CreateTweetWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 910px;
  }
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
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
`;

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

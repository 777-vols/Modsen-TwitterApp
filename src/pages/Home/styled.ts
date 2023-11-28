import styled from 'styled-components';

import { container, maxSize } from '@/constants/theme/styles/commonStyles';

export const PageWrapper = styled.div``;

export const Wrapper = styled.div`
  ${container}
  display: flex;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spaces.largeXXL}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-wrap: wrap;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
    padding-bottom: ${({ theme }) => theme.spaces.largeS}px;
  }
`;

export const LeftSideBar = styled.aside`
  flex: 18 1 170px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  flex: 62 3 500px;
`;

export const RigthSideBar = styled.aside`
  flex: 12 1 300px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    margin-top: ${({ theme }) => theme.spaces.mediumL}px;
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

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

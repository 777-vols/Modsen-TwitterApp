import styled from 'styled-components';

import {
  blueButton,
  container,
  flexCenter,
  flexCenterHorizontally,
  flexCenterVertical,
  maxSize
} from '@/constants/theme/styles/commonStyles';

export const PageWrapper = styled.div``;

export const Wrapper = styled.div`
  ${container}

  min-height: 100vh;
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
`;

export const CreateTweetWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.main``;

export const Section = styled.section`
  ${maxSize}
`;

export const AllTweetsWrapper = styled.div`
  ${flexCenterHorizontally}
  flex-direction: column;
  width: 100%;
`;

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const ButtonsWrapper = styled.div`
  ${flexCenterVertical}

  position: relative;
`;

export const GetMoreTweets = styled.div`
  ${flexCenter}

  flex-direction: column;
`;

export const MoreTweetsButton = styled.button`
  ${blueButton}

  margin: ${({ theme }) => theme.spaces.smallXL}px 0;
  max-width: 300px;
`;

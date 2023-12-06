import styled from 'styled-components';

import { flexCenter, textElipsis, userEmail } from '@/constants/theme/styles/commonStyles';

export const HeaderContent = styled.div`
  display: flex;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  ${textElipsis}

  max-width: 250px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: 140px;
  }
`;

export const ProfileInfo = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spaces.mediumM}px;
  padding-bottom: ${({ theme }) => theme.spaces.largeS}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding-bottom: ${({ theme }) => theme.spaces.largeL}px;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  margin-left: ${({ theme }) => theme.spaces.smallL}px;
  border-radius: 100px;
  top: -60px;
  left: 0;
  height: 110px;
  width: 110px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    top: -70px;
    height: 150px;
    width: 150px;
  }
`;

export const FollowingInfo = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeS}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  }
`;

export const Following = styled.span`
  margin-right: ${({ theme }) => theme.spaces.smallXL}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-right: ${({ theme }) => theme.spaces.mediumS}px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const UserInfo = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeL}px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  }
`;

export const Description = styled.span`
  margin-top: ${({ theme }) => theme.spaces.smallXL}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const EditProfileButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.color};
  height: 30px;
  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallL}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  right: 25px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 40px;
    padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.smallL}px;
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }
`;

export const InfoName = styled.span`
  ${textElipsis}

  max-width: 250px;
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  }
`;

export const InfoEmail = styled.span`
  ${textElipsis}
  ${userEmail}

  max-width: 250px;
`;

export const TweetsBlockHeader = styled.h2`
  ${flexCenter}

  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  width: 241px;
  height: 50px;
  margin-bottom: ${({ theme }) => theme.spaces.largeS}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 62px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
    margin-bottom: ${({ theme }) => theme.spaces.largeL}px;
  }
`;

export const CreateTweetWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  height: 150px;
`;

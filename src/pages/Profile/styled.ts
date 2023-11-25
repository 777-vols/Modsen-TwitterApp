import styled from 'styled-components';

import {
  container,
  flexCenter,
  flexCenterVertical,
  resetButton,
  textElipsis,
  userEmail
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${container}
  display: flex;
  padding-bottom: ${({ theme }) => theme.spaces.largeXXL}px;
`;

export const SideBar = styled.div`
  max-width: 280px;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Header = styled.header`
  height: 87px;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const BackButton = styled.button`
  ${resetButton}
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  font-size: ${({ theme }) => theme.fontSizes.largeM}px;
`;

export const HeaderContent = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  ${textElipsis}
  max-width: 250px;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
`;

export const TweetsNumber = styled.span`
  margin-top: ${({ theme }) => theme.spaces.smallS}px;
  opacity: 0.7;
`;

export const Banner = styled.img``;

export const ProfileInfo = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spaces.mediumM}px;
  padding-bottom: ${({ theme }) => theme.spaces.largeL}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const UserAvatar = styled.img`
  position: absolute;
  margin-left: ${({ theme }) => theme.spaces.smallL}px;
  border-radius: 100px;
  top: -70px;
  left: 0;
  height: 150px;
  width: 150px;
`;

export const FollowingInfo = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeXL}px;
`;

export const Following = styled.span`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
`;

export const UserInfo = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span`
  margin-top: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const EditProfileButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.smallL}px;
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
`;

export const InfoName = styled.span`
  ${textElipsis}
  max-width: 250px;
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

export const InfoEmail = styled.span`
  ${textElipsis}
  max-width: 250px;
  ${userEmail}
`;

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const TweetsBlockHeader = styled.h1`
  ${flexCenter}
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  width: 241px;
  height: 62px;
  margin-bottom: ${({ theme }) => theme.spaces.largeL}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const CreateTweetWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  height: 150px;
`;

export const BackWrapper = styled.div`
  ${flexCenterVertical}
`;

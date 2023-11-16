import styled from 'styled-components';

import { appContainer, blueButton, maxSize } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${appContainer}
  display: flex;
`;

export const SideBar = styled.div`
  max-width: 280px;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.main`
  max-width: 910px;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
  display: flex;
  flex-direction: column;
`;

export const HeaderName = styled.span`
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

export const InfoName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
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
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
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

export const UserName = styled.span`
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

export const WhatsHappening = styled.div`
  ${maxSize}
  position: relative;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spaces.smallXL}px;
  max-height: 150px;
  height: 100%;
`;

export const InputPanel = styled.div`
  position: relative;
  width: 100%;
`;

export const TweetInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  border: none;
`;

export const CreateTweet = styled.button`
  ${blueButton}
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  width: 116px;
  height: 50px;
  bottom: 10px;
  right: 10px;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

export const PanelImage = styled.img`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const RightPart = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const LogOutButton = styled.button`
  ${blueButton}
  max-width: 230px;
  height: 55px;
  background: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  margin-top: ${({ theme }) => theme.spaces.smallXL}px;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

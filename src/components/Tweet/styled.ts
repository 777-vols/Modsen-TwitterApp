import styled, { css } from 'styled-components';

import {
  flexCenterVertical,
  resetButton,
  smallAvatar,
  userEmail
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.mediumM}px
    ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumM}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.mediumXL}px
      ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumXL}px;
  }
`;

export const Avatar = styled.img`
  ${smallAvatar}
  margin-right: ${({ theme }) => theme.spaces.smallM}px;
`;

export const UserAvatarWrapper = styled.div``;

export const Content = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  ${flexCenterVertical}
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
`;

export const Email = styled.span`
  ${userEmail}
  margin: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallM}px;
`;

export const DateInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.span`
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    line-height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const TweetImage = styled.img`
  margin-top: ${({ theme }) => theme.spaces.smallL}px;

  border-radius: 20px;
  width: 100%;
  max-height: 450px;
`;

export const Likes = styled.div`
  ${flexCenterVertical}
  padding: ${({ theme }) => theme.spaces.smallL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.mediumS}px;
  }
`;

const Button = css`
  ${resetButton}
  cursor: pointer;
  transition: 0.1;
  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteButton = styled.button`
  ${Button}
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const LikeButton = styled.button`
  ${Button}
  ${flexCenterVertical}
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.smallS}px;
  height: 23px;
  width: 23px;
  filter: invert(10%) sepia(94%) saturate(7149%) hue-rotate(3deg) brightness(97%) contrast(83%);
  height: 18px;
  width: 18px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-right: ${({ theme }) => theme.spaces.smallM}px;
    height: 24px;
    width: 24px;
  }
`;

export const LikesCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

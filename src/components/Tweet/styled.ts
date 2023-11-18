import styled from 'styled-components';

import {
  flexCenterVertical,
  resetButton,
  smallAvatar,
  userEmail
} from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.mediumXL}px
    ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumXL}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const Avatar = styled.img`
  ${smallAvatar}
  margin-right: ${({ theme }) => theme.spaces.smallM}px;
`;

export const UserAvatarWrapper = styled.div``;

export const Content = styled.div``;

export const Info = styled.div`
  ${flexCenterVertical}
  margin-bottom: ${({ theme }) => theme.spaces.smallS}px;
`;

export const Email = styled.span`
  ${userEmail}
  margin: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallM}px;
`;

export const DateInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  opacity: 0.7;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
`;

export const Likes = styled.div`
  ${flexCenterVertical}
  padding: ${({ theme }) => theme.spaces.mediumS}px;
`;
export const DeleteButton = styled.button`
  ${resetButton}
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 10px;
  transition: 0.1;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LikesButton = styled.button`
  ${resetButton}
  cursor: pointer;
  transition: 0.1;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.smallM}px;
  height: 20px;
  width: 20px;
`;

export const LikesCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
`;

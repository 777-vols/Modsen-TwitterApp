import styled from 'styled-components';

import { blueButton, flexCenterVertical, maxSize } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${maxSize}
  display: flex;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const Form = styled.form`
  position: relative;
  min-height: 117px;
  width: 100%;
`;

export const TweetInput = styled.textarea`
  width: 100%;
  height: 70%;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  border: none;
`;

export const TweetButton = styled.button`
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

export const AddImageLabel = styled.label`
  ${flexCenterVertical}
  cursor: pointer;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const AddImageInput = styled.input``;

export const NameImage = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: ${({ theme }) => theme.spaces.smallM}px;
`;

export const CreateTweetWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

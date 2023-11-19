import styled from 'styled-components';

import { blueButton, flexCenterVertical, maxSize } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${maxSize}
  position: relative;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spaces.smallXL}px;
  max-height: 150px;
`;

export const Form = styled.form`
  position: relative;
  height: 117px;
  width: 100%;
`;

export const TweetInput = styled.input`
  width: 100%;
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

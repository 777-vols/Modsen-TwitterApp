import styled from 'styled-components';

import { blueButton, flexCenterVertical, maxSize } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${maxSize}
  display: flex;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const Form = styled.form`
  position: relative;
  ${maxSize}
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 50%;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  border: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const TweetButton = styled.button`
  ${blueButton}
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

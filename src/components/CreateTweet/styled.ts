import styled from 'styled-components';

import { blueButton, flexCenterVertical, maxSize } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${maxSize}
  display: flex;
  padding: ${({ theme }) => theme.spaces.smallL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.smallXL}px;
  }
`;

export const Form = styled.form`
  position: relative;
  ${maxSize}
`;

export const Textarea = styled.textarea`
  background: transparent;
  color: ${({ theme }) => theme.color};
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  line-height: 20px;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.color};
    opacity: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: ${({ theme }) => theme.spaces.smallL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.smallM}px;
  }
`;

export const TweetButton = styled.button`
  ${blueButton}
  width: 116px;
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
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const Image = styled.img`
  height: 25px;
  width: 25px;
  margin-right: ${({ theme }) => theme.spaces.smallM}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 30px;
    width: 30px;
  }
`;

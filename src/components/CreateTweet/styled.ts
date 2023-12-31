import styled from 'styled-components';

import {
  blueButton,
  flexCenterVertical,
  maxSize,
  textElipsis
} from '@/constants/theme/styles/commonStyles';

const minImageSize = 25;
const maxImageSize = 30;

export const Wrapper = styled.div`
  ${maxSize}

  display: flex;
  padding: ${({ theme }) => theme.spaces.smallL}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.smallXL}px;
  }
`;

export const Form = styled.form`
  ${maxSize}

  position: relative;
`;

export const Textarea = styled.textarea`
  background: transparent;
  color: ${({ theme }) => theme.color};
  width: 100%;
  height: 50%;
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
  left: ${({ theme }) => theme.spaces.smallM}px;
  bottom: ${({ theme }) => theme.spaces.smallM}px;
`;

export const AddImageInput = styled.input``;

export const NameImage = styled.span`
  ${textElipsis}

  max-width: 170px;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: 80px;
  }
`;

export const Image = styled.img`
  height: ${minImageSize}px;
  width: ${minImageSize}px;
  margin-right: ${({ theme }) => theme.spaces.smallM}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: ${maxImageSize}px;
    width: ${maxImageSize}px;
  }
`;

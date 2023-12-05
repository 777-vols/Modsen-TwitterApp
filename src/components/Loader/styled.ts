import styled, { css } from 'styled-components';

import { flexCenter, maxSize } from '@/constants/theme/styles/commonStyles';

import { IStyleProps } from './types';

export const SpinnerWrapper = styled.div`
  ${maxSize};
  ${flexCenter};

  padding: ${({ theme }) => theme.spaces.mediumM}px;
`;

export const Spinner = styled.span<IStyleProps>`
  ${maxSize}

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
  max-width: 100px;
  max-height: 100px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  ${({ $size }) => css`
    width: ${$size}px;
    height: ${$size}px;
  `}

  &:before,
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.blue};
    animation: prixClipFix 2s linear infinite;
  }
  &:after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

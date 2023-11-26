import { css } from 'styled-components';

export const container = css`
  margin: ${({ theme }) => theme.spaces.zero} auto;
  width: 100%;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.mediumM}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 1650px;
  }
`;

export const fullSreen = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const maxSize = css`
  width: 100%;
  height: 100%;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterVertical = css`
  display: flex;
  align-items: center;
`;

export const flexCenterHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const resetButton = css`
  border: none;
  background: transparent;
`;

export const blueButton = css`
  cursor: pointer;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 70px;
  color: ${({ theme }) => theme.colors.white};
`;

export const smallAvatar = css`
  border-radius: 100px;
  height: 35px;
  width: 35px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 50px;
    width: 50px;
  }
`;

export const userEmail = css`
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  opacity: 0.8;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }
`;

export const textElipsis = css`
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

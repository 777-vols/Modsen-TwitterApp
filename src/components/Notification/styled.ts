import styled, { css } from 'styled-components';

interface INotificationStylesProps {
  $isErrorActive: boolean;
}

export const Wrapper = styled.div<INotificationStylesProps>`
  position: fixed;
  z-index: 1000;
  top: ${({ theme }) => theme.spaces.smallM}px;
  right: ${({ theme }) => theme.spaces.mediumS}px;
  border: 3px solid ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  padding: ${({ theme }) => theme.spaces.smallM}px;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.green};

  ${({ $isErrorActive, theme }) =>
    $isErrorActive &&
    css`
      color: ${theme.colors.pink};
      border: 3px solid ${theme.colors.pink};
    `}

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    top: ${({ theme }) => theme.spaces.largeS}px;
    left: ${({ theme }) => theme.spaces.largeS}px;
    border: 3px solid ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    font-weight: ${({ theme }) => theme.fontWeights.l};
    padding: ${({ theme }) => theme.spaces.smallM}px;
  }
`;

export const Message = styled.span``;

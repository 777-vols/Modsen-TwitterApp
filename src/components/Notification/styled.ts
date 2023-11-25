import styled, { css } from 'styled-components';

interface INotificationStylesProps {
  $isErrorActive: boolean;
}

export const Wrapper = styled.div<INotificationStylesProps>`
  position: fixed;
  top: 40px;
  left: 40px;
  padding: ${({ theme }) => theme.spaces.smallM}px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.green};
  border: 3px solid ${({ theme }) => theme.colors.green};

  ${({ $isErrorActive, theme }) =>
    $isErrorActive &&
    css`
      color: ${theme.colors.pink};
      border: 3px solid ${theme.colors.pink};
    `}
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

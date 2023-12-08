import styled from 'styled-components';

import { blueButton, flexCenterHorizontally } from '@/constants/theme/styles/commonStyles';

const closeButtonSize = 35;

export const Window = styled.div`
  width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.background};
  max-width: 600px;
  border-radius: 20px;
  margin: ${({ theme }) => theme.spaces.smallM}px;
`;

export const CreateTweetWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeS}px;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spaces.mediumM}px;
`;

export const Title = styled.h3`
  ${flexCenterHorizontally};

  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.mediumM}px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  ${blueButton}

  max-width: 130px;
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  width: ${closeButtonSize}px;
  height: ${closeButtonSize}px;
  background: transparent;
  border: none;
  top: ${({ theme }) => theme.spaces.smallL}px;
  right: ${({ theme }) => theme.spaces.smallL}px;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
`;

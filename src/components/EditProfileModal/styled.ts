import styled from 'styled-components';

import { flexCenter, maxSize } from '@/constants/styles/commonStyles';

export const Background = styled.div`
  ${flexCenter}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.modal_bg};
`;

export const Window = styled.div`
  ${maxSize}
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.colors.white};
  max-width: 600px;
  height: fit-content;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  top: 15px;
  right: 15px;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
`;

export const GenderSelectWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const GenderHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  line-height: 24px;
  position: absolute;
  top: -23px;
  left: 15px;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  }
`;

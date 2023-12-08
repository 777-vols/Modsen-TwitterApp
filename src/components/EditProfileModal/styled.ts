import styled from 'styled-components';

import { flexCenter, maxSize } from '@/constants/theme/styles/commonStyles';

export const Background = styled.div`
  ${flexCenter}

  position: fixed;
  z-index: 10;
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
  background: ${({ theme }) => theme.background};
  max-width: 600px;
  height: fit-content;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spaces.smallXL}px;
  margin: ${({ theme }) => theme.spaces.smallM}px;
`;

export const GenderSelectWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spaces.smallXL}px;
`;

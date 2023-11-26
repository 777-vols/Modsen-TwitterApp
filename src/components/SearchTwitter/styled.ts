import styled from 'styled-components';

import { flexCenterVertical } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  width: 373px;
`;

export const InputWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.lightGrey};
  ${flexCenterVertical}
  height: 50px;
  width: 100%;
`;

export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  border: none;
  background: transparent;
  width: 100%;
`;

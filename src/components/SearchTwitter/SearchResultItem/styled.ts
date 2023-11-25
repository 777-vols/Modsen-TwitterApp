import styled from 'styled-components';

import { flexCenterVertical, textElipsis } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenterVertical}
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.smallL}px ${({ theme }) => theme.spaces.zero};
`;

export const UserName = styled.span`
  ${textElipsis}
  max-width: 180px;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  padding: ${({ theme }) => theme.spaces.smallM}px ${({ theme }) => theme.spaces.smallXL}px;
  max-height: 38px;
`;

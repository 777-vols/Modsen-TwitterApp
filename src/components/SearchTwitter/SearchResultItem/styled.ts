import styled from 'styled-components';

import { flexCenterVertical, textElipsis } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenterVertical}
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.smallL}px ${({ theme }) => theme.spaces.zero};
`;

export const UserName = styled.span`
  ${textElipsis}
  max-width: 100px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 180px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    max-width: 130px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  ${flexCenterVertical}
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallM}px;
  height: 28px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.smallXL}px;
    height: 38px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

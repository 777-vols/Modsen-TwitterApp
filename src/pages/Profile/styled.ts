import styled from 'styled-components';

import { appContainer, blueButton } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${appContainer}
  display: flex;
`;

export const SideBar = styled.div`
  max-width: 280px;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.main``;

export const RightPart = styled.aside``;

export const UserCard = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  padding: ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.mediumS}px
    ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.zero};
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardImage = styled.img`
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: 100px;
  height: 50px;
  width: 50px;
`;
export const CardName = styled.span`
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;
export const CardEmail = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  opacity: 0.7;
`;

export const LogOutButton = styled.button`
  ${blueButton}
  max-width: 230px;
  height: 55px;
  background: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  margin-top: ${({ theme }) => theme.spaces.smallXL}px;
  &:hover {
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  }
`;

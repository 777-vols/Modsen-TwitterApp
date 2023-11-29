import styled from 'styled-components';

import {
  container,
  flexCenter,
  flexCenterHorizontally,
  fullSreen
} from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  ${container}
  ${fullSreen}
  ${flexCenter}
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 450px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  margin: ${({ theme }) => theme.spaces.mediumM}px ${({ theme }) => theme.spaces.zero}
    ${({ theme }) => theme.spaces.mediumM}px ${({ theme }) => theme.spaces.smallM}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeL}px;
    margin: ${({ theme }) => theme.spaces.mediumXL}px ${({ theme }) => theme.spaces.zero};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    ${flexCenterHorizontally}
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeM}px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: ${({ theme }) => theme.spaces.mediumM}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.largeS}px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  }
`;

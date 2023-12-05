import styled from 'styled-components';

import { allImages } from '@/constants/allImages';
import { flexCenterHorizontally, fullSreen } from '@/constants/theme/styles/commonStyles';

const { errorBoundary } = allImages;

const sizeS = 300;
const sizeM = 450;
const sizeL = 600;
const sizeXL = 700;

export const Wrapper = styled.div`
  ${flexCenterHorizontally}
  ${fullSreen}

  background-color: ${({ theme }) => theme.colors.lightRed};
  align-items: center;
`;

export const Content = styled.div`
  ${flexCenterHorizontally}
  
  min-height: ${sizeS}px;
  min-width: ${sizeS}px;
  width: ${sizeXL}px;
  height: ${sizeXL}px;
  background-image: url(${errorBoundary});

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    width: ${sizeL}px;
    height: ${sizeL}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${sizeM}px;
    height: ${sizeM}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${sizeS}px;
    height: ${sizeS}px;
  }
`;

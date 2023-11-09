import styled from 'styled-components';

import { allImages } from '@/constants/allImages';
import { flexCenterHorizontally } from '@/constants/styles/commonStyles';

const { errorBoundary } = allImages;

const sizeS = 300;
const sizeM = 450;
const sizeL = 600;
const sizeXL = 700;

export const Wrapper = styled.div`
  ${flexCenterHorizontally}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  @media (${({ theme }) => theme.breakPoints.l}) {
    width: ${sizeL}px;
    height: ${sizeL}px;
  }
  @media (${({ theme }) => theme.breakPoints.m}) {
    width: ${sizeM}px;
    height: ${sizeM}px;
  }
  @media (${({ theme }) => theme.breakPoints.s}) {
    width: ${sizeS}px;
    height: ${sizeS}px;
  }
`;

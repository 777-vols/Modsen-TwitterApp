import styled from 'styled-components';

import { flexCenterHorizontally } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Text = styled.h2`
  ${flexCenterHorizontally}
  font-size: ${({ theme }) => theme.fontSizes.largeM}px;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
`;

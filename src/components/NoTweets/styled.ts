import styled from 'styled-components';

import { flexCenterHorizontally } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenterHorizontally}
  width: 100%;
`;
export const Text = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.largeL}px;
`;

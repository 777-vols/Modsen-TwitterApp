import styled from 'styled-components';

import { maxSize } from '@/constants/theme/styles/commonStyles';

export const AppWrapper = styled.div`
  ${maxSize}
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-width: 360px;
`;

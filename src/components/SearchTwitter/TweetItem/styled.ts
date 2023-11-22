import styled from 'styled-components';

import { flexCenterVertical } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenterVertical}
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.smallL}px ${({ theme }) => theme.spaces.zero};
`;

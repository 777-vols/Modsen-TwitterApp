import styled from 'styled-components';

import { blueButton, flexCenter } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
`;

export const MoreTweetsButton = styled.button`
  ${blueButton}

  margin: ${({ theme }) => theme.spaces.smallXL}px 0;
  max-width: 300px;
`;

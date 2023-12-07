import styled from 'styled-components';

import { blueButton, flexCenter } from '@/constants/theme/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexCenter}
  height: 100px;
  flex-direction: column;
`;

export const MoreTweetsButton = styled.button`
  ${blueButton}

  max-width: 300px;
`;

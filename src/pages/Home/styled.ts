import styled from 'styled-components';

import { maxSize } from '@/constants/theme/styles/commonStyles';

export const CreateTweetWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 910px;
`;

export const Main = styled.main`
  ${maxSize}
`;

export const AllTweetsWrapper = styled.div`
  width: 100%;
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
`;

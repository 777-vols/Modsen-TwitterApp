import styled from 'styled-components';

export const CreateTweetWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.main``;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
`;

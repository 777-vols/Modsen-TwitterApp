import styled from 'styled-components';

export const Window = styled.div`
  width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.background};
  max-width: 600px;
  border-radius: 20px;
  margin: ${({ theme }) => theme.spaces.smallM}px;
`;

export const CreateTweetWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.largeS}px;
`;

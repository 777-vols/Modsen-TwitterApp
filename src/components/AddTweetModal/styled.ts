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

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  top: 15px;
  right: 15px;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
`;

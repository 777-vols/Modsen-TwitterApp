import styled from 'styled-components';

export const Form = styled.form`
  margin: ${({ theme }) => theme.spaces.mediumL}px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.l};
  margin: ${({ theme }) => theme.spaces.mediumXL}px 0 ${({ theme }) => theme.spaces.mediumXL}px
    ${({ theme }) => theme.spaces.smallM}px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: ${({ theme }) => theme.spaces.largeS}px;
`;

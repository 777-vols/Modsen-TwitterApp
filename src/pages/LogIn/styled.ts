import styled from 'styled-components';

const fullSize = 100;

export const Wrapper = styled.div`
  width: ${fullSize}%;
  height: ${fullSize}vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const Button = styled.button`
  cursor: pointer;
  width: ${fullSize}%;
  height: 60px;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 70px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  border-radius: 6px;
  max-height: 70px;
  width: ${fullSize}%;
  height: ${fullSize}%;
  padding: ${({ theme }) => theme.spaces.mediumM}px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: ${({ theme }) => theme.spaces.largeS}px;
`;

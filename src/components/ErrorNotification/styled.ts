import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  padding: ${({ theme }) => theme.spaces.smallM}px;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  border-radius: 10px;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  color: ${({ theme }) => theme.colors.pink};
`;

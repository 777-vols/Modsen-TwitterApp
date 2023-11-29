import styled from 'styled-components';

interface IArguments {
  $currentTheme: boolean;
}

export const StyledLabel = styled.label<IArguments>`
  cursor: pointer;
  width: 42px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background: transparent;
  display: block;
  border-radius: 55px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ $currentTheme }) => ($currentTheme ? '19px' : '-1px')};
    top: -1px;
    width: 18px;
    height: 18px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50px;
    transition: 0.2s;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: 56px;
    height: 30px;
    border: 3px solid ${({ theme }) => theme.colors.grey};
    &:after {
      border: 3px solid ${({ theme }) => theme.colors.grey};
      left: ${({ $currentTheme }) => ($currentTheme ? '24px' : '-3px')};
      top: -2px;
      width: 25px;
      height: 25px;
    }
  }
`;
export const SwichToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;

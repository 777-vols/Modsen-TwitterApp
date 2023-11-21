import styled from 'styled-components';

interface IArguments {
  $currentTheme: boolean;
}

export const StyledLabel = styled.label<IArguments>`
  cursor: pointer;
  width: 56px;
  height: 30px;
  background: transparent;
  display: block;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 55px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ $currentTheme }) => ($currentTheme ? '24px' : '-1px')};
    top: -1px;
    width: 25px;
    height: 25px;
    background: transparent;
    border: 3px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50px;
    transition: 0.2s;
  }
`;
export const SwichToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;

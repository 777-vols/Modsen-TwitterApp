import styled from 'styled-components';

interface IArguments {
  $currentTheme: boolean;
}

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 42px;
  height: 22px;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: 56px;
    height: 30px;
    border: 3px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const SwitchButton = styled.span<IArguments>`
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 17px;
  height: 17px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.grey};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  left: ${({ $currentTheme }) => ($currentTheme ? 'calc(100%)' : '0x')};
  transform: ${({ $currentTheme }) => ($currentTheme ? 'translateX(-100%)' : '0x')};

  ${SwitchLabel}:active & {
    width: 70%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: 24px;
    height: 24px;
    border-radius: 45px;
  }
`;

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
    top: 0px;
    width: 18px;
    height: 18px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 35px;
    transition: 0.2s;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: 56px;
    height: 30px;
    border-radius: 35px;
    border: 3px solid ${({ theme }) => theme.colors.grey};
    &:after {
      border: 3px solid ${({ theme }) => theme.colors.grey};
      left: ${({ $currentTheme }) => ($currentTheme ? '25px' : '0px')};
      top: -1px;
      width: 25px;
      height: 25px;
    }
  }
`;

import styled from 'styled-components';

const mediumSwitchButtonSize = 19;
const bigSwitchButtonSize = 25;

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
  border: 2px solid ${({ theme }) => theme.colors.grey};
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
  top: 0;
  left: 0;
  width: ${mediumSwitchButtonSize}px;
  height: ${mediumSwitchButtonSize}px;
  border-radius: 45px;
  transition: 0.2s;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  left: ${({ $currentTheme }) => ($currentTheme ? 'calc(100%)' : '0x')};
  transform: ${({ $currentTheme }) => ($currentTheme ? 'translateX(-100%)' : '0x')};

  ${SwitchLabel}:active & {
    width: 70%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    width: ${bigSwitchButtonSize}px;
    height: ${bigSwitchButtonSize}px;
    border-radius: 45px;
  }
`;

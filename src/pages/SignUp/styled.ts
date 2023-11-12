import styled from 'styled-components';

const fullSize = 100;
const halfSize = 50;

export const Wrapper = styled.div`
  width: ${fullSize}%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Form = styled.form`
  max-width: 750px;
  max-height: 870px;
  padding: ${({ theme }) => theme.spaces.largeS}px;
  padding-top: ${({ theme }) => theme.spaces.mediumL}px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h1`
  margin: ${({ theme }) => theme.spaces.largeS}px ${({ theme }) => theme.spaces.zero};
`;

export const BirthDateHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  margin-top: ${({ theme }) => theme.spaces.smallXL}px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  margin: ${({ theme }) => theme.spaces.mediumL}px ${({ theme }) => theme.spaces.zero};
  opacity: 0.7;
  line-height: 24px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  width: ${fullSize}%;
  height: ${fullSize}%;
  border: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  max-height: 70px;
  padding: ${({ theme }) => theme.spaces.mediumM}px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  position: relative;
`;

export const ShowHidePassowrd = styled.div``;

export const EyeImage = styled.img`
  cursor: pointer;
  height: 25px;
  width: 25px;
`;

export const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  color: ${({ theme }) => theme.colors.pink};
  line-height: 24px;
  position: absolute;
  top: -25px;
  left: 15px;
`;

export const SelectBlock = styled.div`
  display: flex;
  width: ${fullSize}%;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces.mediumXL}px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${halfSize}%;
`;

export const MonthSelect = styled.div`
  margin-right: 3%;
  width: ${halfSize}%;
`;

export const DaySelect = styled.div`
  margin-right: 6%;
  width: ${halfSize}%;
`;

export const YearSelect = styled.div`
  width: ${halfSize}%;
`;

import styled from 'styled-components';

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

export const SelectBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces.mediumXL}px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const MonthSelect = styled.div`
  margin-right: 3%;
  width: 50%;
`;

export const DaySelect = styled.div`
  margin-right: 6%;
  width: 50%;
`;

export const YearSelect = styled.div`
  width: 50%;
`;

import styled, { css } from 'styled-components';

import {
  blueButton,
  flexCenterHorizontally,
  flexCenterVertical
} from '@/constants/theme/styles/commonStyles';

const fullSize = 100;
const halfSize = 50;

export const Button = styled.button`
  ${blueButton}

  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  height: 50px;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 60px;
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const Form = styled.form`
  max-width: 600px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    max-width: 750px;
  }
`;

export const LogoWrapper = styled.div`
  ${flexCenterHorizontally}
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  margin: ${({ theme }) => theme.spaces.mediumM}px ${({ theme }) => theme.spaces.zero};

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.largeM}px;
    margin: ${({ theme }) => theme.spaces.largeS}px ${({ theme }) => theme.spaces.zero};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    margin: ${({ theme }) => theme.spaces.mediumS}px ${({ theme }) => theme.spaces.zero};
  }
`;

export const BirthDateHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  margin-top: ${({ theme }) => theme.spaces.smallL}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-top: ${({ theme }) => theme.spaces.smallXL}px;
  }
`;

export const Text = styled.p`
  opacity: 0.7;
  line-height: 24px;
  margin: ${({ theme }) => theme.spaces.smallL}px ${({ theme }) => theme.spaces.zero};
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
    margin: ${({ theme }) => theme.spaces.mediumL}px ${({ theme }) => theme.spaces.zero};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  }
`;

const InputWrapperStyles = css`
  ${flexCenterVertical}

  background:${({ theme }) => theme.colors.white};
  height: 50px;
  padding: ${({ theme }) => theme.spaces.zero} ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  position: relative;
`;

export const InputWrapper = styled.div`
  ${InputWrapperStyles}

  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 70px;
    padding: ${({ theme }) => theme.spaces.mediumM}px;
    margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;
  }
`;

export const PasswordWrapper = styled.div`
  ${InputWrapperStyles}

  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 70px;
    padding: ${({ theme }) => theme.spaces.mediumM}px;
    margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;
    margin-top: ${({ theme }) => theme.spaces.largeS}px;
  }
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  width: ${fullSize}%;
  height: ${fullSize}%;
  border: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumL}px;
  }
`;

export const ShowHidePassowrd = styled.div``;

export const EyeImage = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    height: 25px;
    width: 25px;
  }
`;

export const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  color: ${({ theme }) => theme.colors.pink};
  line-height: 25px;
  position: absolute;
  top: -25px;
  left: 15px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  }
`;

export const PasswordError = styled.span`
  color: ${({ theme }) => theme.colors.pink};
  position: absolute;
  left: 15px;
  top: -20px;
  font-size: ${({ theme }) => theme.fontSizes.smallXL}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
    top: -30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    top: -20px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    top: -30px;
  }
`;

export const SelectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${fullSize}%;
  margin-bottom: ${({ theme }) => theme.spaces.mediumM}px;

  @media (min-width: ${({ theme }) => theme.breakPoints.bigScreen}px) {
    margin-bottom: ${({ theme }) => theme.spaces.mediumXL}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${halfSize}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${fullSize}%;
  }
`;

export const MonthSelect = styled.div`
  margin-right: 3%;
  width: ${halfSize}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${fullSize}%;
    margin-bottom: ${({ theme }) => theme.spaces.smallM}px;
  }
`;

export const DaySelect = styled.div`
  margin-right: 6%;
  width: ${halfSize}%;
`;

export const YearSelect = styled.div`
  width: ${halfSize}%;
`;

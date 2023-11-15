import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  appContainer,
  flexCenter,
  flexCenterHorizontally,
  flexCenterVertical,
  fullSreen,
  maxSize
} from '@/constants/styles/commonStyles';

const fullSize = 100;

export const Wrapper = styled.div`
  width: ${fullSize}%;
  ${fullSreen}
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    ${appContainer}
  }
`;

export const Main = styled.div`
  height: calc(${fullSize}% - 5%);
  width: ${fullSize}%;
  display: flex;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    height: 100%;
  }
`;

export const Banner = styled.img`
  height: ${fullSize}%;
  width: 60%;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    display: none;
  }
`;

export const Panel = styled.div`
  height: 100%;
  width: 40%;
  ${flexCenterVertical}
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    ${maxSize}
    justify-content: center;
  }
`;

export const Content = styled.div`
  padding-left: ${({ theme }) => theme.spaces.largeS}px;
  display: flex;
  flex-direction: column;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    padding-left: ${({ theme }) => theme.spaces.zero};
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 41px;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    margin: ${({ theme }) => theme.spaces.zero} auto;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.mobile}px)) {
    width: 40px;
    height: 40px;
  }
`;

export const MainHeader = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.largeL}px;
  margin: ${({ theme }) => theme.spaces.mediumL}px 0;
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.largeXL}px;
    margin-top: ${({ theme }) => theme.spaces.largeXL}px;
    margin-bottom: ${({ theme }) => theme.spaces.largeM}px;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    ${flexCenterHorizontally}
    margin: ${({ theme }) => theme.spaces.mediumS}px 0;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.mobile}px)) {
    font-size: ${({ theme }) => theme.fontSizes.largeM}px;
  }
`;

export const SubHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.largeM}px;
  margin-bottom: ${({ theme }) => theme.spaces.smallM}px;
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.largeL}px;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    ${flexCenterHorizontally}
    margin-bottom: ${({ theme }) => theme.spaces.smallL}px;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.mobile}px)) {
    font-size: ${({ theme }) => theme.fontSizes.largeS}px;
  }
`;

export const Button = css`
  ${flexCenter}
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  background: transparent;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.black};
  width: 320px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  margin-top: ${({ theme }) => theme.spaces.smallL}px;

  &:hover {
    transform: scale(1.05);
    border: 2px solid ${({ theme }) => theme.colors.grey};
  }

  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    margin: ${({ theme }) => theme.spaces.smallM}px auto;
  }

  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    width: 403px;
    height: 62px;
    font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
    margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  }
`;

export const GoogleButton = styled.button`
  ${Button}
`;

export const GoogleButtonImg = styled.img`
  @media ((max-width: ${({ theme }) => theme.breakPoints.tablet}px)) {
    width: 25px;
    height: 25px;
  }
`;

export const EmailButton = styled(NavLink)`
  ${Button}
`;

export const AgreeRule = styled.p`
  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  max-width: 375px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  line-height: 25px;
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    text-align: center;
  }
`;

export const HaveAccount = styled.p`
  margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
  }
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    text-align: center;
  }
`;

export const TextLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  ${flexCenter}
  height: 5%;
  width: ${fullSize}%;
  @media ((max-width: ${({ theme }) => theme.breakPoints.laptop}px)) {
    display: none;
  }
`;

export const NavList = styled.ul`
  ${flexCenterHorizontally}
`;

export const NavItem = styled.li`
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallM}px;
`;

export const FooterLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  }
`;

export const Signature = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.smallXXL}px;
  color: ${({ theme }) => theme.colors.black};
  @media ((min-width: ${({ theme }) => theme.breakPoints.bigScreen}px)) {
    font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  }
`;

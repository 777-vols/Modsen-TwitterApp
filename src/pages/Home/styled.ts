import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const fullSize = 100;

export const Wrapper = styled.div`
  width: ${fullSize}%;
  height: ${fullSize}vh;
`;

export const Main = styled.div`
  height: calc(${fullSize}% - 55px);
  width: ${fullSize}%;
  display: flex;
`;

export const Banner = styled.img`
  height: ${fullSize}%;
  width: 60%;
`;

export const Footer = styled.footer`
  height: 55px;
  width: ${fullSize}%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallM}px;
`;

export const FooterLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  height: ${fullSize}%;
  width: ${fullSize}%;
`;

export const Content = styled.div`
  padding-left: ${({ theme }) => theme.spaces.largeS}px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 50px;
  height: 41px;
`;

export const MainHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.largeXL}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  margin-top: ${({ theme }) => theme.spaces.largeXL}px;
  margin-bottom: ${({ theme }) => theme.spaces.largeM}px;
`;

export const SubHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.largeL}px;
  margin-bottom: ${({ theme }) => theme.spaces.smallM}px;
`;

export const Button = css`
  cursor: pointer;
  width: 403px;
  height: 62px;
  font-size: ${({ theme }) => theme.fontSizes.mediumXL}px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: transparent;
  margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const GoogleButton = styled.button`
  ${Button}
`;

export const EmailButton = styled(NavLink)`
  ${Button}
`;

export const AgreeRule = styled.p`
  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  width: 375px;
  font-weight: 100;
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSizes.mediumS}px;
`;

export const HaveAccount = styled.p`
  margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  font-size: ${({ theme }) => theme.fontSizes.mediumM}px;
`;

export const TextLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
  &:hover {
    text-decoration: underline;
  }
`;

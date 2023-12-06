import styled from 'styled-components';

const smallLogoSize = 40;

export const Wrapper = styled.div`
  span {
    width: 50px;
    height: 41px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      width: ${smallLogoSize}px;
      height: ${smallLogoSize}px;
    }
  }
`;

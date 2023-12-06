import styled from 'styled-components';

export const Wrapper = styled.div`
  span {
    width: 50px;
    height: 41px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      width: 40px;
      height: 40px;
    }
  }
`;

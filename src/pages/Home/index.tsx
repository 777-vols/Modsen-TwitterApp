import { FC } from 'react';

import LeftMenu from '@/components/LeftMenu';
import SideBar from '@/components/SearchTwitter';

import { Main, Wrapper } from './styled';

const Home: FC = () => (
  <Wrapper>
    <LeftMenu />
    <Main>Home</Main>
    <SideBar />
  </Wrapper>
);

export default Home;

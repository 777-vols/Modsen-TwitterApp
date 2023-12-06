import { FC } from 'react';

import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import Notification from '@/components/Notification';
import { Text } from '@/components/NoTweets/styled';
import SearchTwitter from '@/components/SearchTwitter';
import { searchUserHelper } from '@/helpers/searchHelpers';
import {
  LeftSideBar,
  Main,
  MainWrapper,
  RigthSideBar,
  Section,
  Wrapper
} from '@/pages/Home/styled';

import { config } from './config';

const { searchPlaceholder, searchError, pageName } = config;

const Notifications: FC = () => (
  <Wrapper>
    <LeftSideBar>
      <LeftMenu />
    </LeftSideBar>

    <MainWrapper>
      <Header pageName={pageName} />

      <Main>
        <Section>
          <Text>{pageName}</Text>
        </Section>
      </Main>
    </MainWrapper>

    <RigthSideBar>
      <SearchTwitter
        placeholder={searchPlaceholder}
        searchData={searchUserHelper}
        errorText={searchError}
      />
    </RigthSideBar>
    <Notification />
  </Wrapper>
);

export default Notifications;

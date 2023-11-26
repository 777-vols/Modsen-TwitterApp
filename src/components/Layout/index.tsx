import { FC, memo } from 'react';

import AllRouters from '@/components/AllRouters';

import { AppWrapper } from './styled';

const Layout: FC = () => (
  <AppWrapper>
    <AllRouters />
  </AppWrapper>
);

export default memo(Layout);

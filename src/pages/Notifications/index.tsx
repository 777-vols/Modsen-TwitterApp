import { FC } from 'react';

import EmptyPageLayout from '@/components/EmptyPageLayout';

import { config } from './config';

const { searchPlaceholder, searchError, pageName } = config;

const Notifications: FC = () => (
  <EmptyPageLayout
    searchPlaceholder={searchPlaceholder}
    searchError={searchError}
    pageName={pageName}
  />
);

export default Notifications;
